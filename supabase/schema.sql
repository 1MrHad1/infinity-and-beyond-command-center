-- Infinity & Beyond — Command Center schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query → paste → Run).
-- Safe to re-run.

create extension if not exists pgcrypto;

-- ---------- tables ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text not null,
  slug        text unique not null,          -- nishanth | rohini | afeeda | owner
  role        text not null,
  track_slug  text,                          -- nishanth | rohini | afeeda ; null for owner
  is_owner    boolean not null default false,
  created_at  timestamptz not null default now()
);

create table if not exists public.roadmap_tasks (
  id             uuid primary key default gen_random_uuid(),
  track_slug     text not null,              -- nishanth | rohini | afeeda
  day            int  not null,              -- 1..60
  idx            int  not null,              -- order within the day
  focus          text,
  title          text not null,
  detail         text,
  category       text not null,
  minutes        int  not null default 60,
  resource_label text,
  resource_url   text,
  is_milestone   boolean not null default false,
  unique (track_slug, day, idx)
);
create index if not exists roadmap_tasks_track_day_idx on public.roadmap_tasks (track_slug, day, idx);

create table if not exists public.task_completions (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  task_id      uuid not null references public.roadmap_tasks(id) on delete cascade,
  completed_at timestamptz not null default now(),
  unique (user_id, task_id)
);
create index if not exists task_completions_user_idx on public.task_completions (user_id);

-- ---------- owner helper (SECURITY DEFINER avoids RLS recursion) ----------
create or replace function public.is_owner()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select coalesce((select is_owner from public.profiles where id = auth.uid()), false);
$$;
grant execute on function public.is_owner() to authenticated;

-- ---------- RLS ----------
alter table public.profiles        enable row level security;
alter table public.roadmap_tasks   enable row level security;
alter table public.task_completions enable row level security;

-- profiles: read own; owner reads all
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_owner());

-- roadmap_tasks: any signed-in user can read the roadmap (shared, non-sensitive)
drop policy if exists roadmap_select on public.roadmap_tasks;
create policy roadmap_select on public.roadmap_tasks
  for select to authenticated
  using (true);

-- task_completions: read own (owner reads all); write only your own
drop policy if exists completions_select on public.task_completions;
create policy completions_select on public.task_completions
  for select to authenticated
  using (user_id = auth.uid() or public.is_owner());

drop policy if exists completions_insert on public.task_completions;
create policy completions_insert on public.task_completions
  for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists completions_update on public.task_completions;
create policy completions_update on public.task_completions
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists completions_delete on public.task_completions;
create policy completions_delete on public.task_completions
  for delete to authenticated
  using (user_id = auth.uid());
