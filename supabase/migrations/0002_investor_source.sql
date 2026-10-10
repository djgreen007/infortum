-- Allow investor-page submissions
alter table public.contact_submissions drop constraint if exists contact_submissions_source_check;
alter table public.contact_submissions
  add constraint contact_submissions_source_check check (source in ('contact', 'about', 'investor'));
