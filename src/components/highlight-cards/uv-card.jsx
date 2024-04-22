import React from "react";
import { useSelector } from "react-redux";

function UVCard() {
  const current = useSelector((state) => state.weather.cityWeather.current);
  return (
    <div className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between">
      <div className=" text-gray-400 font-normal text-sm">UV Index</div>
      <div className="font-normal text-4xl">{current.uvi}</div>
    </div>
  );
}

export default UVCard;
