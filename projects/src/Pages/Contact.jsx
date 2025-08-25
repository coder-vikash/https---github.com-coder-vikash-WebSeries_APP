// src/Pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#121212", minHeight: "90vh", color: "white" }}
    >
      <div className="text-center mb-5">
        <h1 className="text-danger fw-bold"> Contact Us</h1>
        <p className="text-secondary fs-5">
          We'd love to hear from you! Please fill out the form below.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="bg-dark p-4 rounded-4 shadow">
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">
                <i className="fas fa-user me-2"></i>Name
              </label>
              <input
                type="text"
                className="form-control bg-secondary text-white border-0"
                id="name"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                <i className="fas fa-envelope me-2"></i>Email
              </label>
              <input
                type="email"
                className="form-control bg-secondary text-white border-0"
                id="email"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="form-label text-white">
                <i className="fas fa-comment-dots me-2"></i>Message
              </label>
              <textarea
                className="form-control bg-secondary text-white border-0"
                id="message"
                rows="5"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-danger px-5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-5 text-secondary">
        <p>
          <i className="fas fa-map-marker-alt me-2"></i>CineStream HQ, Mumbai,
          India
        </p>
        <p>
          <i className="fas fa-phone-alt me-2"></i>+91-9876543210
        </p>
        <p>
          <i className="fas fa-envelope me-2"></i>support@cinestream.com
        </p>
        <p>
          <i className="fas fa-envelope me-2"></i>Developed By @Vikash kumar
        </p>
      </div>
    </div>
  );
}
