import React, { useState, useEffect } from "react";
import SeriesCard from "../Components/Flex/SeriesCard";
import HeroCarousel from "../Components/HeroSection/HeroClosur.jsx";
import { searchMedia } from "../Services/Service.jsx";
import "./PageCss/WebSeriesBtn.css";

export default function WebSeries() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setLoading(true);
        setError(null);
        const popularSeries = await searchMedia("series", "series");
        setSeries(popularSeries.slice(0, 24));
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
  }, []);

  const filterData = () => {
    let result = [...series];

    // Apply filter jb all btn pe click kare tb all movies show karega
    if (filter !== "All") {
      result = result.filter((web) => web.Type === filter);
    }

    // yaha pe searching apply hoga
    if (searchQuery) {
      result = result.filter((web) =>
        web.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting jb hum filter kare ge tb dropDown btn pe click karne pe
    switch (sortBy) {
      case "year-asc":
        result.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        break;
      case "year-desc":
        result.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        break;
      case "title-asc":
        result.sort((a, b) => a.Title.localeCompare(b.Title));
        break;
      case "title-desc":
        result.sort((a, b) => b.Title.localeCompare(a.Title));
        break;
      default:
        break;
    }

    return result;
  };

  const filteredSeries = filterData();

  if (loading) return <div className="text-center py-5">Loading series...</div>;
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <div className="page-wrapper">
      <HeroCarousel />
      <div className="container">
        <h2 className="text-center mt-3">🎬 Web Series Collection</h2>

        {/* this is for Search Bar search karne pe movi aaye ga   */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* This is filter and sort the list jb hum btn pe click kare ge tb  */}
        <div className="d-flex flex-wrap justify-content-between mb-4">
          <div className="filter-group mb-3 mb-md-0">
            <button
              className={`btn-grp ${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`btn-grp ${filter === "series" ? "active" : ""}`}
              onClick={() => setFilter("series")}
            >
              TV Series
            </button>
            <button
              className={`btn-grp ${filter === "episode" ? "active" : ""}`}
              onClick={() => setFilter("episode")}
            >
              Episodes
            </button>
            <button
              className={`btn-grp ${filter === "movie" ? "active" : ""}`}
              onClick={() => setFilter("movie")}
            >
              Movies
            </button>
            <button
              className={`btn-grp ${filter === "game" ? "active" : ""}`}
              onClick={() => setFilter("game")}
            >
              Games
            </button>
          </div>

          <div className="sort-group">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="year-asc">Year (Oldest first)</option>
              <option value="year-desc">Year (Newest first)</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Results Show kare ga after the search result is found */}
        {filteredSeries.length > 0 && (
          <div className="mb-3">
            Showing {filteredSeries.length} of {series.length} series
          </div>
        )}

        {/* Series Grid */}
        <div className="row">
          {filteredSeries.length > 0 ? (
            filteredSeries.map((web) => (
              <SeriesCard key={web.imdbID} web={web} />
            ))
          ) : (
            <div className="text-center py-5">
              <h4>No series found</h4>
              <p>Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
