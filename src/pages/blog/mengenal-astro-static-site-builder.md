---
layout: ../../layouts/BlogPostLayout.astro
title: Mengenal Astro Static Site Builder
date: 28 January 2022
author: Fahfudin Farhan
readTime: 2 Min Read
category: Tutorial
tags:
- Astro
- Website
description: Mengenal dan mempelajari hal dasar yang terdapat pada astro static site builder.
---


Astro adalah jenis baru pembangun situs statis untuk web modern. Pengalaman pengembang yang kuat memenuhi output yang ringan. — [Astro](https://astro.build/)

Website yang kamu baca saat ini dibangun menggunakan Astro, dan Tailwind CSS. Awal tahu tentang Astro itu dari channel YouTube Fireship, setelah melihat video Astro in 100 seconds langsung tertarik untuk mengeksplore lebih jauh tentang Astro.

<div class="hidden lg:block">
<iframe width="709" height="400" src="https://www.youtube.com/embed/dsTXcSeAZq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

&nbsp;

# Instalasi
Bila kamu penasaran dan ingin mencoba, kamu dapat memulai langkah awal untuk mempelajari Astro dengan melakukan instalasi Astro pada lokal komputer dengan cara mengetikkan perintah dibawah:

```
npm install init astro
```

Command Line akan menanyakan template yang ingin kamu gunakan, pilih template **Minimal** untuk memulai membuat sebuah proyek dari awal.

Langkah selanjutnya setelah sudah memilih template adalah mengikuti instruksi yang telah diberikan oleh astro.
```
1: npm install (or pnpm install, yarn, etc)
2: git init && git add -A && git commit -m "Initial commit" (optional step)
3: npm run dev (or pnpm, yarn, etc)
```

![Astro-101-1](../../assets/blog/astro-101-1.png "Astro Images")

Setelah melakukan instalasi, maka akan terbuat sebuah proyek kosong dengan struktur folder sebagai berikut:

```
├── src/
│   └── pages/
│       └── index.astro
├── public/
└── package.json
```

Buat folder tambahan pada `src/` yaitu `components/` dan `layouts/` sampai kurang lebih seperti dibawah struktur foldernya.

```
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── public/
└── package.json
```

&nbsp;

# Layouts
Layouts adalah jenis Komponen khusus yang membantu kamu berbagi dan menggunakan kembali tata letak halaman umum dalam proyek.

Astro layouts mendukung *props*, *slots*, dan semua fitur lain dari komponen Astro.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
---
<BaseLayout title="Homepage">
  <h1>Selamat, datang</h1>
  <p>Ini adalah konten halaman saya. Ini akan bersarang di dalam tata letak.</p>
</BaseLayout>
```



&nbsp;

# Components
Astro Components (file yang diakhiri dengan.astro) adalah dasar dari templating sisi server di Astro. Pikirkan sintaks komponen Astro sebagai HTML yang ditingkatkan dengan JavaScript.

```astro
<div class="contoh-1">
  <h1>Selamat datang!</h1>
</div>
```

&nbsp;

# Style
Astro mempunyai penanganan spesial khusus dalam menulis CSS semudah mungkin. Styling di dalam komponen Astro dilakukan dengan menambahkan tag `<style>`.

Secara default, semua style komponen Astro adalah *scoped*, yang berarti mereka hanya berlaku untuk komponen sedang ditambahkan *style* tersebut.

```astro
<style>
  .text {
    font-family: cursive;
  }
  h1 {
    color: red;
  }
</style>
<h1>Aku scoped style dan warna aku merah</h1>
<p class="text">Aku scoped style dan aku cursive</p>
```

&nbsp;

# Pages
Pages adalah jenis komponen khusus Astro yang menangani *routing*, *data loading*, dan *templating* untuk setiap halaman website.

Astro menggunakan *pages* untuk melakukan sesuatu yang disebut routing berbasis file. Setiap file di direktori `src/` akan menjadi halaman di website.

Astro komponent `(.astro)` dan Markdown file `(.md)` adalah format yang dapat didukung untuk membuat sebuah *pages*. File seperti `.jsx` tidak didukung, tetapi kamu dapat menggunakannya sebagai UI komponen di dalam `.astro` *pages*.

```astro
src/pages/index.astro       -> mysite.com/
src/pages/about.astro       -> mysite.com/about
src/pages/about/index.astro -> mysite.com/about
src/pages/about/me.astro    -> mysite.com/about/me
src/pages/posts/1.md        -> mysite.com/posts/1
```

