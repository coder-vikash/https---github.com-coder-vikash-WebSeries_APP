// src/components/WebSeriesPage.jsx
import React from "react";

const webSeriesData = [
  {
    title: "Stranger Things",
    image: "https://via.placeholder.com/300x170",
    description:
      "A group of young friends witness supernatural forces and secret government exploits.",
    link: "#",
  },
  {
    title: "Mirzapur",
    image: "https://via.placeholder.com/300x170",
    description:
      "A gritty story of crime, violence, and ambition in the lawless town of Mirzapur.",
    link: "#",
  },
  {
    title: "Money Heist",
    image: "https://via.placeholder.com/300x170",
    description:
      "A criminal mastermind plans the biggest heist in recorded history.",
    link: "#",
  },
  // Add more entries if you like
];

export default function WebSeriesPage() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-info fw-bold" href="/">
            WebSeriesWorld
          </a>
        </div>
      </nav>

      {/* Page Title */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">Popular Web Series</h2>

        <div className="row g-4">
          {webSeriesData.map((series, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-secondary text-light h-100">
                <img
                  src={series.image}
                  className="card-img-top"
                  alt={series.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{series.title}</h5>
                  <p className="card-text">{series.description}</p>
                  <a href={series.link} className="btn btn-outline-info btn-sm">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
