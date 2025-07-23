const express = require("express");
const router = express.Router();
// const upload = require("../middleware/upload");
const { addMovie, getMovies } = require("../Controllerl/MoviControl");

// Upload fields: poster + video
const uploadFields = upload.fields([
  { name: "poster", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

// Routes
router.post("/", uploadFields, addMovie); // Add new movie
router.get("/", getMovies); // Get all movies

module.exports = router;
