create table public.waitlist (
  id uuid not null default gen_random_uuid (),
  email text not null,
  name text null,
  project_interest text null,
  created_at timestamp with time zone not null default now(),
  constraint waitlist_pkey primary key (id),
  constraint waitlist_email_key unique (email)
);

-- Set up Row Level Security (RLS)
-- Enable RLS
alter table public.waitlist enable row level security;

-- Create policy to allow anonymous inserts (since it's a public waitlist)
create policy "Allow public inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Create policy to allow service role full access
create policy "Allow service role full access"
  on public.waitlist
  for all
  to service_role
  using (true)
  with check (true);
