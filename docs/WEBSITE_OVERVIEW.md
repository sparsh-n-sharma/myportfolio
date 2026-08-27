# Sparsh Sharma Portfolio — Website Overview

> **Purpose:** Reference for content alignment, site structure, and deployment.
>
> **Screenshot:** [`docs/website-full-page-screenshot.png`](./website-full-page-screenshot.png) (may be outdated after conversion redesign)
>
> **Before launch:** See [`docs/ASSET_CHECKLIST.md`](./ASSET_CHECKLIST.md)
>
> **Deploy:** See [`docs/DEPLOYMENT.md`](./DEPLOYMENT.md)

---

## Positioning

**Short-form Video Editor & Motion Designer** — monthly retainer partner for brands, creators, and agencies.

Core message: *"I can become your monthly short-form editing partner — here's exactly what I produce."*

---

## Page sections (order)

| # | Section | ID | Purpose |
|---|---------|-----|---------|
| 1 | Hero | `hero` | Name, role, retainer-focused tagline, CTAs, capability pills |
| 2 | Showreel | `showreel` | Video proof (timeline: RAW) |
| 3 | Retainer | `retainer` | Monthly packages + pricing in ₹ (timeline: EDIT) |
| 4 | Projects | `projects` | 8 content-type samples (timeline: MOTION) |
| 5 | Before/After | `before-after` | Raw vs edited slider (timeline: COLOR) |
| 6 | Audience | `audience` | Who I work with — agencies, restaurants, creators, brands |
| 7 | About | `about` | Bio, experience, services grid |
| 8 | Contact | `contact` | Lead-qualifying form + mailto (timeline: EXPORT) |

**Removed/hidden:** Clients section (`showClients: false` until real client names exist).

---

## Key data files

| What | File |
|------|------|
| Copy, bio, CTAs, section text | `lib/data/content.ts` |
| Projects (8 deliverable types) | `lib/data/projects.ts` |
| Retainer packages + ₹ pricing | `lib/data/retainer.ts` |
| Audience segments | `lib/data/audience.ts` |
| Services (replaces star ratings) | `lib/data/services.ts` |
| Before/after pairs | `lib/data/beforeAfter.ts` |
| Contact form options | `lib/data/formOptions.ts` |
| Media URLs | `lib/data/media.ts` |
| Hero pills | `lib/data/capabilities.ts` |

---

## Retainer pricing (confirm with Sparsh before launch)

| Plan | Reels/month | Price |
|------|-------------|-------|
| Starter | 10 | ₹25,000/mo |
| Growth | 20 | ₹45,000/mo |
| Scale | 30 | ₹65,000/mo |

---

## Launch gate

Do not publish until:

1. Sample projects replaced or clearly labeled (`contentType: "demo"`)
2. No fictional client names or invented metrics
3. Pricing confirmed with Sparsh
4. Real email + social links working

---

*Last updated: August 2026 — conversion redesign.*
