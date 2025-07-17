// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  image: String,
  link: String,
});

module.exports = mongoose.model("Movie", movieSchema);
