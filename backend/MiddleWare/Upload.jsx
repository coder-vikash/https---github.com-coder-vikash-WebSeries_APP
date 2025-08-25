const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure folders exist
const posterDir = "uploads/posters";
const videoDir = "uploads/videos";
if (!fs.existsSync(posterDir)) fs.mkdirSync(posterDir, { recursive: true });
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, "uploads/posters");
    } else if (file.mimetype.startsWith("video")) {
      cb(null, "uploads/videos");
    } else {
      cb(new Error("Invalid file type"), null);
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
