import React from "react";
import { Button } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow">
        <img
          src={movie.Poster}
          className="card-img-top"
          alt={movie.Title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text text-muted">{movie.Type}</p>
          <a
            href={movie.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
