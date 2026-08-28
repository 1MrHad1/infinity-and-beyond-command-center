/**
 * Seeds the Infinity & Beyond Command Center:
 *   1. creates the 4 accounts (owner + 3 teammates) in Supabase Auth
 *   2. upserts their profiles
 *   3. loads all 60-day roadmaps from data/*.json into roadmap_tasks
 *
 * Prereqs: run supabase/schema.sql first, and fill .env.local with
 *   NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Optional env to set fixed passwords (else a strong one is generated & printed):
 *   OWNER_EMAIL, OWNER_PASSWORD, NISHANTH_PASSWORD, ROHINI_PASSWORD, AFEEDA_PASSWORD
 *
 * Run:  npm run seed
 */
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath as _f } from "node:url";
dotenv.config({ path: path.join(path.dirname(_f(import.meta.url)), "..", ".env.local") });
dotenv.config(); // fallback to .env if present
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL || !SERVICE) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}
const admin = createClient(URL, SERVICE, { auth: { autoRefreshToken: false, persistSession: false } });

function genPassword() {
  return "IB-" + crypto.randomBytes(6).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) + "9!";
}

const team = [
  {
    slug: "owner",
    full_name: "Owner",
    email: process.env.OWNER_EMAIL || "owner@infinityandbeyond.agency",
    role: "Founder / Owner",
    track_slug: null,
    is_owner: true,
    password: process.env.OWNER_PASSWORD,
  },
  {
    slug: "nishanth",
    full_name: "Nishanth Mahesh",
    email: "nishanthmahesh.in@gmail.com",
    role: "Technical / eCommerce & Dev Lead",
    track_slug: "nishanth",
    is_owner: false,
    password: process.env.NISHANTH_PASSWORD,
  },
  {
    slug: "rohini",
    full_name: "Rohini Alam",
    email: "alamrohini5@gmail.com",
    role: "Marketing / Brand & Content Lead",
    track_slug: "rohini",
    is_owner: false,
    password: process.env.ROHINI_PASSWORD,
  },
  {
    slug: "afeeda",
    full_name: "Afeeda M.A",
    email: "afeedama49@gmail.com",
    role: "Junior Digital Marketer (Learning Track)",
    track_slug: "afeeda",
    is_owner: false,
    password: process.env.AFEEDA_PASSWORD,
  },
];

async function findUserByEmail(email) {
  // listUsers is paginated; scan a few pages.
  for (let page = 1; page <= 10; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const hit = data.users.find((u) => (u.email || "").toLowerCase() === email.toLowerCase());
    if (hit) return hit;
    if (data.users.length < 200) break;
  }
  return null;
}

async function ensureUser(member) {
  const created = [];
  let id;
  const password = member.password || genPassword();
  const { data, error } = await admin.auth.admin.createUser({
    email: member.email,
    password,
    email_confirm: true,
    user_metadata: { full_name: member.full_name },
  });
  if (error) {
    // Likely already registered — look it up (leave existing password untouched)
    const existing = await findUserByEmail(member.email);
    if (!existing) throw error;
    id = existing.id;
    console.log(`  • ${member.slug.padEnd(9)} exists   ${member.email}`);
  } else {
    id = data.user.id;
    created.push({ email: member.email, password });
    console.log(`  • ${member.slug.padEnd(9)} CREATED  ${member.email}   password: ${password}`);
  }
  return { id, created };
}

async function seedProfiles() {
  console.log("\n▶ Accounts & profiles");
  const newCreds = [];
  for (const m of team) {
    const { id, created } = await ensureUser(m);
    newCreds.push(...created);
    const { error } = await admin.from("profiles").upsert(
      {
        id,
        full_name: m.full_name,
        slug: m.slug,
        role: m.role,
        track_slug: m.track_slug,
        is_owner: m.is_owner,
      },
      { onConflict: "id" }
    );
    if (error) throw error;
  }
  return newCreds;
}

async function seedTasks() {
  console.log("\n▶ Roadmap tasks");
  const tracks = ["nishanth", "rohini", "afeeda"];
  let grand = 0;
  for (const track of tracks) {
    const file = path.join(ROOT, "data", `roadmap-${track}.json`);
    const json = JSON.parse(fs.readFileSync(file, "utf8"));
    const rows = [];
    for (const d of json.days) {
      d.tasks.forEach((t, i) => {
        rows.push({
          track_slug: track,
          day: d.day,
          idx: i,
          focus: d.focus || null,
          title: t.title,
          detail: t.detail || null,
          category: t.category || "admin",
          minutes: t.minutes || 60,
          resource_label: t.resource?.label || null,
          resource_url: t.resource?.url || null,
          is_milestone: !!t.milestone,
        });
      });
    }
    // upsert in chunks (stable ids across re-seeds → completions survive)
    for (let i = 0; i < rows.length; i += 200) {
      const chunk = rows.slice(i, i + 200);
      const { error } = await admin
        .from("roadmap_tasks")
        .upsert(chunk, { onConflict: "track_slug,day,idx" });
      if (error) throw error;
    }
    grand += rows.length;
    console.log(`  • ${track.padEnd(9)} ${rows.length} tasks across ${json.days.length} days`);
  }
  console.log(`  = ${grand} tasks total`);
}

(async () => {
  console.log("Infinity & Beyond — seeding", URL);
  const newCreds = await seedProfiles();
  await seedTasks();
  console.log("\n✓ Seed complete.");
  if (newCreds.length) {
    console.log("\n──────── SAVE THESE LOGINS (shown once) ────────");
    for (const c of newCreds) console.log(`  ${c.email}   ${c.password}`);
    console.log("Ask each person to sign in and change their password.");
    console.log("────────────────────────────────────────────────");
  }
  process.exit(0);
})().catch((e) => {
  console.error("\n✗ Seed failed:", e.message || e);
  process.exit(1);
});
