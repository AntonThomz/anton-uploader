const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ddwxu3hhz',
    api_key: process.env.CLOUDINARY_API_KEY || '257292411556524',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'bYP8i-wX0htRGNfUag0w28j1VUE'
});

async function uploadToCloudinary(filePath) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(filePath, (error, result) => {
            if (error) {
                return reject(new Error(`Error saat upload ke Cloudinary: ${error.message}`));
            }
            resolve(result.secure_url);
        });
    });
}

module.exports = { uploadToCloudinary };