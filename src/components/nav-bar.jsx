import {
  toggleForecastDuration,
  toggleTemperatureUnit,
} from "@/features/weatherSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const forecastDuration = useSelector(
    (state) => state.weather.forecastDuration
  );

  return (
    <div className="flex justify-between">
      <div className="flex gap-5 font-medium">
        <button
          onClick={() => dispatch(toggleForecastDuration("HOURLY"))}
          className={
            forecastDuration == "HOURLY"
              ? `border-b border-black`
              : "text-gray-400"
          }
        >
          Today
        </button>
        <button
          onClick={() => dispatch(toggleForecastDuration("WEEKLY"))}
          className={
            forecastDuration == "WEEKLY"
              ? `border-b border-black`
              : "text-gray-400"
          }
        >
          Week
        </button>
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => dispatch(toggleTemperatureUnit("C"))}
          className={`p-1 h-8 w-8 rounded-full flex justify-center items-center ${
            temperatureUnit == "C"
              ? "bg-black text-white"
              : "text-black bg-white"
          }`}
        >
          &deg; C
        </button>
        <button
          onClick={() => dispatch(toggleTemperatureUnit("F"))}
          className={`p-1 h-8 w-8 rounded-full flex justify-center items-center ${
            temperatureUnit == "F"
              ? "bg-black text-white"
              : "text-black bg-white"
          }`}
        >
          &deg; F
        </button>
        <div className="h-8 w-8  rounded-lg bg-indigo-700"></div>
      </div>
    </div>
  );
}

export default Navbar;
