import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css/SignUp.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" }); // Reset alert

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        form
      );
      setAlert({
        type: "success",
        message: res.data.message || "Signup successful!",
      });
      setForm({ name: "", email: "", password: "" });

      // Optional: redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setAlert({
        type: "danger",
        message: err.response?.data?.message || "Signup failed. Try again.",
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3 className="text-center mb-4 text-info">Create Your Account</h3>

        {/* This is the Bootstrap Alert Message */}
        {alert.message && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
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
