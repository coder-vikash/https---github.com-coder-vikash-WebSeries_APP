import React from "react";
import MovieCard from "../components/Flex/MoviesCard.jsx";

const movieList = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi, Thriller",
    image: "https://i.ibb.co/1M7jJjr/inception.jpg",
    trailer: "https://www.youtube.com/watch?v=8hP9D6kZseM",
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Sci-Fi, Adventure",
    image: "https://i.ibb.co/SN6S9Fp/interstellar.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    image: "https://i.ibb.co/FJbxK3m/dark-knight.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    genre: "Action, Superhero",
    image: "https://i.ibb.co/yS2Zk2d/endgame.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
];

const MoviesPage = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Top Movies</h2>
      <div className="row">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
