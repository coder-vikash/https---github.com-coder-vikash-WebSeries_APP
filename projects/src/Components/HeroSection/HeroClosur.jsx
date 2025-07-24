import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Closour.css"; // renamed from Closour.css to Slider.css

const HeroSlider = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=98ed2ebe143c3c350a78930e648e97bd"
        );
        const data = await response.json();
        setMovieData(data.results || []);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container-fluid p-0">
      <Carousel fade controls={true} indicators={false} interval={5000}>
        {movieData.map((movie, index) => (
          <Carousel.Item key={index}>
            <div
              className="slider-bg position-relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="slider-overlay d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 text-white text-start mt-5">
                      <h5 className="display-6 fw-bold mb-3">{movie.title}</h5>
                      <p className="fs-5 mb-2">
                        Released: {movie.release_date}
                      </p>
                      <p className="fs-6 text-uppercase">
                        TMDb Rating: {movie.vote_average}
                      </p>
                      <p className="fs-6 mb-3">
                        {movie.overview?.slice(0, 150)}...
                      </p>
                      <Button
                        variant="danger"
                        size="lg"
                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                        target="_blank"
                        className="mt-4 px-4"
                      >
                        ▶ Watch Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
