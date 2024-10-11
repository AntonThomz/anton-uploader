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

3. **ImgBB**  
   ImgBB adalah layanan hosting gambar yang cepat dan mudah digunakan. Layanan ini menyediakan API yang memungkinkan aplikasi Anda untuk mengunggah gambar dan menerima URL hasil unggahan.

4. **Cloudinary**  
   Cloudinary adalah layanan cloud yang menyediakan hosting gambar dan media secara canggih, dilengkapi dengan fitur manajemen gambar. Project Anda memanfaatkan API Cloudinary untuk mengunggah dan menyimpan gambar di cloud dengan cepat dan efisien.

### Cara Menggunakan

1. **Instalasi**  

Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-uploader
```

## uploadToCloudinary

```javascript
require('dotenv').config();
const {
 uploadimgur, 
 uploadfileugu, 
 uploadToImgBB, 
 uploadToCloudinary 
} = require("anton-uploader")

(async() => {
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
		console.error('modules error');
	};
})();
```

##uploadToImgBB

```javascript
require('dotenv').config();
const {
 uploadimgur, 
 uploadfileugu, 
 uploadToImgBB, 
 uploadToCloudinary 
} = require("anton-uploader")

(async () => {
    try {
        const filePath = '../foto.jpg'; // Ganti dengan path file yang benar
        const apiKey = process.env.IMGBB_API_KEY || 'your-imgbb-api-key'; // Pastikan untuk mengganti dengan API key Anda

        if (!apiKey) {
            throw new Error('API Key untuk ImgBB tidak tersedia.');
        }

        // Upload file ke ImgBB
        const imgBBUrl = await uploadToImgBB(filePath, apiKey);
        console.log('File berhasil diunggah ke ImgBB, URL:', imgBBUrl);
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
})();
```

## uploadfileugu

```javascript
require('dotenv').config();
const {
 uploadimgur, 
 uploadfileugu, 
 uploadToImgBB, 
 uploadToCloudinary 
} = require("anton-uploader")

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

## uploadimgur

```javascript
require('dotenv').config();
const {
 uploadimgur, 
 uploadfileugu, 
 uploadToImgBB, 
 uploadToCloudinary 
} = require("anton-uploader")

(async () => {
    try {
        const filePath = '../foto.jpg'; // Ganti dengan path ke file yang ingin diunggah

        // Upload file ke Imgur
        const imgurUrl = await uploadimgur(filePath);
        console.log('File berhasil diunggah ke Imgur, URL:', imgurUrl);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengunggah file ke Imgur:', error.message);
    }
})();