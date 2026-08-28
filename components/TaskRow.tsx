"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { CATEGORY_META, type TaskWithDone } from "@/lib/types";

export default function TaskRow({
  task,
  readOnly = false,
}: {
  task: TaskWithDone;
  readOnly?: boolean;
}) {
  const [done, setDone] = useState(task.done);
  const [busy, setBusy] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const cat = CATEGORY_META[task.category] || CATEGORY_META.admin;

  async function toggle() {
    if (busy || readOnly) return;
    setBusy(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setBusy(false);
      return;
    }

    const next = !done;
    setDone(next); // optimistic

    if (next) {
      const { error } = await supabase
        .from("task_completions")
        .upsert(
          { user_id: user.id, task_id: task.id },
          { onConflict: "user_id,task_id" }
        );
      if (error) setDone(false);
    } else {
      const { error } = await supabase
        .from("task_completions")
        .delete()
        .eq("user_id", user.id)
        .eq("task_id", task.id);
      if (error) setDone(true);
    }

    setBusy(false);
    startTransition(() => router.refresh()); // refresh KPIs / progress
  }

  return (
    <div className={"task" + (done ? " done" : "")}>
      <button
        className="chk"
        onClick={toggle}
        disabled={busy || readOnly}
        aria-pressed={done}
        aria-label={done ? "Completed" : "Not completed"}
        title={readOnly ? (done ? "Completed" : "Not completed") : done ? "Mark incomplete" : "Mark complete"}
        style={readOnly ? { cursor: "default" } : undefined}
      >
        {done ? "✓" : ""}
      </button>
      <div className="tbody">
        <div className="tt">{task.title}</div>
        <div className="td">{task.detail}</div>
        <div className="tmeta">
          <span className={"pill " + cat.cls}>{cat.label}</span>
          {task.is_milestone ? <span className="milestone-flag">★ Milestone</span> : null}
          <span className="mins">~{task.minutes}m</span>
          {task.resource_url ? (
            <a
              className="res"
              href={task.resource_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ {task.resource_label || "Resource"}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
