import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  Profile,
  RoadmapTask,
  TaskWithDone,
  TrackProgress,
  TrackSlug,
} from "./types";

export const PROGRAM_DAYS = 60;

/** Current 1-based program day, clamped to [1, 60], from NEXT_PUBLIC_PROGRAM_START. */
export function currentDay(start?: string): number {
  const startStr = start || process.env.NEXT_PUBLIC_PROGRAM_START || "2026-09-01";
  const startDate = new Date(startStr + "T00:00:00");
  const now = new Date();
  const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const diffDays = Math.floor((nowUTC - startUTC) / 86400000);
  return Math.max(1, Math.min(PROGRAM_DAYS, diffDays + 1));
}

export async function getProfile(
  supabase: SupabaseClient,
  userId: string
): Promise<Profile | null> {
  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, slug, role, track_slug, is_owner")
    .eq("id", userId)
    .single();
  return (data as Profile) ?? null;
}

export async function getTasksForTrack(
  supabase: SupabaseClient,
  track: TrackSlug
): Promise<RoadmapTask[]> {
  const { data } = await supabase
    .from("roadmap_tasks")
    .select("*")
    .eq("track_slug", track)
    .order("day", { ascending: true })
    .order("idx", { ascending: true });
  return (data as RoadmapTask[]) ?? [];
}

export async function getCompletedIds(
  supabase: SupabaseClient,
  userId: string
): Promise<Map<string, string>> {
  const { data } = await supabase
    .from("task_completions")
    .select("task_id, completed_at")
    .eq("user_id", userId);
  const m = new Map<string, string>();
  (data ?? []).forEach((r: { task_id: string; completed_at: string }) =>
    m.set(r.task_id, r.completed_at)
  );
  return m;
}

export function mergeDone(
  tasks: RoadmapTask[],
  completed: Map<string, string>
): TaskWithDone[] {
  return tasks.map((t) => ({
    ...t,
    done: completed.has(t.id),
    completed_at: completed.get(t.id) ?? null,
  }));
}

export function computeProgress(
  track: TrackSlug,
  person: string,
  role: string,
  tasks: TaskWithDone[]
): TrackProgress {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const milestonesTotal = tasks.filter((t) => t.is_milestone).length;
  const milestonesDone = tasks.filter((t) => t.is_milestone && t.done).length;
  return {
    track_slug: track,
    person,
    role,
    total,
    done,
    pct: total ? Math.round((done / total) * 100) : 0,
    milestonesTotal,
    milestonesDone,
    currentDay: currentDay(),
  };
}

/** All non-owner profiles that have a track, ordered nishanth→rohini→afeeda. */
export async function getTrackProfiles(supabase: SupabaseClient): Promise<Profile[]> {
  const { data } = await supabase
    .from("profiles")
    .select("id, full_name, slug, role, track_slug, is_owner")
    .not("track_slug", "is", null);
  const order: Record<string, number> = { nishanth: 0, rohini: 1, afeeda: 2 };
  return ((data as Profile[]) ?? []).sort(
    (a, b) => (order[a.track_slug ?? ""] ?? 9) - (order[b.track_slug ?? ""] ?? 9)
  );
}

export async function getUserIdForTrack(
  supabase: SupabaseClient,
  track: TrackSlug
): Promise<string | null> {
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("track_slug", track)
    .single();
  return (data as { id: string } | null)?.id ?? null;
}

/** Group tasks by day for the roadmap view. */
export function groupByDay(tasks: TaskWithDone[]): Map<number, TaskWithDone[]> {
  const m = new Map<number, TaskWithDone[]>();
  for (const t of tasks) {
    if (!m.has(t.day)) m.set(t.day, []);
    m.get(t.day)!.push(t);
  }
  return m;
}
