# Anton Uploader 📤

**Anton Uploader** adalah utilitas yang memungkinkan pengguna untuk mengunggah gambar ke berbagai platform secara cepat dan mudah. Proyek ini dirancang untuk membantu pengembang dan pengguna dalam berbagi gambar tanpa perlu khawatir tentang masalah penyimpanan atau pengelolaan file.

## Penjelasan Proyek

Anton Uploader menyediakan dua metode untuk mengunggah gambar menggunakan API yang berbeda. Metode ini memungkinkan Anda untuk mengunggah gambar ke **Imgur** dan **Uguu.se**. Dengan menggunakan proyek ini, Anda dapat:

- Mengunggah gambar ke **Imgur** dengan menggunakan API resmi.
- Mengunggah gambar ke **Uguu.se** dengan menggunakan pendekatan berbasis `FormData`.

Contoh URL gambar yang dihasilkan setelah unggahan dapat digunakan langsung dalam aplikasi atau proyek Anda.

## Fitur

- **Dukungan Beberapa Platform**: Mengunggah gambar ke Imgur dan Uguu.se dengan mudah.
- **Antarmuka Sederhana**: Mudah digunakan untuk pengembang dengan hanya beberapa baris kode.
- **Pengelolaan File**: Menyimpan dan mengelola gambar secara efisien dengan API yang sudah teruji.

## Instalasi

Untuk menginstal paket ini, gunakan npm dengan perintah berikut:

```bash
npm install anton-uploader
```

## Contoh pengguna

```javascript
const { antonuploader1, antonuploader2 } = require('anton-uploader');

(async () => {
    const link1 = await antonuploader1('./path/to/image.jpg'); // Ganti dengan path file yang benar
    console.log('Imgur Photo URL:', link1);

    const link2 = await antonuploader2('./path/to/image.jpg'); // Ganti dengan path file yang benar
    console.log('Uguu.se Photo URL:', link2);
})();