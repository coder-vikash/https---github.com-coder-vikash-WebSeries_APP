import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHeart,
  FaRegHeart,
  FaThumbsDown,
  FaRegThumbsDown,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";

const SeriesCard = ({ web }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [dislikes, setDislikes] = useState(Math.floor(Math.random() * 2));
  const [userAction, setUserAction] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const rating = (Math.random() * 5).toFixed(1);

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
      <div
        className={`card h-100 shadow-sm border-0 overflow-hidden transition-all ${
          isHovered ? "shadow-lg" : ""
        }`}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Image with Badge */}
        <div className="position-relative">
          <img
            src={
              web.Poster !== "N/A"
                ? web.Poster
                : "https://via.placeholder.com/300x450?text=No+Poster"
            }
            className="card-img-top"
            alt={web.Title}
            style={{ height: "350px", objectFit: "cover" }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-warning text-dark">
              <FaStar className="me-1" />
              {rating}
            </span>
          </div>
          <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75">
            <h5 className="text-white mb-0">{web.Title}</h5>
            <small className="text-white-50">
              {web.Year} • {web.Type}
            </small>
          </div>
        </div>

        {/*This is the  Card Body */}
        <div className="card-body d-flex flex-column">
          {/* this is the Action Buttons */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className={`btn btn-sm ${
                userAction === "liked" ? "btn-danger" : "btn-outline-danger"
              } rounded-pill`}
              onClick={handleLike}
            >
              {userAction === "liked" ? (
                <FaHeart className="me-1" />
              ) : (
                <FaRegHeart className="me-1" />
              )}
              {likes}
            </button>

            <button
              className={`btn btn-sm ${
                userAction === "disliked"
                  ? "btn-secondary"
                  : "btn-outline-secondary"
              } rounded-pill`}
              onClick={handleDislike}
            >
              {userAction === "disliked" ? (
                <FaThumbsDown className="me-1" />
              ) : (
                <FaRegThumbsDown className="me-1" />
              )}
              {dislikes}
            </button>
          </div>

          {/* This is the View Details Button */}
          <a
            href={web.link || `https://www.imdb.com/title/${web.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto rounded-pill d-flex align-items-center justify-content-center"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
