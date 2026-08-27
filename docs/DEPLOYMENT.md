# Deployment Guide — Sparsh Edits Portfolio

**GitHub:** https://github.com/sparsh-n-sharma/myportfolio  
**Domain:** `sparshedits.com`  
**Hosting:** Vercel (free Hobby tier)

---

## Fix: "You don't have access" on Vercel

This happens when Vercel’s GitHub connection doesn’t match the account that owns the repo. Do this **on Sparsh’s computer**, logged in as **sparsh-n-sharma** on both GitHub and Vercel.

### Step A — Re-authorize GitHub on Vercel

1. Log into [vercel.com](https://vercel.com) as Sparsh (not Vishal’s account).
2. Go to **Account Settings → Authentication** (or **Settings → Git**).
3. **Disconnect** GitHub if it’s connected to the wrong account.
4. **Connect GitHub** again → sign in as **sparsh-n-sharma**.
5. When GitHub asks which repos Vercel can access, choose **“Only select repositories”** and pick **`myportfolio`** (or “All repositories”).

### Step B — Fix GitHub App permissions

1. On GitHub (as **sparsh-n-sharma**): **Settings → Applications → Installed GitHub Apps → Vercel**.
2. Click **Configure**.
3. Under **Repository access**, ensure **`sparsh-n-sharma/myportfolio`** is selected.
4. Save.

### Step C — Import the project

1. Vercel dashboard → **Add New → Project**.
2. You should see **`sparsh-n-sharma/myportfolio`** in the list.
3. Import → Framework: **Next.js** (auto) → **Deploy**.

If the repo still doesn’t appear, use **CLI deploy** below (no GitHub import needed).

---

## Option 1 — Deploy via Vercel CLI (bypasses GitHub import issues)

Run on Sparsh’s machine in the project folder:

```bash
cd path/to/Sparsh
npm install
npx vercel@59.7.0 login
```

Log in with **Sparsh’s Vercel account** when the browser opens.

```bash
npx vercel@59.7.0 --prod
```

Answer prompts:

- **Set up and deploy?** Yes
- **Which scope?** Sparsh’s personal account
- **Link to existing project?** No (first time)
- **Project name?** `sparsh-edits` or `myportfolio`
- **Directory?** `./` (default)

You’ll get a live URL like `https://myportfolio-xxx.vercel.app`.

To link GitHub later: Vercel project → **Settings → Git → Connect**.

---

## Option 2 — GitHub → Vercel (auto-deploy on push)

After Steps A–C above:

| Setting | Value |
|---------|--------|
| Repository | `sparsh-n-sharma/myportfolio` |
| Branch | `main` |
| Build command | `npm run build` |
| Output | Next.js (automatic) |
| Env vars | None required |

Every push to `main` redeploys automatically.

---

## Connect `sparshedits.com`

### 1. Add domain in Vercel

1. Open the deployed project on Vercel.
2. **Settings → Domains → Add**
3. Add both:
   - `sparshedits.com`
   - `www.sparshedits.com`
4. Vercel shows the DNS records you need.

### 2. DNS at your domain registrar

Where you bought `sparshedits.com` (GoDaddy, Namecheap, Cloudflare, etc.):

| Type | Name / Host | Value |
|------|-------------|--------|
| **A** | `@` (or blank) | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

**If using Cloudflare:** set proxy to **DNS only** (grey cloud) for the first deploy, or use Vercel’s recommended Cloudflare setup.

Wait 5–30 minutes (up to 48h in rare cases). Vercel issues HTTPS automatically.

### 3. Set primary domain

In Vercel **Domains**, set `sparshedits.com` as primary and redirect `www` → apex (or vice versa — pick one).

---

## Email (optional)

For `hello@sparshedits.com` or similar:

- **Cloudflare Email Routing** (free) — forward to Sparsh’s Gmail
- **Zoho Mail** (free tier) — full mailbox

Update `siteContent.email` in `lib/data/content.ts` after setup.

---

## Post-deploy checklist

- [ ] https://sparshedits.com loads
- [ ] https://www.sparshedits.com redirects correctly
- [ ] Contact form opens mail app
- [ ] Mobile layout works (slider, videos, drawer)
- [ ] Replace demo media (`docs/ASSET_CHECKLIST.md`)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| **You don't have access** | Reconnect GitHub on Vercel as `sparsh-n-sharma`; grant Vercel app access to `myportfolio` (see above) |
| Repo not in Vercel list | Repo must be under the same GitHub account connected to Vercel |
| Domain not verifying | Double-check A + CNAME; disable Cloudflare proxy temporarily |
| Build fails | Run `npm run build` locally; fix errors before pushing |
| Wrong account deployed | `npx vercel logout` then `npx vercel login` as Sparsh |

---

## Local git remote (for developers)

```bash
git remote set-url origin https://github.com/sparsh-n-sharma/myportfolio.git
git push -u origin main
```

Pushes must use Sparsh’s GitHub credentials (or a collaborator with write access).
