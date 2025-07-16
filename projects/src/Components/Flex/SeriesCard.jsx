import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SeriesCard = ({ web }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null); // 'liked', 'disliked', or null

  const handleLike = () => {
    if (userAction === "liked") {
      setLikes(likes - 1);
      setUserAction(null);
    } else if (userAction === "disliked") {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setUserAction("liked");
    } else {
      setLikes(likes + 1);
      setUserAction("liked");
    }
  };

  const handleDislike = () => {
    if (userAction === "disliked") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else if (userAction === "liked") {
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
      setUserAction("disliked");
    } else {
      setDislikes(dislikes + 1);
      setUserAction("disliked");
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={web.image}
          className="card-img-top"
          alt={web.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{web.title}</h5>
          <p className="card-text text-muted">{web.subtitle}</p>

          {/* Like/Dislike Buttons */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className={`btn btn-sm ${
                userAction === "liked" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={handleLike}
            >
              ❤️ {likes}
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
            href={web.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-auto"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
