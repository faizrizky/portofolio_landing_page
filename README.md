# Landing Page (Portfolio)

Repo ini **hanya landing page publik**. Tidak ada database, tidak ada login —
semua konten (profile & project) di-fetch dari API repo `admin-panel` yang
di-deploy terpisah.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion

## Setup

```bash
npm install
cp .env.example .env
```

Isi `.env`:

- `DATABASE_URL` dan `DIRECT_URL` — connection string Postgres (lihat "Setup database" di bawah, dua-duanya wajib diisi, gak bisa kosong/SQLite lagi)
- `JWT_SECRET` — string acak panjang, contoh generate: `openssl rand -base64 32`
- `ADMIN_USERNAME` — username login admin, bebas
- `ADMIN_PASSWORD_HASH` — generate dengan command di bawah

```bash
npm run hash-password -- "password_kamu_yang_kuat"
```

Copy output-nya (`ADMIN_PASSWORD_HASH=...`) ke file `.env`.

## 3. Setup database (Postgres — wajib, SQLite gak dipakai lagi)

Paling gampang pakai **Supabase** (gratis):

1. Di Vercel dashboard → tab **Storage** → **Create Database** → pilih **Supabase**
2. Setelah dibuat, buka store-nya → tab **.env.local** → copy dua value ini ke `.env` kamu:
   - `POSTGRES_PRISMA_URL` → paste ke `DATABASE_URL`
   - `POSTGRES_URL_NON_POOLING` (kalau gak ada, pakai `POSTGRES_URL`) → paste ke `DIRECT_URL`
3. Jalankan migration + seed data contoh:
   ```bash
   npx prisma migrate dev --name init
   npm run seed
   ```

Database ini bisa dipakai bareng buat dev lokal & production (gak perlu 2 database terpisah untuk portofolio pribadi).

## 4. Jalankan

```bash
npm run dev
```

- Admin panel: http://localhost:3000/admin (redirect ke `/login` kalau belum login)

**Catatan:** halaman ini butuh `admin-panel` sudah jalan dan profile-nya
sudah diisi (lewat `/admin` di repo satunya), kalau tidak akan muncul pesan
"Gagal memuat konten".

## Cara kerja

`lib/api.ts` fetch dari `NEXT_PUBLIC_API_URL/api/projects` dan
`NEXT_PUBLIC_API_URL/api/profile` dengan `revalidate: 60` (ISR) — jadi kalau
kamu update konten lewat admin panel, landing page ini otomatis refresh
dalam ≤60 detik tanpa perlu redeploy.

1. Push project ke GitHub, import di Vercel
2. Di layar import project, buka bagian **Environment Variables**, isi semua key dari `.env` kamu satu-satu: `DATABASE_URL`, `DIRECT_URL`, `JWT_SECRET`, `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH`, `LANDING_PAGE_URL` (domain repo `landing-page` kamu), `BLOB_READ_WRITE_TOKEN` (dari Storage → Blob store)
3. Kalau butuh edit env var **setelah** project sudah ke-deploy: buka project di Vercel → **Settings** → **Environment Variables** (bukan di halaman "Deployment Settings" pas lihat detail satu deployment — itu cuma pengaturan build, beda tempat). Setelah nambah/ubah env var, klik **Redeploy** di tab Deployments biar kepakai.
4. Kalau database (`DATABASE_URL`/`DIRECT_URL`) pas awal deploy sama dengan yang kamu pakai migration di langkah 3 lokal tadi, gak perlu migrate lagi. Kalau beda database, jalankan sekali dari lokal (arahkan `.env` ke DB production dulu):
   ```bash
   npx prisma migrate deploy
   npm run seed   # opsional, atau isi manual lewat /admin
   ```

Pastikan juga di repo `admin-panel`, env var `LANDING_PAGE_URL` diisi dengan
domain landing page ini (dipakai untuk CORS).
