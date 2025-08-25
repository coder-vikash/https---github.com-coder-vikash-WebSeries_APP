// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  genre: [String],
  language: String,
  releaseDate: Date,
  poster: String, // path to image file
  video: String, // path to video file
});

module.exports = mongoose.model("Movie", movieSchema);
