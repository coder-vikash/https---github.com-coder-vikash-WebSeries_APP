// components/MovieCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image:
      "https://images.filmibeat.com/img/2025/05/saruserialreview-1747326591.jpg",
  },
  {
    id: 2,
    title: "Money Heist",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmNkMWZmNWQtNjljNi00YTU4LTg0ZTEtY2U0OTk0MmI3NTNmXkEyXkFqcGc@._V1_.jpg",
    link: "https://www.netflix.com/in/title/80192098",
  },
  {
    id: 3,
    title: "The Family Man",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRozXRE4oMmMybGPC4WQkMHMmU8j0Qsg9HYJQCozi1Cg3Mha7j5oI-TliQhDeQR460I3ih87Q",
    link: "https://www.primevideo.com/detail/The-Family-Man/0KRGHG8WZ8RZ2STP1MIE8ZW2KP",
  },
  {
    id: 4,
    title: "The Boys",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYxan0RVMaKr1JxY2uZlvhPqhqU-KIGXbYpU_LW1HG3-f9-RpYQlOPok90hExi-L3cvRuE",
    link: "https://www.primevideo.com/detail/0LTVQJYJ2GD3W64X6BIORWEMUR/",
  },
  {
    id: 5,
    title: "Sacred Games",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQn5iQVUMmCBKWoRRAjY4qORrvL2SgxW8dSESz9BuRTIuB0L8AGgw1SkXNEGRxc6upBTSRpPA",
    link: "https://www.netflix.com/in/title/80115328",
  },
];

function MovieCarousel() {
  return (
    <Carousel fade pause="hover" interval={3000}>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.image}
            alt={movie.title}
            style={{
              height: "500px",
              objectFit: "cover",
              backgroundImage: "cover",

              borderRadius: "5px",
            }}
          />
          <Carousel.Caption>
            <h3 className="text-white fw-bold">{movie.title}</h3>
            <Button
              variant="danger"
              href={movie.link}
              target="_blank"
              className="mt-2"
            >
              CineStream
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
