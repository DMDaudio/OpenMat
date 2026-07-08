-- OpenMat — Supabase schema for accounts + cloud-synced progress.
--
-- Paste this whole file into the Supabase SQL Editor (Dashboard → SQL Editor →
-- New query → Run). It is safe to run more than once. See SETUP.md for the full
-- walkthrough.

-- One row per user holds that user's whole progress blob (same shape the app
-- stores in localStorage: { version, handle, answered: { [id]: {...} } }).
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Row-Level Security: every user can see and change ONLY their own row.
-- This is what makes the public anon key safe to ship in the browser.
alter table public.progress enable row level security;

drop policy if exists "read own progress"   on public.progress;
drop policy if exists "insert own progress" on public.progress;
drop policy if exists "update own progress" on public.progress;

create policy "read own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "insert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "update own progress"
  on public.progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
