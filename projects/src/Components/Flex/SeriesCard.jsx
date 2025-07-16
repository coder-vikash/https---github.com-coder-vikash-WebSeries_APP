import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SeriesCard = ({ web }) => {
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
