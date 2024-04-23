import React from "react";
import { useSelector } from "react-redux";
import SkeletonCard from "./skeleton-card";

function SunCard() {
  const current = useSelector((state) => state.weather.cityWeather.current);

  const sunrise = new Date(current.sunrise);
  const sunset = new Date(current.sunset);
  const status = useSelector((state) => state.weather.status);

  if (status == "idle" && Object.keys(current).length != 0) {
    return (
      <div className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between">
        <div className=" text-gray-400 font-normal text-sm">
          Sunrise & Sunset
        </div>
        <div className="flex items-center gap-1">
          <div className="text-4xl">🌅</div>-
          <div className=" text-base">
            {sunrise.getHours()}:{sunrise.getMinutes()}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-4xl"> 🌇</div> -
          <div className=" text-base">
            {sunset.getHours()}:{sunset.getMinutes()}
          </div>
        </div>
      </div>
    );
  } else {
    return <SkeletonCard />;
  }
}

export default SunCard;
