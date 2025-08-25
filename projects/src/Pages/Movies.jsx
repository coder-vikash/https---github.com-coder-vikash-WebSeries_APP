import React, { useState, useEffect } from "react";
import MovieCard from "../components/Flex/MoviesCard.jsx";
import { searchMedia } from "../Services/Service.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await searchMedia("movie", "movie");
        setMovies(popularMovies.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div className="text-center py-5">Loading movies...</div>;
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Top Movies</h2>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <div className="text-center">No movies found</div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
