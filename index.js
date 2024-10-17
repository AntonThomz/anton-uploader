const { uploadimgur } = require("./src/UploadImgur");
const { uploadfileugu } = require("./src/UploadFileUgu");
const { uploadToCloudinary } = require('./src/cloudinaryUploader');
const { uploadToPomf2 } = require("./src/pomf2Uploader");
const { uploadlurkmore } = require("./src/lurkmoreuguu");
const { wedipe } = require("./src/wedipe")

const upload = {
  Imgur: uploadimgur,
  FileUgu: uploadfileugu,
  Cloudinary: uploadToCloudinary,
  Pomf2: uploadToPomf2,
  Lurkmore: uploadlurkmore,
  wedipe: wedipe
};

module.exports = upload;