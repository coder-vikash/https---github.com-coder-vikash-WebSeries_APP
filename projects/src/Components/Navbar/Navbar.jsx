// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-danger fw-bold" to="/">
          🎬 CineStream
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/webseries">
                WebSeries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/series">
                Series
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control me-2 bg-dark text-white"
              placeholder="Search..."
            />
            <button className="btn btn-outline-info">🔍</button>
          </form>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-danger me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-danger">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
