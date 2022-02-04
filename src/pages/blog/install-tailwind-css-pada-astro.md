---
layout: ../../layouts/BlogPostLayout.astro
title: Install Tailwind CSS pada Astro
date: 30 January 2022
author: Fahfudin Farhan
readTime: 1 Min Read
category: Tutorial
tags:
- Astro
- Tailwind CSS
description: Tata cara menginstall Tailwind CSS pada Astro.
---

Pada halaman **[Astro Docs 🡵 ](https://docs.astro.build/en/guides/styling/)** mereka menyebutkan bahwa Styling & CSS yang mereka support ada berbagai macam seperti CSS Preprocessor (Sass, Stylus, dan lainnya), Tailwind, PostCSS.

Dan itu hal yang menyenangkan, karena kamu dapat menggunakan berbagai macam styling Framework dan Library untuk pengembangan proyek menggunakan Astro.

Berikut adalah panduan cepat untuk menginstall Tailwind CSS pada proyek Astro:


&nbsp;

# Install Tailwind CSS pada proyek Astro

Jalankan perintah dibawah untuk menginstall Tailwind CSS pada proyek Astro yang telah kamu buat sebelumnya.
```null
npm install -D tailwindcss
```

Dan buat 2 file di dalam *root* proyek `tailwind.config.cjs`  dan `postcss.config.cjs` :
```js
// tailwind.config.cjs
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  // more options here
};
```

```js
// postcss.config.cjs
module.exports = {
  plugins: [require('tailwindcss')],
};
```

Sekarang kamu sudah dapat menggunakan Tailwind CSS, tetapi aku rekomendasikan untuk membuat sebuah css file pada `src/styles/global.css` dengan Tailwind utilities seperti berikut:
```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Lalu, tambahkan css file tersebut kedalam Astro *pages* atau *layout template*:
```astro
  <link
    rel="stylesheet"
    href={Astro.resolve("../styles/global.css")}
  >
```
