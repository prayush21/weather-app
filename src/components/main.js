import React from "react";
import Navbar from "./nav-bar";
import WeatherList from "./weather-list";
import WeatherHighlights from "./weather-highlights";

function Main() {
  return (
    <div className="bg-gray-100 sm:col-span-3 sm:rounded-e-3xl p-12 h-full">
      <Navbar />
      <WeatherList />
      <WeatherHighlights />
    </div>
  );
}

export default Main;
