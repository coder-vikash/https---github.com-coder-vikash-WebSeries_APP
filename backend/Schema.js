// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  poster: {
    type: String, // path to uploaded image
    required: true,
  },
  video: {
    type: String, // path to uploaded video file
    required: true,
  },
  genre: {
    type: [String], // example: ["Action", "Drama"]
    default: [],
  },
  language: {
    type: String,
    default: "Hindi",
  },
  releaseDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
