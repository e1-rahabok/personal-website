# Photo gallery setup

One-time steps. Do them **before merging** the PR, or the deploy fails (the R2 bucket must exist).

## 1. Create the R2 bucket
- Cloudflare dashboard → R2 → Create bucket.
- Name: `rahabok-photos`. Default settings.

## 2. Protect `/admin` with Cloudflare Access
- Dashboard → Zero Trust → Access → Applications → Add → Self-hosted.
- Name: `Website admin`.
- Add two public hostnames, both `rahabok.com`:
  - Path `admin*`
  - Path `api/admin/*`
- Policy: Allow → Include → Emails → your email.
- Login method: One-time PIN (email code), or Google.
- Save. Open the app's Overview and copy the **Application Audience (AUD) tag**.
- Note your team domain: Zero Trust → Settings → Custom pages, e.g. `yourteam.cloudflareaccess.com`.

## 3. Tell the Worker
- Workers & Pages → `personal-website` → Settings → Variables and Secrets. Add:
  - `ACCESS_TEAM_DOMAIN` = `yourteam.cloudflareaccess.com`
  - `ACCESS_AUD` = the AUD tag
  - `ADMIN_EMAILS` = your email (optional extra check; comma-separated)
- Or put them in `wrangler.jsonc` → `vars`. Dashboard values are kept private; repo values are public.
- Without these, every admin request returns 401. The public gallery still works.

## 4. Use it
- Open `https://rahabok.com/admin` on your phone. Log in.
- Pick a category. Tap **Choose photos**. Android's picker shows phone and Google Photos images.
- Photos are resized to 2000px and uploaded. Location data is stripped.
- Edit title, category or order, or delete, from the list below.
- The site shows changes within about a minute.

## Notes
- Until the first upload, the site shows the old placeholder photos.
- Categories: Work = projects, books, tech. Life = health, home, hobby, family.
- R2 free tier: 10 GB storage.
