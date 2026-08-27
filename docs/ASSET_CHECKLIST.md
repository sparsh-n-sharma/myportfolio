# Asset Checklist — Sparsh Sharma Portfolio

Use this checklist before going live. Do **not** publish with fictional clients, invented metrics, or unlabeled sample work.

## Video assets

- [ ] **Showreel** — 60–90 second best-of reel (replace `media.showreelVideo`)
- [ ] **Hero background** — optional custom loop (replace `media.heroBackgroundVideo`)
- [ ] **8 content-type reels** — one real clip per category in `lib/data/projects.ts`:
  - [ ] Restaurant / Food
  - [ ] Talking Head / Creator
  - [ ] Product / Brand
  - [ ] Event
  - [ ] Fashion
  - [ ] AI-enhanced
  - [ ] Motion graphics
  - [ ] Before/after proof
- [ ] **Before/after pairs** — 2–3 raw + edited pairs (update `lib/data/beforeAfter.ts`)
- [ ] **About section** — profile photo or personal clip (replace `media.aboutVideo` / `media.aboutImage`)

## Copy & business info

- [ ] **Bio & experience** — verify entries in `lib/data/content.ts` match Sparsh's real history
- [ ] **Retainer pricing** — confirm ₹ amounts in `lib/data/retainer.ts` (Starter / Growth / Scale)
- [ ] **Email** — working inbox at `hello@sparshsharma.com` (or update `siteContent.email`)
- [ ] **Social links** — real LinkedIn, Instagram, Behance URLs in `lib/data/content.ts`

## Launch gate

Before publishing:

1. Set `contentType: "client"` only on projects with real client permission
2. Keep `contentType: "demo"` items labeled until replaced — or swap in real media
3. Do **not** enable `showClients` until real client names are confirmed
4. Remove all invented metrics from any client work (`results[]` in projects)
5. Replace all stock URLs in `lib/data/media.ts`

## Where to put files

| Asset | File to edit |
|-------|----------------|
| All video/image URLs | `lib/data/media.ts` |
| Project copy & categories | `lib/data/projects.ts` |
| Before/after pairs | `lib/data/beforeAfter.ts` |
| Bio, contact, pricing copy | `lib/data/content.ts`, `lib/data/retainer.ts` |
| Client list (when ready) | `lib/data/clients.ts` + set `showClients: true` in `content.ts` |

## Hosting large videos

If files exceed Git limits, host on **Cloudinary**, **Mux**, or **Vercel Blob** and paste the CDN URLs into `media.ts`.
