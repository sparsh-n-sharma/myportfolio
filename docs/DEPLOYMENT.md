# Deployment Guide — Sparsh Sharma Portfolio

Zero-maintenance hosting: **GitHub → Vercel → custom domain**. No server bills for Sparsh.

## Cost summary

| Item | Cost |
|------|------|
| Vercel (Hobby tier) | Free for a portfolio this size |
| Domain (`sparshsharma.com`) | ~₹800–1,200/year |
| Email forwarding | Free (Cloudflare Email Routing or Zoho Mail free tier) |

---

## Step 1 — Push to GitHub

If the repo is not on GitHub yet:

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sparsh-portfolio.git
git push -u origin main
```

---

## Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import the `sparsh-portfolio` repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel assigns a URL like `sparsh-portfolio.vercel.app`. Every push to `main` auto-redeploys.

### Build settings (defaults work)

- Build command: `npm run build`
- Output: Next.js App Router (automatic)
- No environment variables required (contact uses `mailto:`)

---

## Step 3 — Buy & connect domain

1. Buy `sparshsharma.com` from [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), Namecheap, or GoDaddy
2. In Vercel: **Project → Settings → Domains → Add** `sparshsharma.com` and `www.sparshsharma.com`
3. Vercel shows DNS records — add them at your registrar:

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

4. Wait for DNS propagation (usually 5–30 minutes). Vercel enables HTTPS automatically.

---

## Step 4 — Email setup (no server)

Sparsh needs `hello@sparshsharma.com` to receive inquiries.

### Option A — Cloudflare Email Routing (recommended if domain is on Cloudflare)

1. Cloudflare dashboard → **Email → Email Routing**
2. Add destination: Sparsh's Gmail
3. Create route: `hello@sparshsharma.com` → forward to Gmail

### Option B — Zoho Mail free tier

1. Sign up at [zoho.com/mail](https://www.zoho.com/mail/)
2. Add domain and verify DNS
3. Create mailbox `hello@sparshsharma.com`

Update `siteContent.email` in `lib/data/content.ts` if using a different address.

---

## Step 5 — Post-deploy checklist

- [ ] Visit `https://sparshsharma.com` — all sections load
- [ ] Test contact form — opens mail app with pre-filled subject/body
- [ ] Test on mobile — before/after slider, video previews, contact drawer
- [ ] Replace placeholder media (see `docs/ASSET_CHECKLIST.md`)
- [ ] Update Open Graph image if using a custom photo (`media.ogImage` + `app/layout.tsx`)

---

## Maintenance for Sparsh (non-technical)

Sparsh does **not** need to touch servers. To update content:

1. Send you (or a developer) new video links and copy
2. Developer updates `lib/data/` files and pushes to GitHub
3. Vercel redeploys automatically in ~1 minute

For urgent text-only changes, Vercel's dashboard also supports redeploys from GitHub without local setup.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Domain not connecting | Verify DNS records match Vercel exactly; wait up to 48h |
| Videos not playing | Check video URLs are HTTPS and publicly accessible |
| Build fails on Vercel | Run `npm run build` locally first; fix TypeScript errors |
| Contact form does nothing | `mailto:` requires a local email client — consider Formspree later if leads are missed |
