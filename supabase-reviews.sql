-- Banco de dados das avaliações da Braga Barber
-- Execute este SQL no Supabase > SQL Editor.

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 60),
  service_rating smallint not null check (service_rating between 1 and 5),
  environment_rating smallint not null check (environment_rating between 1 and 5),
  quality_rating smallint not null check (quality_rating between 1 and 5),
  comment text not null check (char_length(trim(comment)) between 5 and 1000),
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- Qualquer visitante pode ver somente avaliações publicadas.
drop policy if exists "Public can read approved reviews" on public.reviews;
create policy "Public can read approved reviews"
on public.reviews
for select
to anon, authenticated
using (approved = true);

-- Qualquer visitante pode publicar uma avaliação.
-- O site só envia approved=true; não há permissão pública para editar/excluir.
drop policy if exists "Public can insert reviews" on public.reviews;
create policy "Public can insert reviews"
on public.reviews
for insert
to anon, authenticated
with check (approved = true);

-- Índice para carregar as avaliações mais recentes primeiro.
create index if not exists reviews_created_at_idx
on public.reviews (created_at desc);
