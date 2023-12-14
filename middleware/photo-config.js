const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "dnd",
  allowedFormats: ["jpg", "jpeg", "png"],
  // transformation: [{ width: 960, height: 960, crop: 'limit' }],
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    callback(undefined, name);
  },
});

module.exports = multer({ storage: storage }).single("img");
