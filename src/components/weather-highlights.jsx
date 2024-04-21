import React from "react";
import UVHighlightCard from "./uv-highlight-card";
import HighlightCard from "./highlight-card";
import SunHighlightCard from "./sun-highlight-card";

function WeatherHighlights() {
  const highlightsList = [
    {
      id: 1,
      title: "UV Index",
      cardType: "uv",
    },
    {
      id: 2,
      title: "Wind Status",
      cardType: "generic",
    },
    {
      id: 3,
      title: "Sunrise & Sunset",
      cardType: "sun",
    },
    {
      id: 4,
      title: "Humidity",
      cardType: "generic",
    },
    {
      id: 5,
      title: "Visibility",
      cardType: "generic",
    },
    {
      id: 6,
      title: "Air Quality",
      cardType: "generic",
    },
  ];
  return (
    <div className="flex flex-col min-h-fit gap-4">
      <div className="font-medium grow-0">Today&#39;s Highlights</div>
      <div className="grid grid-cols-3 grid-rows-12 gap-4 grow w-full h-full">
        {highlightsList.map(({ id, cardType, title }) => {
          return cardType == "uv" ? (
            <UVHighlightCard title={title} id={id} />
          ) : cardType == "sun" ? (
            <SunHighlightCard title={title} id={id} />
          ) : (
            <HighlightCard title={title} id={id} />
          );
        })}
      </div>
    </div>
  );
}

export default WeatherHighlights;
