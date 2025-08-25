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
import Movies from "./Pages/Movies.jsx";
import Series from "./Pages/Series.jsx";
import SearchResults from "./Pages/SearchResult.jsx";
import Footer from "./Footer/Footer.jsx";
import { MoviApi } from "./Components/Flex/MoviApi/MoviApi.jsx";

// ✅ You forgot to import MovieForm
import MovieForm from "./components/MoviForm/MoviForm.jsx";
import MovieDashboard from "./Pages/Dashboard/DashBoard.jsx";

import "./web.css";
import DisplayContent from "./Components/Flex/DisplayContent.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <MoviApi />

      <div style={{ paddingTop: "57px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MoviApi />
                <Web_Series />
                <MovieDashboard />
                <DisplayContent />

                <Footer />
              </>
            }
          />
          <Route path="/movi/dashboard" element={<MovieDashboard />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/series" element={<Series />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/moviform" element={<MovieForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
