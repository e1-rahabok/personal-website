// Worker for rahabok.com.
// Static files are served from the repo root by the assets binding.
// This Worker adds the photo gallery API backed by the R2 bucket bound as PHOTOS.
//
// Public:
//   GET  /api/photos            list photos (JSON)
//   GET  /photos/<key>          photo bytes from R2
// Admin (Cloudflare Access login required):
//   PUT    /api/admin/photos?category=&title=&desc=   upload, body = image bytes
//   PATCH  /api/admin/photos/<key>                    JSON {category,title,desc,order}
//   DELETE /api/admin/photos/<key>

const CATEGORIES = {
  projects: 'work', books: 'work', tech: 'work',
  health: 'life', home: 'life', hobby: 'life', family: 'life',
};
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];
const MAX_BYTES = 15 * 1024 * 1024;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === '/api/photos' && request.method === 'GET') return listPhotos(env);
      if (path.startsWith('/photos/') && request.method === 'GET') {
        return getPhoto(env, decodeURIComponent(path.slice('/photos/'.length)), request);
      }
      if (path.startsWith('/api/admin/')) {
        const user = await verifyAccess(request, env);
        if (!user) return json({ error: 'Not signed in' }, 401);
        return adminRoute(request, env, url, user);
      }
    } catch (err) {
      return json({ error: err.message || 'Server error' }, 500);
    }

    return env.ASSETS.fetch(request);
  },
};

// ---------- public ----------

async function listPhotos(env) {
  const photos = [];
  let cursor;
  do {
    const page = await env.PHOTOS.list({ prefix: 'gallery/', cursor, include: ['customMetadata'] });
    for (const obj of page.objects) {
      const m = obj.customMetadata || {};
      photos.push({
        key: obj.key,
        url: '/photos/' + encodeURIComponent(obj.key),
        category: m.category || 'hobby',
        group: CATEGORIES[m.category] || 'life',
        title: m.title || '',
        desc: m.desc || '',
        order: Number(m.order || 0),
        uploaded: obj.uploaded,
      });
    }
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);

  // Lower order first, then newest first.
  photos.sort((a, b) => a.order - b.order || new Date(b.uploaded) - new Date(a.uploaded));
  return json({ photos }, 200, { 'Cache-Control': 'public, max-age=60' });
}

async function getPhoto(env, key, request) {
  if (!key.startsWith('gallery/')) return new Response('Not found', { status: 404 });
  const obj = await env.PHOTOS.get(key, { onlyIf: request.headers });
  if (!obj) return new Response('Not found', { status: 404 });
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set('ETag', obj.httpEtag);
  headers.set('Cache-Control', 'public, max-age=86400');
  if (!('body' in obj)) return new Response(null, { status: 304, headers });
  return new Response(obj.body, { headers });
}

// ---------- admin ----------

async function adminRoute(request, env, url, user) {
  const path = url.pathname;

  if (path === '/api/admin/me') return json({ email: user.email });

  if (path === '/api/admin/photos' && request.method === 'PUT') {
    const type = (request.headers.get('Content-Type') || '').split(';')[0];
    if (!IMAGE_TYPES.includes(type)) return json({ error: 'Not an image' }, 400);
    const size = Number(request.headers.get('Content-Length') || 0);
    if (size > MAX_BYTES) return json({ error: 'Image too large' }, 413);

    const meta = cleanMeta(Object.fromEntries(url.searchParams));
    const ext = type.split('/')[1].replace('jpeg', 'jpg');
    const key = `gallery/${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
    await env.PHOTOS.put(key, request.body, {
      httpMetadata: { contentType: type },
      customMetadata: meta,
    });
    return json({ key }, 201);
  }

  if (path.startsWith('/api/admin/photos/')) {
    const key = decodeURIComponent(path.slice('/api/admin/photos/'.length));
    if (!key.startsWith('gallery/')) return json({ error: 'Bad key' }, 400);

    if (request.method === 'DELETE') {
      await env.PHOTOS.delete(key);
      return json({ deleted: key });
    }

    if (request.method === 'PATCH') {
      // R2 can't edit metadata in place: copy the object with new metadata.
      const obj = await env.PHOTOS.get(key);
      if (!obj) return json({ error: 'Not found' }, 404);
      const meta = cleanMeta({ ...obj.customMetadata, ...(await request.json()) });
      await env.PHOTOS.put(key, obj.body, {
        httpMetadata: obj.httpMetadata,
        customMetadata: meta,
      });
      return json({ key, ...meta });
    }
  }

  return json({ error: 'Not found' }, 404);
}

function cleanMeta(input) {
  const category = CATEGORIES[input.category] ? input.category : 'hobby';
  return {
    category,
    title: String(input.title || '').slice(0, 120),
    desc: String(input.desc || '').slice(0, 500),
    order: String(parseInt(input.order, 10) || 0),
  };
}

// ---------- Cloudflare Access JWT check ----------
// Access puts a signed JWT in Cf-Access-Jwt-Assertion. We verify it here too,
// so the admin API stays locked even on routes Access does not cover
// (for example the workers.dev URL).

let certCache = { at: 0, keys: [] };

async function verifyAccess(request, env) {
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token || !env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD) return null;

  const [h, p, s] = token.split('.');
  if (!h || !p || !s) return null;
  const header = JSON.parse(b64text(h));
  const payload = JSON.parse(b64text(p));

  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) return null;
  const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!aud.includes(env.ACCESS_AUD)) return null;
  const issuer = `https://${env.ACCESS_TEAM_DOMAIN}`;
  if (payload.iss !== issuer) return null;

  if (Date.now() - certCache.at > 3600_000) {
    const res = await fetch(`${issuer}/cdn-cgi/access/certs`);
    certCache = { at: Date.now(), keys: (await res.json()).keys || [] };
  }
  const jwk = certCache.keys.find(k => k.kid === header.kid);
  if (!jwk) return null;

  const key = await crypto.subtle.importKey(
    'jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const ok = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5', key, b64bytes(s), new TextEncoder().encode(`${h}.${p}`));
  if (!ok) return null;

  const allowed = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
  if (allowed.length && !allowed.includes(String(payload.email).toLowerCase())) return null;
  return { email: payload.email };
}

function b64bytes(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(str.length / 4) * 4, '=');
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0));
}
function b64text(str) {
  return new TextDecoder().decode(b64bytes(str));
}

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra },
  });
}
