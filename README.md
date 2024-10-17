<h1 align="center">
	<br>
		<br>
			<img width="320" src="src/form/utils/media/anton_uploader.jpg" alt="anton-uploader">
		<br>
		<br>
	<br>
</h1>

## report bug

<span style="color: red;">[Report bug](https://wa.me/6283198645688)</span>

## anton-uploader

[![NPM Version](https://img.shields.io/npm/v/anton-uploader.svg)](https://www.npmjs.com/package/anton-uploader)

**[anton-uploader](https://github.com/AntonThomz/anton-uploader)** adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mengunggah file gambar ke berbagai platform hosting gambar. Dengan mendukung beberapa layanan hosting populer, aplikasi ini memungkinkan pengguna untuk memilih platform mana yang akan digunakan untuk mengunggah gambar mereka.

### Layanan yang Didukung

Aplikasi ini mendukung beberapa layanan hosting gambar, yaitu:

1. **Imgur**  
   Imgur adalah platform hosting gambar yang populer dan banyak digunakan. Aplikasi Anda mendukung proses upload gambar ke Imgur dan mengembalikan URL dari gambar yang berhasil diunggah.

2. **Uguu.se**  
   Uguu adalah layanan hosting file sederhana yang memungkinkan pengguna untuk mengunggah file sementara dengan cepat. File akan disimpan sementara sesuai dengan kebijakan layanan mereka.

3. **Cloudinary**  
   Cloudinary adalah layanan cloud yang menyediakan hosting gambar dan media secara canggih, dilengkapi dengan fitur manajemen gambar. Project Anda memanfaatkan API Cloudinary untuk mengunggah dan menyimpan gambar di cloud dengan cepat dan efisien.

4. **Pomf2**  
   Pomf2 adalah layanan hosting file yang memungkinkan pengguna untuk mengunggah file dengan mudah. Project Anda mendukung pengunggahan gambar ke Pomf2 dan mengembalikan URL dari gambar yang berhasil diunggah.

5. **lurkmore**

   Fungsi uploadlurkmore adalah metode yang dirancang untuk mengunggah file gambar ke platform Lurkmore. Dengan menggunakan API Lurkmore, fungsi ini memungkinkan pengguna untuk meng-upload file dengan cepat dan mendapatkan URL dari gambar yang berhasil diunggah.

6. **Wedipe Upload**

   Wedipe Upload adalah layanan hosting file yang memungkinkan pengguna untuk mengunggah file gambar dengan mudah dan cepat. Aplikasi Anda mendukung upload ke Wedipe, yang kemudian mengembalikan URL dari gambar yang berhasil diunggah. Wedipe cocok untuk pengguna yang membutuhkan solusi upload sederhana dengan URL langsung yang dapat digunakan untuk berbagi gambar.

## install module

- Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-uploader
```

## Contoh Pengguna

```javascript
const anton = require("anton-uploader");

(async () => {
    const filePath = 'media.jpg';

    // Mengupload ke Imgur
    const imgurResult = await anton.Imgur(filePath);
    console.log('Hasil upload ke Imgur:', imgurResult);

    // Mengupload ke File Ugu
    const fileUguResult = await anton.FileUgu(filePath);
    console.log('Hasil upload ke File Ugu:', fileUguResult);

    // Mengupload ke Cloudinary
    const cloudinaryResult = await anton.Cloudinary(filePath);
    console.log('Hasil upload ke Cloudinary:', cloudinaryResult);

    // Mengupload ke Pomf2
    const pomf2Result = await anton.Pomf2(filePath);
    console.log('Hasil upload ke Pomf2:', pomf2Result);

    // Mengupload ke Lurkmore
    const lurkmoreResult = await anton.Lurkmore(filePath);
    console.log('Hasil upload ke Lurkmore:', lurkmoreResult);
    
    // Mengupload ke wedipe upload
    const wedipeResult = await anton.wedipe(filePath);
    console.log('Hasil upload ke wedipeResult:', wedipeResult);
})();