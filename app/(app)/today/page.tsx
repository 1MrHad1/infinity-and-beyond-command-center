import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getProfile,
  getTasksForTrack,
  getCompletedIds,
  mergeDone,
  computeProgress,
  groupByDay,
  currentDay,
  PROGRAM_DAYS,
} from "@/lib/roadmap";
import { beltFor, type TaskWithDone } from "@/lib/types";
import TaskRow from "@/components/TaskRow";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-dynamic";

function streakOf(byDay: Map<number, TaskWithDone[]>, upto: number): number {
  let s = 0;
  for (let d = upto; d >= 1; d--) {
    const list = byDay.get(d);
    if (list && list.length > 0 && list.every((t) => t.done)) s++;
    else break;
  }
  return s;
}

export default async function TodayPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await getProfile(supabase, user.id);
  if (!profile || profile.is_owner || !profile.track_slug) redirect("/team");

  const track = profile.track_slug;
  const tasks = await getTasksForTrack(supabase, track);
  const completed = await getCompletedIds(supabase, user.id);
  const merged = mergeDone(tasks, completed);
  const prog = computeProgress(track, profile.full_name, profile.role, merged);
  const day = currentDay();
  const byDay = groupByDay(merged);
  const todays = byDay.get(day) ?? [];
  const todaysDone = todays.filter((t) => t.done).length;
  const streak = streakOf(byDay, day);
  const belt = beltFor(prog.pct);

  return (
    <>
      <header className="top">
        <h1>Today · Day {day}</h1>
        <div className="meta">
          <span>
            <b>{profile.full_name}</b> · {profile.role}
          </span>
          <span>
            Day <b>{day}</b> / {PROGRAM_DAYS}
          </span>
          <ThemeToggle />
        </div>
      </header>

      <div className="content">
        <div className="rowflex" style={{ marginBottom: 22, gap: 22 }}>
          <div className="ring" style={{ "--p": prog.pct } as React.CSSProperties}>
            <div>
              {prog.pct}%<small>OVERALL</small>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em" }}>
              Current Rank
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, margin: "4px 0 10px" }}>🥷 {belt}</div>
            <div className="bar g" aria-label="Overall progress">
              <i style={{ width: prog.pct + "%" }} />
            </div>
            <div className="note" style={{ marginTop: 8 }}>
              <b>{prog.done}</b> / {prog.total} missions complete · <b>{prog.milestonesDone}</b>/
              {prog.milestonesTotal} milestones · <span className="streak">🔥 {streak}-day streak</span>
            </div>
          </div>
        </div>

        <div className="kgrid">
          <div className="kpi">
            <div className="lab">Today&apos;s Missions</div>
            <div className="val">
              {todaysDone}/{todays.length}
            </div>
            <div className="sub">{todays.length ? "complete today" : "rest / buffer day"}</div>
          </div>
          <div className="kpi">
            <div className="lab">Program Day</div>
            <div className="val">{day}</div>
            <div className="sub">of {PROGRAM_DAYS} · {PROGRAM_DAYS - day} to go</div>
          </div>
          <div className="kpi">
            <div className="lab">Overall</div>
            <div className="val">{prog.pct}%</div>
            <div className="sub">{prog.done} of {prog.total} done</div>
          </div>
          <div className="kpi">
            <div className="lab">Milestones</div>
            <div className="val">
              {prog.milestonesDone}/{prog.milestonesTotal}
            </div>
            <div className="sub">weekly key wins</div>
          </div>
        </div>

        <div className="card">
          <h3>
            ◎ Day {day} — {todays[0]?.focus || "Missions"}
            <span className="hint">
              {todaysDone === todays.length && todays.length > 0
                ? "All done — great work 🥷"
                : `${todays.length - todaysDone} remaining`}
            </span>
          </h3>
          <div className="body">
            {todays.length === 0 ? (
              <div className="empty">No missions scheduled for today. Use the roadmap to plan ahead or catch up.</div>
            ) : (
              <div className="tasklist">
                {todays.map((t) => (
                  <TaskRow key={t.id} task={t} />
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="note">
          Tip: open the <b>60-Day Roadmap</b> to see the full plan, work ahead, or
          tick off anything you missed. Progress saves to your account automatically.
        </p>
      </div>
    </>
  );
}
