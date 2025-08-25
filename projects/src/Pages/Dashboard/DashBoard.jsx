import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDashboard = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/movies");
      setMovies(res.data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      setMovies(movies.filter((movie) => movie._id !== id));
    } catch (err) {
      console.error("Error deleting movie:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="mb-4">📽 Uploaded Movies</h3>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie._id}>
            <div className="card h-100 shadow">
              <img
                src={`http://localhost:5000/${movie.poster}`}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.subtitle}</p>
                <p>
                  <strong>Genre:</strong> {movie.genre.join(", ")}
                </p>
                <p>
                  <strong>Language:</strong> {movie.language}
                </p>
                <p>
                  <strong>Release Date:</strong>{" "}
                  {new Date(movie.releaseDate).toDateString()}
                </p>
                <a
                  href={`http://localhost:5000/${movie.video}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm me-2"
                >
                  Watch
                </a>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteMovie(movie._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDashboard;
