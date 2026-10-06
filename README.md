# Hafidz Ridwan Cahya - Personal Portal & Project Showcase

Portal pribadi dan showcase portofolio proyek milik **Hafidz Ridwan Cahya**, dibangun dengan framework modern **[Astro](https://astro.build)** untuk performa maksimal, optimasi SEO terbaik, dan kemudahan pengelolaan proyek berbasis Markdown.

Live URL: [https://hafidzrdwn.dev/](https://hafidzrdwn.dev/)

---

## ✨ Fitur Utama

- 🚀 **Astro Static Site Generation (SSG):** Loading secepat kilat dengan 0KB runtime JavaScript berlebih.
- 📝 **Markdown-Powered Projects:** Penambahan proyek baru sangat mudah via file `.md` di Astro Content Collections.
- 🔍 **SEO & Google Ranking Booster:**
  - Semantic HTML5 & meta tags lengkap.
  - **Schema.org Structured Data (JSON-LD)** untuk entitas `Person`, `WebSite`, dan `ItemList` (daftar showcase).
  - Open Graph & Twitter Cards terintegrasi (`preview.jpeg`).
  - Auto-generated `sitemap-index.xml` dan `robots.txt`.
- 🎨 **Creative, Unique & UX-First Design:**
  - Estetika developer modern (dark palette, subtle grid accents, interactive project cards).
  - Filter proyek interaktif langsung di client (*Semua*, *Featured*, *Tools*).
  - 100% Native SVG Branding & Icons (bebas dari file gambar raster legacy).

---

## 📁 Struktur Direktori

```text
hafidzrdwn_dev/
├── public/                 # Static assets (favicon.svg, robots.txt, preview.jpeg)
├── src/
│   ├── components/         # Komponen UI & SVG Icons
│   │   ├── icons/          # Logo.astro, ExternalLink.astro, GithubIcon.astro, etc.
│   │   ├── ProjectCard.astro
│   │   └── SEO.astro       # Komponen meta & JSON-LD
│   ├── content/
│   │   └── projects/       # File Markdown untuk setiap proyek showcase
│   │       ├── form-builder.md
│   │       ├── grafikuy.md
│   │       ├── mathvista.md
│   │       └── tip-calculator.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   └── global.css      # Design system & tokens
│   └── pages/
│       └── index.astro     # Halaman utama portal
├── astro.config.mjs
└── package.json
```

---

## 🛠️ Cara Menambahkan Proyek Baru

Untuk menambahkan showcase proyek baru, cukup buat file markdown baru di dalam folder `src/content/projects/`, misalnya `src/content/projects/nama-proyek.md`:

```markdown
---
title: "Nama Proyek Keren"
description: "Deskripsi singkat dan menarik tentang proyek ini."
url: "https://proyekanda.hafidzrdwn.dev"
category: "Web Application"
tags: ["Next.js", "Tailwind", "API"]
featured: false
order: 5
status: "Live"
badge: "New"
---

Deskripsi opsional atau catatan lengkap proyek dapat ditulis di sini.
```

Proyek akan langsung otomatis muncul di halaman utama dan masuk ke dalam structured data sitemap & Google SEO!

---

## 🚀 Perintah Pengembangan

```bash
# Menjalankan server development lokal
npm run dev

# Membangun versi produksi (SSG)
npm run build

# Meninjau hasil build lokal
npm run preview
```
