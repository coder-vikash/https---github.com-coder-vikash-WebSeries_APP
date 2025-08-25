import S_Data from "./S_Data";
import MovieCard from "./MoviesCard";
import SeriesCard from "./SeriesCard";

const DisplayContent = () => {
  return (
    <div className="container-fluid py-4">
      {/* Movies Section */}
      {/* <div className="mb-5">
        <h2 className="mb-4 border-bottom pb-2">Movies</h2>
        <div className="row">
          {S_Data.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                Poster: movie.image,
                Title: movie.title,
                Type: movie.subtitle,
                link: movie.link,
              }}
            />
          ))}
        </div> *
        /}
      </div>

      {/* Web Series Section */}
      <div className="mb-5">
        <h2 className="mb-4 border-bottom pb-2">Popular Web Series</h2>
        <div className="row">
          {S_Data.map((series) => (
            <SeriesCard
              key={series.id}
              web={{
                Poster: series.image,
                Title: series.title,

                Type: series.subtitle,
                link: series.link,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayContent;
