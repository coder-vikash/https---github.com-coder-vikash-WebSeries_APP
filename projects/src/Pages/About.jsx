// src/Pages/About.jsx
import React from "react";
import "../Pages/PageCss/About.css";

function About() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="about-page text-light"
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-gradient">
            Welcome to CineStream
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Your personal universe of movies & web series — stream, explore, and
            escape into stories that matter.
          </p>
        </div>

        {/* Core Sections */}
        <div className="row gy-4">
          {/* Vision / Intro */}
          <div className="col-lg-6">
            <div className="bg-dark rounded-4 p-4 p-md-5 h-100 shadow-sm border-start border-4 border-danger">
              <h3 className="fw-bold mb-3 text-danger">Our Vision</h3>
              <p>
                CineStream isn’t just a platform — it’s an experience. We bring
                together cinephiles, binge-watchers, and storytellers from
                across the world. Our vision is to redefine digital
                entertainment by delivering curated, fast, and reliable access
                to cinematic content of all genres.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="col-lg-6">
            <div className="bg-dark rounded-4 p-4 p-md-5 h-100 shadow-sm border-start border-4 border-info">
              <h3 className="fw-bold mb-3 text-info"> Why CineStream?</h3>
              <ul className="list-unstyled fs-6">
                <li> Extensive collection of classic & trending titles</li>
                <li> Lightning-fast streaming & no annoying ads</li>
                <li> User accounts with secure login & preferences</li>
                <li> AI-powered smart search & genre filters</li>
                <li> Mobile-friendly experience for anytime binge</li>
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="col-lg-12">
            <div className="bg-dark rounded-4 p-4 p-md-5 shadow-sm border-start border-4 border-warning">
              <h3 className="fw-bold mb-3 text-warning"> Our Mission</h3>
              <p>
                We believe stories have the power to inspire, heal, and connect
                people. CineStream is on a mission to make quality content
                accessible to everyone — whether you're into action, romance,
                indie gems, or international series.
              </p>
              <p>
                With intuitive design, community feedback, and constant
                innovation, we are shaping the future of streaming — one viewer
                at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-5 pt-4 border-top border-secondary">
          <p className="text-muted small mb-0">
            © {currentYear} CineStream. Crafted for story lovers. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
