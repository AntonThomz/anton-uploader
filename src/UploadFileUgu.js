const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function uploadfileugu(input) {
    return new Promise(async (resolve, reject) => {
        const form = new FormData();
        form.append("files[]", fs.createReadStream(input));
        await axios({
            url: "https://uguu.se/upload.php",
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                ...form.getHeaders()
            },
            data: form
        }).then((response) => {
            const fileUrl = response.data.files[0].url;
            resolve(fileUrl);
        }).catch((err) => reject(err));
    });
}

module.exports = { uploadfileugu }