import React from "react";
import { useLocation } from "react-router-dom";
import S_Data from "../Components/Flex/S_Data";
import SeriesCard from "../Components/Flex/SeriesCard";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const filtered = S_Data.filter((web) =>
    [web.title, web.genre, web.language]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5 pt-5">
      <h3 className="mb-4">
        🔍 Search Results for: <strong>{query}</strong>
      </h3>

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((web) => <SeriesCard key={web.id} web={web} />)
        ) : (
          <div className="text-danger text-center mt-5">
            <h5>No results found for "{query}"</h5>
          </div>
        )}
      </div>
    </div>
  );
}
