# Infinity & Beyond — Command Center

A private, trackable command center + 60-day build roadmap for the **Infinity & Beyond**
digital + web marketing agency. Each teammate logs in securely, sees **today's missions**,
ticks them complete, and watches their **progress bar & ninja rank** climb. The owner sees
everyone's progress in one place.

Built with **Next.js (App Router) + Supabase** (auth + Postgres). Design language is ported
from the FameNinja Command Center (neo-brutalist, monospace, dotted grid), re-branded with the
Infinity & Beyond cosmic-indigo accent.

## The three tracks

| Person | Track | Focus |
|---|---|---|
| **Nishanth Mahesh** | `nishanth` | Technical / eCommerce & Dev Lead — builds the site, Shopify/web-dev/SEO/automation delivery systems |
| **Rohini Alam** | `rohini` | Marketing / Brand & Content Lead — brand, content engine, social, campaigns, first-client marketing |
| **Afeeda M.A** | `afeeda` | Junior (learning track) — guided WordPress → Shopify → Meta Ads → SEO → light HTML/CSS, ramping into real delivery |

Each track has a full **60-day, day-by-day** plan (`data/roadmap-*.json`), loaded into the
database by the seed script.

## Setup (about 15 minutes)

### 1. Create a Supabase project
Sign up at [supabase.com](https://supabase.com) → **New project** (free tier is fine). Note the
project URL and API keys under **Project Settings → API**.

### 2. Create the database schema
Supabase Dashboard → **SQL Editor → New query** → paste all of `supabase/schema.sql` → **Run**.

### 3. Configure environment
```bash
cp .env.local.example .env.local
```
Fill in:
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Settings → API)
- `SUPABASE_SERVICE_ROLE_KEY` (Settings → API → `service_role` secret — server-only, never commit)
- `NEXT_PUBLIC_PROGRAM_START` — the date the 60-day program begins (`YYYY-MM-DD`); this drives "today's missions".
- (optional) `OWNER_EMAIL`, and `OWNER_PASSWORD` / `NISHANTH_PASSWORD` / `ROHINI_PASSWORD` / `AFEEDA_PASSWORD` to set fixed passwords; otherwise strong ones are generated and printed once.

### 4. Install & seed
```bash
npm install
npm run seed      # creates the 4 accounts + profiles, loads all roadmaps
```
The seed prints each new account's password **once** — save and share them, then have each
person change their password.

### 5. Run
```bash
npm run dev       # http://localhost:3000
```

## Deploy (Vercel)
1. Push this repo to GitHub (private).
2. Import it in [Vercel](https://vercel.com) → add the same env vars (`NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_PROGRAM_START`).
3. Deploy. In Supabase → **Authentication → URL Configuration**, add your Vercel domain.

## How it works
- **Secure login** — Supabase email/password auth; sessions via cookies + middleware. Unauthenticated
  users are redirected to `/login`.
- **Today's Missions** (`/today`) — the tasks scheduled for the current program day, with a progress
  ring, ninja belt rank, streak, and KPIs.
- **60-Day Roadmap** (`/roadmap`) — the full plan grouped by day; tick anything off, work ahead, or catch up.
- **Team Overview** (`/team`) — the owner sees all three tracks with live progress, pace, and milestones;
  teammates see their own summary.
- **Row-Level Security** — each teammate can only read/write their own completions; the owner can read
  everyone's. The roadmap content is shared-read.

## Editing the roadmaps
Edit `data/roadmap-<track>.json` (each is `{ person, slug, role, weeks[], days[] }`, 60 days, each day
2–4 tasks) and re-run `npm run seed`. Task ids are stable across re-seeds (upsert on
`track_slug,day,idx`), so existing completions are preserved.

## Project structure
```
app/
  (app)/            authenticated shell + pages (today, roadmap, team)
  login/            secure login
  auth/signout/     sign-out route
components/         Rail, TaskRow (toggle), ThemeToggle
lib/                supabase clients, types, roadmap/progress helpers
data/               roadmap-nishanth.json | roadmap-rohini.json | roadmap-afeeda.json
supabase/schema.sql tables + RLS
scripts/seed.mjs    account + roadmap seeding
```
