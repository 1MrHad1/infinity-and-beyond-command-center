# Infinity & Beyond — Command Center · Handover

Everything you need to run, deploy, use, and extend the Infinity & Beyond Command Center.

---

## 1. What this is
A private, trackable **command center + 60-day build roadmap** for the Infinity & Beyond
digital + web marketing agency. Each teammate logs in securely, sees **today's missions**,
ticks them complete, and watches their **progress bar + ninja belt rank** climb. The **owner**
sees everyone's live progress in one place.

- **Stack:** Next.js (App Router) + Supabase (Auth + Postgres), TypeScript.
- **Design:** ported from the FameNinja Command Center (neo-brutalist, monospace, dotted grid,
  hard 2px borders + offset shadows), re-branded Infinity & Beyond (cosmic-indigo `∞`, light/dark).
- **Status:** Built ✓ · Database seeded ✓ (4 accounts + 567 tasks) · verified working against Supabase ✓ · deploying to Netlify.

## 2. Links & IDs
| Thing | Value |
|---|---|
| GitHub repo (private) | https://github.com/1MrHad1/infinity-and-beyond-command-center |
| Supabase project URL | https://YOUR-PROJECT.supabase.co |
| Netlify site | https://infinity-andbeyond.netlify.app *(name as created; update if renamed)* |
| Program Day 1 | 2026-09-01 |

## 3. Logins
Passwords were set at seed time; ask each person to change theirs after first login.

| Role | Email | Password |
|---|---|---|
| Owner | umaildanish776@gmail.com | `Owner@1234` |
| Nishanth (Tech/Dev) | nishanthmahesh.in@gmail.com | `Nishanth@1234` |
| Rohini (Brand/Content) | alamrohini5@gmail.com | `Rohini@1234` |
| Afeeda (Learning) | afeedama49@gmail.com | `Afeeda@1234` |

## 4. Environment variables
Set these in **Netlify → Site configuration → Environment variables** (and locally in `.env.local`).
The `NEXT_PUBLIC_*` values are baked in at **build time**, so they must exist before the build runs.

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_YUzSAKhy3YcdUnpcXP37aw_LZ7aBKlN
NEXT_PUBLIC_PROGRAM_START=2026-09-01
```

- **Service-role / secret key** (`sb_secret_…`) is required **only** by the local seed script
  (`scripts/seed.mjs`). Keep it in your local `.env.local` — **never** put it in Netlify or the repo.
  Get it (or rotate it) at Supabase → Project Settings → API Keys.

## 5. The three 60-day tracks
Full day-by-day plans live in `data/roadmap-<slug>.json` and are loaded into the DB by the seed.
Human-readable versions are in `docs/roadmaps/`.

| Person | Track | Focus | Tasks |
|---|---|---|---|
| Nishanth Mahesh | `nishanth` | Technical / eCommerce & Dev lead — builds the site, Shopify/web-dev/SEO/automation delivery | 224 |
| Rohini Alam | `rohini` | Marketing / Brand & Content lead — brand, content engine, social, campaigns, first-client marketing | 165 |
| Afeeda M.A | `afeeda` | Junior (learning track) — WordPress → Shopify → Meta Ads → SEO → light HTML/CSS → real delivery | 178 |

Shared 60-day arc: Foundation → Brand+Web → Website+Offer → Content+Proof → Lead-gen →
Outreach+Sales → Delivery systems → Scale+Optimize → Launch+Review.

## 6. How it works
- **Secure login** — Supabase email/password; sessions via cookies + Next middleware. Unauthenticated
  users are redirected to `/login`.
- **/today** — the tasks for the current program day (from `NEXT_PUBLIC_PROGRAM_START`), with a
  progress ring, ninja belt, streak and KPIs.
- **/roadmap** — the full 60-day plan grouped by day; tick tasks, work ahead, or catch up. The owner
  gets a read-only track switcher across all three people.
- **/team** — owner sees all three tracks with live progress, pace and milestones; teammates see their
  own summary.
- **Row-Level Security** — each teammate can only read/write **their own** completions; the owner can
  read everyone's. Roadmap content is shared-read. Enforced in Postgres via `supabase/schema.sql`.

## 7. Run locally
```bash
cd infinity-and-beyond
cp .env.local.example .env.local     # then fill in the values from section 4 (+ service_role for seeding)
npm install
# (first time only) create schema: paste supabase/schema.sql into Supabase SQL Editor → Run
npm run seed                          # creates the 4 accounts + loads all roadmaps
npm run dev                           # http://localhost:3000
```

## 8. Deploy (Netlify — Git-connected, auto-deploys on push)
1. Netlify → **Add new project → Import from GitHub** → `1MrHad1/infinity-and-beyond-command-center`.
2. Build settings (auto-detected): command `npm run build`, Next.js Runtime. Leave as-is.
3. Add the **3 environment variables** from section 4 **before** the first build.
4. Deploy. Every push to `main` now auto-deploys.
5. Supabase → **Authentication → URL Configuration** → set **Site URL** to the Netlify domain.

## 9. Editing the roadmaps
Edit `data/roadmap-<track>.json` (each is `{ person, slug, role, weeks[], days[] }`, 60 days, 2–4
tasks/day), then `npm run seed`. Task IDs are stable across re-seeds (upsert on
`track_slug,day,idx`), so existing completions are preserved. Re-run `node scripts/export-roadmaps.mjs`
to refresh the readable `docs/roadmaps/*.md`.

## 10. Project structure
```
app/
  (app)/            authenticated shell + pages: today, roadmap, team
  login/            secure login (page + server action)
  auth/signout/     sign-out route
components/         Rail (nav), TaskRow (toggle completion), ThemeToggle
lib/
  supabase/         server.ts, client.ts, middleware.ts (SSR auth)
  roadmap.ts        data access + progress/day computation
  types.ts          types, category meta, ninja belts
data/               roadmap-nishanth.json | roadmap-rohini.json | roadmap-afeeda.json
supabase/schema.sql tables + RLS + is_owner() helper
scripts/
  seed.mjs          create accounts + load roadmaps
  export-roadmaps.mjs  JSON → docs/roadmaps/*.md
docs/roadmaps/      human-readable 60-day plans
```

## 11. Security notes
- Rotate the `sb_secret_…` service-role key in Supabase (it passed through a chat during setup).
- RLS is on for all tables; the owner role is defined by `profiles.is_owner` and checked via a
  `SECURITY DEFINER` `is_owner()` function (avoids policy recursion).
- Change all four default passwords after first login.

## 12. Known notes
- Because Day 1 = 2026-09-01, before that date the app shows Day 1 and pace pills may read
  "slightly behind" — this self-corrects once the program starts.
- The Netlify project name is `infinity-andbeyond` (no second "and-"); rename in Netlify if you want
  `infinity-and-beyond`.

## 13. Ideas for later
- Per-person password reset flow (Supabase already supports it).
- Weekly email/WhatsApp digest of each person's progress.
- Notes/attachments per task; comments from the owner.
- A "this week" view and an all-time activity log.
