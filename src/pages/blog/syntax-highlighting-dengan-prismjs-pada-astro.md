---
layout: ../../layouts/BlogPostLayout.astro
title: Syntax highlighting dengan Prismjs pada Astro
date: 29 January 2022
author: Fahfudin Farhan
readTime: 1 Min Read
category: Tutorial
tags:
- Astro
- Prismjs
- Syntax Highlighting
description: Menggunakan theme syntax highlighting pada Prismjs pada Astro.
---

Astro memiliki **syntax highlighting** bawaan yaitu **Prismjs** yang telah terinstall secara otomatis saat kita menjalankan perintah `npm init astro`. Tetapi pada saat saya mencoba memasukkan beberapa `code` kedalam file `markdown` ternyata *syntax highlighting*-nya tidak muncul.

Karena hal tersebut, akhirnya aku mencari tahu bagaimana supaya `code` yang aku masukkan dapat memiliki *syntax highlighting*.

Setelah berselancar beberapa lama, akhirnya ketemu dengan cara menggunakan theme yang telah di tambahkan oleh komunitas pada halaman **[Github 🡵 ](https://github.com/PrismJS/prism-themes)**.

![Github-PrismJS-Themes 🡵 ](/assets/blog/github-prismjs-themes.png)

Pada halaman Github tersebut pilih salah satu **theme** yang ingin kamu gunakan, dan mengunduh file css-nya atau salin file css tersebut.

Bila kamu mengunduh file css, kamu dapat **drag and drop** pada folder **styles** yang kamu miliki pada proyek Astro. Tetapi apabila kamu tidak mengunduhnya dan ingin membuat file tersebut secara manual, kamu dapat membuat file dengan nama **theme** yang ingin kamu salin ke dalam css.

Pada website ini aku menyimpan file css pada folder **styles** di dalam **assets**, tampilannya struktur folder akan seperti berikut:


```
src/
├─ assets/
│  ├─ styles/
│  │  ├─ atom-one-dark.css

```

Setelah itu **import** file css pada header komponen Astro.

```astro
<link rel="stylesheet" href={Astro.resolve('../assets/styles/atom-one-dark.css')}>
```

Selesai, kamu berhasil mengimplementasikan *syntax highlighting* dengan menggunakan Prismjs pada Astro, kamu dapat melihat kembali **code block** yang sudah berubah seperti **theme** yang telah kamu pilih.