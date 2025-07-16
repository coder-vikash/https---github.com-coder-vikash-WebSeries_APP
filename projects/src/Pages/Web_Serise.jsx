import React from "react";
import S_Data from "../Components/Flex/S_Data";
import SeriesCard from "../Components/Flex/SeriesCard";
import HeroCarousel from "../Components/HeroSection/HeroClosur.jsx"; // Import Carousel

export default function WebSeries() {
  return (
    <div className="page-wrapper">
      <HeroCarousel /> {/* ZEE5-like scroll banner here */}
      <div className="container">
        <h2 className="text-center mt-3">🎬 Web Series Collection</h2>
        <div className="row">
          {S_Data.map((web) => (
            <SeriesCard key={web.id} web={web} />
          ))}
        </div>
      </div>
    </div>
  );
}
