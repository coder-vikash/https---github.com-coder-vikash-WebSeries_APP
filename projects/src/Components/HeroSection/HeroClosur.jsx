// components/HeroClosour.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Closour.css";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    subtitle: "Supernatural | Drama | 50m",
    description:
      "A group of young friends witness supernatural forces and secret government exploits.",
    image:
      "https://images.filmibeat.com/img/2025/05/saruserialreview-1747326591.jpg",
    link: "https://www.netflix.com/in/title/80057281",
  },
  {
    id: 2,
    title: "Money Heist",
    subtitle: "Crime | Thriller | 1h",
    description:
      "A mastermind and his team of thieves pull off the biggest heist in recorded history.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmNkMWZmNWQtNjljNi00YTU4LTg0ZTEtY2U0OTk0MmI3NTNmXkEyXkFqcGc@._V1_.jpg",
    link: "https://www.netflix.com/in/title/80192098",
  },
  {
    id: 3,
    title: "The Family Man",
    subtitle: "Action | Drama | 45m",
    description:
      "A middle-class man secretly works as an intelligence officer while balancing his personal life.",
    image:
      "https://cdn.dribbble.com/userupload/31794716/file/original-8cd9068c1ed8e73cf9834fc4012f7a8c.jpg?crop=111x0-1136x769&format=webp&resize=400x300&vertical=center",
    link: "https://www.primevideo.com/detail/The-Family-Man/0KRGHG8WZ8RZ2STP1MIE8ZW2KP",
  },
];

function HeroClosour() {
  return (
    <div className="hero-carousel-wrapper">
      <Carousel fade interval={4000} pause="hover" controls indicators>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${movie.image})` }}
            >
              <div className="overlay d-flex align-items-center">
                <div className="container text-start text-light">
                  <h1 className="display-4 fw-bold">{movie.title}</h1>
                  <p className="lead fst-italic">{movie.subtitle}</p>
                  <p className="mb-4">{movie.description}</p>
                  <Button
                    variant="danger"
                    size="lg"
                    href={movie.link}
                    target="_blank"
                  >
                    ▶ Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroClosour;
