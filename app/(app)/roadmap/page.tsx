import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  getProfile,
  getTasksForTrack,
  getCompletedIds,
  getUserIdForTrack,
  mergeDone,
  computeProgress,
  groupByDay,
  currentDay,
  PROGRAM_DAYS,
} from "@/lib/roadmap";
import { beltFor, type TrackSlug } from "@/lib/types";
import TaskRow from "@/components/TaskRow";
import ThemeToggle from "@/components/ThemeToggle";

export const dynamic = "force-dynamic";

const TRACKS: TrackSlug[] = ["nishanth", "rohini", "afeeda"];

export default async function RoadmapPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profile = await getProfile(supabase, user.id);
  if (!profile) redirect("/login");

  const isOwner = profile.is_owner;
  const sp = await searchParams;
  const track: TrackSlug = isOwner
    ? (TRACKS.includes(sp.track as TrackSlug) ? (sp.track as TrackSlug) : "nishanth")
    : (profile.track_slug as TrackSlug);

  if (!track) redirect("/team");

  // Whose completion state to show
  const ownerOfTrackId = isOwner ? await getUserIdForTrack(supabase, track) : user.id;
  const tasks = await getTasksForTrack(supabase, track);
  const completed = ownerOfTrackId
    ? await getCompletedIds(supabase, ownerOfTrackId)
    : new Map<string, string>();
  const merged = mergeDone(tasks, completed);
  const prog = computeProgress(track, profile.full_name, profile.role, merged);
  const byDay = groupByDay(merged);
  const today = currentDay();
  const readOnly = isOwner; // owner views others read-only; can't edit their completions

  const days = Array.from(byDay.keys()).sort((a, b) => a - b);
  const trackLabel: Record<TrackSlug, string> = {
    nishanth: "Nishanth · Tech & Dev",
    rohini: "Rohini · Brand & Content",
    afeeda: "Afeeda · Learning Track",
  };

  return (
    <>
      <header className="top">
        <h1>60-Day Roadmap</h1>
        <div className="meta">
          <span>
            Viewing <b>{trackLabel[track]}</b>
          </span>
          <span>
            <b>{prog.pct}%</b> · {prog.done}/{prog.total}
          </span>
          <ThemeToggle />
        </div>
      </header>

      <div className="content">
        {isOwner ? (
          <div className="rowflex" style={{ marginBottom: 18 }}>
            {TRACKS.map((t) => (
              <Link
                key={t}
                href={"/roadmap?track=" + t}
                className={"btn" + (t === track ? " acc" : "")}
              >
                {trackLabel[t]}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="purpose">
          <div className="purpose-h">
            <span className="purpose-tag">🥷 {beltFor(prog.pct)}</span>
            <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700 }}>
              Day {today} of {PROGRAM_DAYS} · {prog.milestonesDone}/{prog.milestonesTotal} milestones
            </span>
          </div>
          <div className="bar g" style={{ margin: "8px 0" }}>
            <i style={{ width: prog.pct + "%" }} />
          </div>
          <div className="purpose-body">
            The full 60-day plan to build <b>Infinity &amp; Beyond</b>.{" "}
            {readOnly
              ? "Read-only overview of this teammate's progress."
              : "Tick tasks as you finish — you can work ahead or catch up any day."}
          </div>
        </div>

        {days.map((d) => {
          const list = byDay.get(d)!;
          const doneCount = list.filter((t) => t.done).length;
          const isToday = d === today;
          return (
            <div key={d} id={"day-" + d}>
              <div className={"dayhdr" + (isToday ? " today" : "")}>
                <span className="dn">DAY {d}</span>
                <span className="foc">{list[0]?.focus}</span>
                <span className="st">
                  {isToday ? "◎ TODAY · " : ""}
                  {doneCount}/{list.length} done
                </span>
              </div>
              <div className="daybox">
                <div className="tasklist">
                  {list.map((t) => (
                    <TaskRow key={t.id} task={t} readOnly={readOnly} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
