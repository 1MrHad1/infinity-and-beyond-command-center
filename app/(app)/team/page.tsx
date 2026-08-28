import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  getProfile,
  getTasksForTrack,
  getCompletedIds,
  getTrackProfiles,
  mergeDone,
  currentDay,
  PROGRAM_DAYS,
} from "@/lib/roadmap";
import { beltFor, type TaskWithDone, type TrackSlug } from "@/lib/types";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-dynamic";

interface Card {
  slug: TrackSlug;
  name: string;
  role: string;
  total: number;
  done: number;
  pct: number;
  msTotal: number;
  msDone: number;
  scheduled: number;
  doneToDate: number;
}

function pace(c: Card): { cls: string; label: string } {
  if (c.done >= c.scheduled + 3) return { cls: "good", label: "Ahead" };
  if (c.done >= c.scheduled - 1) return { cls: "info", label: "On track" };
  if (c.done >= c.scheduled - 5) return { cls: "warn", label: "Slightly behind" };
  return { cls: "crit", label: "Behind" };
}

export default async function TeamPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await getProfile(supabase, user.id);
  if (!profile) redirect("/login");
  const day = currentDay();

  // Which profiles to show: owner → all tracks; teammate → self only.
  const profiles = profile.is_owner
    ? await getTrackProfiles(supabase)
    : [profile];

  const cards: Card[] = [];
  for (const p of profiles) {
    if (!p.track_slug) continue;
    const tasks = await getTasksForTrack(supabase, p.track_slug);
    const completed = await getCompletedIds(supabase, p.id);
    const merged: TaskWithDone[] = mergeDone(tasks, completed);
    const total = merged.length;
    const done = merged.filter((t) => t.done).length;
    const scheduled = merged.filter((t) => t.day <= day).length;
    const doneToDate = merged.filter((t) => t.day <= day && t.done).length;
    cards.push({
      slug: p.track_slug,
      name: p.full_name,
      role: p.role,
      total,
      done,
      pct: total ? Math.round((done / total) * 100) : 0,
      msTotal: merged.filter((t) => t.is_milestone).length,
      msDone: merged.filter((t) => t.is_milestone && t.done).length,
      scheduled,
      doneToDate,
    });
  }

  const agencyTotal = cards.reduce((a, c) => a + c.total, 0);
  const agencyDone = cards.reduce((a, c) => a + c.done, 0);
  const agencyPct = agencyTotal ? Math.round((agencyDone / agencyTotal) * 100) : 0;

  return (
    <>
      <header className="top">
        <h1>{profile.is_owner ? "Team Overview" : "My Progress"}</h1>
        <div className="meta">
          <span>
            Day <b>{day}</b> / {PROGRAM_DAYS}
          </span>
          {profile.is_owner ? (
            <span>
              Agency build <b>{agencyPct}%</b>
            </span>
          ) : null}
          <ThemeToggle />
        </div>
      </header>

      <div className="content">
        {profile.is_owner ? (
          <div className="kgrid">
            <div className="kpi">
              <div className="lab">Agency Build</div>
              <div className="val">{agencyPct}%</div>
              <div className="sub">{agencyDone} / {agencyTotal} tasks across the team</div>
            </div>
            <div className="kpi">
              <div className="lab">Team Size</div>
              <div className="val">{cards.length}</div>
              <div className="sub">active build tracks</div>
            </div>
            <div className="kpi">
              <div className="lab">Program Day</div>
              <div className="val">{day}</div>
              <div className="sub">of {PROGRAM_DAYS} · {PROGRAM_DAYS - day} left</div>
            </div>
            <div className="kpi">
              <div className="lab">Milestones</div>
              <div className="val">
                {cards.reduce((a, c) => a + c.msDone, 0)}/
                {cards.reduce((a, c) => a + c.msTotal, 0)}
              </div>
              <div className="sub">key wins shipped</div>
            </div>
          </div>
        ) : null}

        <div className="row c3">
          {cards.map((c) => {
            const p = pace(c);
            return (
              <div className="card" key={c.slug}>
                <h3>
                  {c.name}
                  <span className="hint">{c.role}</span>
                </h3>
                <div className="body">
                  <div className="rowflex" style={{ gap: 16 }}>
                    <div className="ring" style={{ "--p": c.pct } as React.CSSProperties}>
                      <div>
                        {c.pct}%<small>DONE</small>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 120 }}>
                      <div style={{ fontSize: 15, fontWeight: 700 }}>🥷 {beltFor(c.pct)}</div>
                      <div className="tmeta" style={{ marginTop: 8 }}>
                        <span className={"pill " + p.cls}>{p.label}</span>
                        <span className="pill mute">
                          {c.msDone}/{c.msTotal} ★
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bar g" style={{ margin: "14px 0 8px" }}>
                    <i style={{ width: c.pct + "%" }} />
                  </div>
                  <div className="note">
                    <b>{c.done}</b> / {c.total} tasks · <b>{c.doneToDate}</b>/{c.scheduled} due by
                    day {day}
                  </div>

                  <div style={{ marginTop: 14 }}>
                    <Link className="btn block" href={"/roadmap?track=" + c.slug}>
                      View roadmap →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!profile.is_owner ? (
          <p className="note">
            This is your personal build track. Head to <b>Today&apos;s Missions</b> to
            work the current day, or the <b>60-Day Roadmap</b> for the full plan.
          </p>
        ) : (
          <p className="note">
            Owner view · progress is live from each teammate&apos;s account. Click a card
            to see that person&apos;s full 60-day roadmap and exactly what&apos;s done.
          </p>
        )}
      </div>
    </>
  );
}
