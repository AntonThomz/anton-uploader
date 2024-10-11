const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function uploadimgur(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error('File tidak ditemukan');
    }

    const form = new FormData();
    form.append('image', fs.createReadStream(filePath));

    const response = await axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        data: form,
        headers: {
            ...form.getHeaders(),
            Authorization: `Client-ID aedd064ce68c6ee`
        }
    });

    return response.data.data.link;
}

module.exports = { uploadimgur };