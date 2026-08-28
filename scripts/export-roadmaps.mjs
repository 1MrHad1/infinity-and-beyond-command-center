/**
 * Generates human-readable 60-day roadmap docs from data/roadmap-*.json
 * into docs/roadmaps/<slug>.md.  Run: node scripts/export-roadmaps.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "docs", "roadmaps");
fs.mkdirSync(OUT, { recursive: true });

const tracks = ["nishanth", "rohini", "afeeda"];

for (const slug of tracks) {
  const j = JSON.parse(fs.readFileSync(path.join(ROOT, "data", `roadmap-${slug}.json`), "utf8"));
  const L = [];
  L.push(`# ${j.person} — 60-Day Roadmap`);
  L.push(`**Role:** ${j.role}`);
  const totalTasks = j.days.reduce((a, d) => a + d.tasks.length, 0);
  L.push(`**Span:** ${j.days.length} days · ${totalTasks} tasks\n`);

  L.push(`## Weekly arc`);
  L.push(`| Week | Theme | Goal |`);
  L.push(`|---|---|---|`);
  j.weeks.forEach((w) => L.push(`| ${w.week} | ${w.theme} | ${w.goal} |`));
  L.push("");

  L.push(`## Day-by-day`);
  for (const d of j.days) {
    L.push(`\n### Day ${d.day} — ${d.focus}`);
    for (const t of d.tasks) {
      const bits = [t.category, `~${t.minutes}m`];
      if (t.milestone) bits.push("★ milestone");
      let line = `- **${t.title}** _(${bits.join(" · ")})_ — ${t.detail}`;
      if (t.resource && t.resource.url) line += ` [${t.resource.label || "link"}](${t.resource.url})`;
      L.push(line);
    }
  }
  const file = path.join(OUT, `${slug}.md`);
  fs.writeFileSync(file, L.join("\n") + "\n");
  console.log(`wrote docs/roadmaps/${slug}.md (${j.days.length} days, ${totalTasks} tasks)`);
}
