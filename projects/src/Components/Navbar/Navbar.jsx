import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import ThemeToggle from "../TongleThem/TongleThem";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/">
          <i className="fa fa-film me-2"></i> CineStream
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Navigation */}
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
            {/* Theme Toggle */}
            <ThemeToggle />
          </ul>
          {/* .....................Search Box in 1 hours ....................*/}
          <form
            className="d-flex me-3 position-relative w-90 w-md-auto"
            onSubmit={handleSearch}
          >
            <input
              className="form-control bg-black text-white"
              type="search"
              placeholder="Developed By @Vikash Search movies, genre or language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ minWidth: "200px" }}
            />
            <button className="btn btn-outline-info ms-2" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>

          {/* Auth Buttons */}
          <div className="d-flex align-items-center">
            <Link
              to="/login"
              className="btn btn-outline-danger d-flex align-items-center me-2 px-3"
              style={{ height: "40px", fontSize: "14px" }}
            >
              <i className="fa fa-sign-in me-1"></i> Login
            </Link>

            <Link
              to="/signup"
              className="btn btn-danger d-flex align-items-center px-3"
              style={{ height: "40px", fontSize: "14px" }}
            >
              <i className="fa fa-user-plus me-1"></i> Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
