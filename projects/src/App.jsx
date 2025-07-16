// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/LoginPage/Login.jsx";
import Signup from "./components/LoginPage/SignUp.jsx";
import Web_Series from "./Pages/Web_Serise.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import WebSeries from "./Pages/Web_Serise.jsx";
import "./web.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: "57px" }}>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Web_Series />
              </>
            }
          />
          <Route path="/movies" element={<movies />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/series" element={<series />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
