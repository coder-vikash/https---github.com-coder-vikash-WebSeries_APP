import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css/Login.css"; // 👈 Import the new CSS

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4 text-danger">Login to CineStream</h3>
        <form>
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
          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="text-info">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
