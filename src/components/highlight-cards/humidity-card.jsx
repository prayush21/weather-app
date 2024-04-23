import React from "react";
import { useSelector } from "react-redux";
import SkeletonCard from "./skeleton-card";

function HumidityCard() {
  const current = useSelector((state) => state.weather.cityWeather.current);
  const status = useSelector((state) => state.weather.status);

  if (status == "idle" && Object.keys(current).length != 0) {
    return (
      <div className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between">
        <div className=" text-gray-400 font-normal text-sm">Humidity</div>
        <div className="font-normal text-4xl">
          {current.humidity}
          <span className="text-lg"> %</span>
        </div>
        <div className="font-normal text-sm">Normal &#128077;</div>
      </div>
    );
  } else {
    return <SkeletonCard />;
  }
}

export default HumidityCard;
