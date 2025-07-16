import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css/SignUp.css"; // 👈 Import the new CSS

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3 className="text-center mb-4 text-info">Create Your Account</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-info text-dark w-100">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-danger">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
