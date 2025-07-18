import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css/Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" }); // Clear old alerts

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );

      setAlert({ type: "success", message: res.data.msg });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setForm({ email: "", password: "" });

      // Optionally redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      setAlert({
        type: "danger",
        message: err.response?.data?.msg || "Login failed. Try again.",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4 text-danger">Login to CineStream</h3>

        {/* ALERT MESSAGE */}
        {alert.message && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
