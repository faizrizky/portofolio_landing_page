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

Isi `NEXT_PUBLIC_API_URL` di `.env` dengan URL tempat repo `admin-panel`
di-deploy (misal `https://admin-portofolio-kamu.vercel.app`).

## Jalankan

```bash
npm run dev
```

Kalau `admin-panel` juga jalan lokal di port 3000, jalankan landing page ini
di port lain: `npm run dev -- -p 3001`.

**Catatan:** halaman ini butuh `admin-panel` sudah jalan dan profile-nya
sudah diisi (lewat `/admin` di repo satunya), kalau tidak akan muncul pesan
"Gagal memuat konten".

## Cara kerja

`lib/api.ts` fetch dari `NEXT_PUBLIC_API_URL/api/projects` dan
`NEXT_PUBLIC_API_URL/api/profile` dengan `revalidate: 60` (ISR) — jadi kalau
kamu update konten lewat admin panel, landing page ini otomatis refresh
dalam ≤60 detik tanpa perlu redeploy.

## Deploy ke Vercel

1. Push repo ini ke GitHub (terpisah dari repo `admin-panel`)
2. Import ke Vercel sebagai project baru
3. Set env var `NEXT_PUBLIC_API_URL` = URL production `admin-panel`
4. Deploy

Pastikan juga di repo `admin-panel`, env var `LANDING_PAGE_URL` diisi dengan
domain landing page ini (dipakai untuk CORS).
