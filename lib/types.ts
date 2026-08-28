export type TrackSlug = "nishanth" | "rohini" | "afeeda";

export interface Profile {
  id: string;
  full_name: string;
  slug: string; // nishanth | rohini | afeeda | owner
  role: string;
  track_slug: TrackSlug | null; // null for owner
  is_owner: boolean;
}

export interface RoadmapTask {
  id: string;
  track_slug: TrackSlug;
  day: number;
  idx: number;
  focus: string;
  title: string;
  detail: string;
  category: string;
  minutes: number;
  resource_label: string | null;
  resource_url: string | null;
  is_milestone: boolean;
}

export interface TaskWithDone extends RoadmapTask {
  done: boolean;
  completed_at: string | null;
}

export interface TrackProgress {
  track_slug: TrackSlug;
  person: string;
  role: string;
  total: number;
  done: number;
  pct: number;
  milestonesTotal: number;
  milestonesDone: number;
  currentDay: number;
}

// Category → display label + accent class (maps to CSS pill classes)
export const CATEGORY_META: Record<string, { label: string; cls: string }> = {
  setup: { label: "Setup", cls: "info" },
  build: { label: "Build", cls: "good" },
  learn: { label: "Learn", cls: "info" },
  practice: { label: "Practice", cls: "warn" },
  marketing: { label: "Marketing", cls: "warn" },
  sales: { label: "Sales", cls: "crit" },
  delivery: { label: "Delivery", cls: "good" },
  admin: { label: "Admin", cls: "mute" },
};

// Ninja belt ranks by completion percentage (FameNinja-flavoured progression)
export const BELTS: { at: number; name: string }[] = [
  { at: 0, name: "White Belt" },
  { at: 15, name: "Yellow Belt" },
  { at: 30, name: "Orange Belt" },
  { at: 45, name: "Green Belt" },
  { at: 60, name: "Blue Belt" },
  { at: 75, name: "Brown Belt" },
  { at: 90, name: "Black Belt" },
  { at: 100, name: "Sensei" },
];

export function beltFor(pct: number): string {
  let b = BELTS[0].name;
  for (const belt of BELTS) if (pct >= belt.at) b = belt.name;
  return b;
}
