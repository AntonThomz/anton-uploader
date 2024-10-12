const { uploadimgur } = require("./src/UploadImgur")
const { uploadfileugu } = require("./src/UploadFileUgu")
const { uploadToCloudinary } = require('./src/cloudinaryUploader');
const { uploadToPomf2 } = require("./src/pomf2Uploader")
module.exports = { uploadimgur, uploadfileugu, uploadToCloudinary, uploadToPomf2 };