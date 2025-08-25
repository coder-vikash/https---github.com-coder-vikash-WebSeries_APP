import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h3>LET US HELP YOU</h3>
          <ul>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Bulk Orders</a>
            </li>
            <li>
              <a href="#">Store Locator</a>
            </li>
            <li>
              <a href="#">Furniture Warranty Policy</a>
            </li>
            <li>
              <a href="#">Gift Card</a>
            </li>
            <li>
              <a href="#">Franchise Enquiry Form</a>
            </li>
            <li>
              <a href="#">Interior Design Studio</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">How To Order</a>
            </li>
            <li>
              <a href="#">Billing & Payments</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Return & Exchanges</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">In The News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>ABOUT CINESTREAM</h3>
          <ul>
            <li>
              <a href="#">1 years of Cinestream</a>
            </li>
            <li>
              <a href="#">Philosophy</a>
            </li>
            <li>
              <a href="#">Organic Certification</a>
            </li>
            <li>
              <a href="#">The Fabindia School</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Fabfamily</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-social">
        <p>Follow Us</p>
        <div class="social-icons">
          <i class="fa-brands fa-instagram"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>

      <div class="footer-apps">
        <p>Our Largest Store At Your Fingertips</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          class="store-badge"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          class="store-badge"
        />
      </div>

      <div class="footer-bottom">
        <p>
          © Copyright 2025 Fabindia.com. All rights reserved:- Developed By
          Vikash Kumar.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
