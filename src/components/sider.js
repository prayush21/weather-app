import React from "react";
import SearchInput from "./search-input";
import CurrentWeather from "./current-weather";
import City from "./city";

function Sider() {
  return (
    <div className="bg-gray-50 sm:col-span-1 sm:rounded-s-3xl p-12 flex flex-col justify-between">
      <SearchInput />
      <CurrentWeather />
      <City />
    </div>
  );
}

export default Sider;
