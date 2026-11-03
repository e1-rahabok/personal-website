# CLAUDE.md

## Project
- Personal website for Iwan Rahabok. Live at https://rahabok.com.
- Static site: `index.html`, `styles.css`, `script.js`. No build step.
- `index.html` loads Tailwind and lucide icons from CDNs.
- `src/`, `tailwind.config.js` and React deps in `package.json` are an unused React draft.

## Hosting
- Cloudflare Worker `personal-website`, deployed by Workers Builds from `main`.
- `wrangler.jsonc` serves the repo root as static assets.
- `.assetsignore` keeps source, config and git files off the site. Add new non-site files there.
- `npm run build` is a no-op on purpose. React scripts live under `react:*`.
- Known issue: preview builds on non-`main` branches fail. Cause unknown; needs the Cloudflare build log.

## Checks before push
- `index.html` is HTML, `styles.css` is CSS, `script.js` is JS. (Contents were once swapped by mistake.)
- `node --check script.js` passes.
- CDN script URLs return 200 (`curl -sI <url>`).
- Page loads in headless Chromium with no page errors.
