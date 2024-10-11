const { uploadimgur } = require("./src/UploadImgur")
const { uploadfileugu } = require("./src/UploadFileUgu")
const { uploadToImgBB } = require("./src/imgbbUpload")
const { uploadToCloudinary } = require('./src/cloudinaryUploader');
module.exports = { uploadimgur, uploadfileugu, uploadToImgBB, uploadToCloudinary };