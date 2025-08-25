const Movie = require("../Model/Movies");

// Add new movie
const addMovie = async (req, res) => {
  try {
    const { title, subtitle, genre, language, releaseDate } = req.body;

    const poster = req.files["poster"] ? req.files["poster"][0].path : "";
    const video = req.files["video"] ? req.files["video"][0].path : "";

    const movie = new Movie({
      title,
      subtitle,
      poster,
      video,
      genre: genre ? genre.split(",") : [],
      language,
      releaseDate,
    });

    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: "Failed to add movie", error });
  }
};

// Get all movies
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies", error });
  }
};

module.exports = { addMovie, getMovies };
