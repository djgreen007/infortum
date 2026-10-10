-- Contact form submissions for infortum.io
-- Run once in Supabase → SQL Editor (project: infortum-website)

create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 200),
  company     text check (char_length(company) <= 200),
  email       text not null check (char_length(email) <= 200),
  phone       text check (char_length(phone) <= 50),
  message     text not null check (char_length(message) between 1 and 5000),
  source      text not null default 'contact' check (source in ('contact', 'about')),
  user_agent  text,
  status      text not null default 'new' check (status in ('new', 'replied', 'archived'))
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- Lock the table down: no public access at all.
-- The website writes with the service-role key from the server only.
alter table public.contact_submissions enable row level security;
revoke all on public.contact_submissions from anon, authenticated;
