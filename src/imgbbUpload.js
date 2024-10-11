const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function uploadToImgBB(filePath, apiKey) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error('File tidak ditemukan');
        }

        const form = new FormData();
        form.append('image', fs.createReadStream(filePath));

        const response = await axios({
            method: 'post',
            url: `https://api.imgbb.com/1/upload?key=${apiKey}`,
            data: form,
            headers: form.getHeaders()
        });

        if (response.data && response.data.data && response.data.data.url) {
            return response.data.data.url;
        } else {
            throw new Error('Gagal mengunggah file ke ImgBB');
        }
    } catch (error) {
        console.error('Error saat upload ke ImgBB:', error.message);
        throw error;
    }
}

module.exports = { uploadToImgBB };