<h1 align="center">
	<br>
	<br>
	<img width="320" src="src/form/utils/media/anton_uploader.jpg" alt="anton-uploader">
	<br>
	<br>
	<br>
</h1>

## anton-uploader

[![NPM Version](https://img.shields.io/npm/v/anton-uploader.svg)](https://www.npmjs.com/package/anton-uploader)

**anton-uploader** adalah aplikasi yang dirancang untuk memudahkan pengguna dalam mengunggah file gambar ke berbagai platform hosting gambar. Dengan mendukung beberapa layanan hosting populer, aplikasi ini memungkinkan pengguna untuk memilih platform mana yang akan digunakan untuk mengunggah gambar mereka.

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

### Cara Menggunakan

1. **Instalasi**  

Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-uploader
```

## uploadToCloudinary

```javascript
require('dotenv').config();
const { uploadToCloudinary } = require("anton-uploader");

(async () => {
	try {
		const filePath = '../foto.jpg';
		const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'ddwxu3hhz';
		const apiKey = process.env.CLOUDINARY_API_KEY || '257292411556524';
		const apiSecret = process.env.CLOUDINARY_API_SECRET || 'bYP8i-wX0htRGNfUag0w28j1VUE';
		if (!cloudName || !apiKey || !apiSecret) {
			throw new Error('Cloudinary credentials are missing.');
		}
		const url = await uploadToCloudinary(filePath, cloudName, apiKey, apiSecret);
		console.log('File berhasil diunggah ke Cloudinary, URL:', url);
	} catch (error) {
		console.error('modules error:', error.message);
	}
})();
```

## uploadToImgur

```javascript
require('dotenv').config();
const { uploadToImgur } = require("anton-uploader");

(async () => {
    try {
        const filePath = '../foto.jpg'; // Ganti dengan path file yang benar

        // Upload file ke Imgur
        const imgurUrl = await uploadToImgur(filePath);
        console.log('File berhasil diunggah ke Imgur, URL:', imgurUrl);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengunggah file ke Imgur:', error.message);
    }
})();
```

## uploadfileugu

```javascript
require('dotenv').config();
const { uploadfileugu } = require("anton-uploader");
const fs = require('fs');

(async () => {
    try {
        const filePath = '../foto.jpg'; // Ganti dengan path file yang ingin diunggah

        // Pastikan file yang ingin diunggah ada
        if (!fs.existsSync(filePath)) {
            throw new Error('File tidak ditemukan');
        }

        // Upload file ke Uguu.se
        const uguUrl = await uploadfileugu(filePath);
        console.log('File berhasil diunggah ke Uguu.se, URL:', uguUrl);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengunggah file ke Uguu.se:', error.message);
    }
})();
```

## uploadToPomf2

```javascript
require('dotenv').config();
const { uploadToPomf2 } = require("anton-uploader");

(async () => {
    try {
        const filePath = '../foto.jpg'; // Ganti dengan path file yang ingin diunggah

        // Upload file ke Pomf2
        const pomf2Url = await uploadToPomf2(filePath);
        console.log('File berhasil diunggah ke Pomf2, URL:', pomf2Url);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengunggah file ke Pomf2:', error.message);
    }
})();