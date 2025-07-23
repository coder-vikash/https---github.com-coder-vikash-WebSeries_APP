const express = require("express");
const router = express.Router();
const multer = require("multer");
const Movie = require("../Model/Movies");

// File storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder name
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});

const upload = multer({ storage: storage });

// POST: Add a movie
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, subtitle, link } = req.body;
    const image = req.file ? req.file.path : "";

    const movie = new Movie({
      title,
      subtitle,
      link,
      image,
    });

    await movie.save();
    res.status(201).json({ message: "Movie uploaded successfully", movie });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: All movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
