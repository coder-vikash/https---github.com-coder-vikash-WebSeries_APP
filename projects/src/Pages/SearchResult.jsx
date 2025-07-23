import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SeriesCard from "../Components/Flex/SeriesCard";
import { searchMedia } from "../Services/Service";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const searchResults = await searchMedia(query);
        setResults(searchResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) return <div className="text-center py-5">Searching...</div>;
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <div className="container mt-2 pt-4">
      <h5 className="mb-4">
        Search Results for <strong>{query}</strong>
      </h5>

      <div className="row">
        {results.length > 0 ? (
          results.map((item) => <SeriesCard key={item.imdbID} web={item} />)
        ) : (
          <div className="text-danger text-center mt-2">
            <h5>No results found for "{query}"</h5>
          </div>
        )}
      </div>
    </div>
  );
}
