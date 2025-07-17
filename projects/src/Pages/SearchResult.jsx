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
    <div className="container mt-2 pt-4">
      <h5 className="mb-4">
        ❤️Search Reasult is found <strong>{query}</strong>
      </h5>

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((web) => <SeriesCard key={web.id} web={web} />)
        ) : (
          <div className="text-danger text-center mt-2">
            <h5>No results found for "{query}"</h5>
          </div>
        )}
      </div>
    </div>
  );
}
