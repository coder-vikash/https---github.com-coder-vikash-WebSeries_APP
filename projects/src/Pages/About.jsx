// src/Pages/About.jsx
import React from "react";

function About() {
  return (
    <div
      className="container py-5 text-light"
      style={{ backgroundColor: "#1a1a1a", minHeight: "90vh" }}
    >
      <div className="text-center mb-5">
        <h1 className="text-danger fw-bold">🎬 About CineStream</h1>
        <p className="lead text-secondary">
          Your go-to destination for streaming Movies and WebSeries
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div
            className="p-4 rounded shadow"
            style={{ backgroundColor: "#2c2c2c" }}
          >
            <h3 className="text-info">🌟 Our Mission</h3>
            <p>
              At <strong>CineStream</strong>, we aim to bring the magic of
              cinema to your screens. We provide a seamless platform where users
              can explore the latest and classic Movies and WebSeries from
              around the globe.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="p-4 rounded shadow"
            style={{ backgroundColor: "#2c2c2c" }}
          >
            <h3 className="text-warning">🎥 What We Offer</h3>
            <ul className="list-unstyled">
              <li>✅ A wide range of genres</li>
              <li>✅ Fast streaming experience</li>
              <li>✅ Secure login and user profiles</li>
              <li>✅ Easy search and navigation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-muted">
          © {new Date().getFullYear()} CineStream. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
