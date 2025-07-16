import React from "react";
import SeriesCard from "../components/Flex/SeriesCard.jsx";

const seriesList = [
  {
    id: 1,
    title: "Money Heist",
    subtitle: "Crime Thriller",
    image: "https://i.ibb.co/mJzmkVW/money-heist.jpg",
    link: "https://www.netflix.com/in/title/80192098",
  },
  {
    id: 2,
    title: "Stranger Things",
    subtitle: "Sci-Fi Thriller",
    image: "https://i.ibb.co/3WZTnNp/stranger-things.jpg",
    link: "https://www.netflix.com/in/title/80057281",
  },
  // Add more series as needed
];

const SeriesPage = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Popular Web Series</h2>
      <div className="row">
        {seriesList.map((web) => (
          <SeriesCard key={web.id} web={web} />
        ))}
      </div>
    </div>
  );
};

export default SeriesPage;
