import React from "react";
import { useSelector } from "react-redux";

function VisibilityCard() {
  const current = useSelector((state) => state.weather.cityWeather.current);
  return (
    <div className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between">
      <div className=" text-gray-400 font-normal text-sm">Visibility</div>
      <div className="font-normal text-4xl">
        {Number(current.visibility) / 1000}
        <span className="text-lg"> km</span>
      </div>
      <div className="font-normal text-sm">Normal &#128077;</div>
    </div>
  );
}

export default VisibilityCard;
