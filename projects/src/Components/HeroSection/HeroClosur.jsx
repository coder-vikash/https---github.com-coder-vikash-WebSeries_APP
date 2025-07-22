import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Closour.css";

const HeroClosour = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?s=avengers&apikey=dc248e93"
        );
        const data = await response.json();
        setMovieData(data.Search || []);
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
              className="carousel-bg position-relative"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            >
              <div className="overlay d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 text-white text-start mt-5">
                      <h5 className="display-6 fw-bold mb-3">{movie.Title}</h5>
                      <p className="fs-5 mb-2">Released: {movie.Year}</p>
                      <p className="fs-6 text-uppercase">Type: {movie.Type}</p>
                      <Button
                        variant="danger"
                        size="lg"
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                        target="_blank"
                        className="mt-4 px-2"
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

export default HeroClosour;
