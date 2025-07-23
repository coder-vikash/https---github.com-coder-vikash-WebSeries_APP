import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null);

  const handleLike = () => {
    if (userAction === "liked") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      setLikes(userAction === "disliked" ? likes + 1 : likes + 1);
      setDislikes(userAction === "disliked" ? dislikes - 1 : dislikes);
      setUserAction("liked");
    }
  };

  const handleDislike = () => {
    if (userAction === "disliked") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      setDislikes(userAction === "liked" ? dislikes + 1 : dislikes + 1);
      setLikes(userAction === "liked" ? likes - 1 : likes);
      setUserAction("disliked");
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          className="card-img-top"
          alt={movie.Title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text text-muted">Year: {movie.Year}</p>
          <p className="card-text text-muted">Type: {movie.Type}</p>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className="btn btn-sm"
              onClick={handleLike}
              style={{ border: "none", background: "none" }}
            >
              <i
                className={`fa-heart ${userAction === "liked" ? "fas" : "far"}`}
                style={{
                  color: userAction === "liked" ? "red" : "black",
                  fontSize: "1.5rem",
                }}
              ></i>{" "}
              {likes}
            </button>

            <button
              className={`btn btn-sm ${
                userAction === "disliked" ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={handleDislike}
            >
              👎 {dislikes}
            </button>
          </div>

          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
