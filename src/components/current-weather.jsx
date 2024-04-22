import React from "react";
import Image from "next/image";
import weatherIconSvg from "../../public/weatherIcon.svg";
import { useSelector } from "react-redux";
import { displayTemp, weekDayMap } from "@/lib/utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import W01dIcon from "../../public/weather/01d@2x.png";
import W02dIcon from "../../public/weather/02d@2x.png";
import W03dIcon from "../../public/weather/03d@2x.png";
import W04dIcon from "../../public/weather/04d@2x.png";
import W09dIcon from "../../public/weather/09d@2x.png";
import W10dIcon from "../../public/weather/10d@2x.png";
import W11dIcon from "../../public/weather/11d@2x.png";
import W13dIcon from "../../public/weather/13d@2x.png";
import W50dIcon from "../../public/weather/50d@2x.png";
import W01nIcon from "../../public/weather/01n@2x.png";
import W02nIcon from "../../public/weather/02n@2x.png";
import W03nIcon from "../../public/weather/03n@2x.png";
import W04nIcon from "../../public/weather/04n@2x.png";
import W09nIcon from "../../public/weather/09n@2x.png";
import W10nIcon from "../../public/weather/10n@2x.png";
import W11nIcon from "../../public/weather/11n@2x.png";
import W13nIcon from "../../public/weather/13n@2x.png";
import W50nIcon from "../../public/weather/50n@2x.png";

const iconMap = {
  "01d": W01dIcon,
  "02d": W02dIcon,
  "03d": W03dIcon,
  "04d": W04dIcon,
  "09d": W09dIcon,
  "10d": W10dIcon,
  "11d": W11dIcon,
  "13d": W13dIcon,
  "50d": W50dIcon,
  "01n": W01nIcon,
  "02n": W02nIcon,
  "03n": W03nIcon,
  "04n": W04nIcon,
  "09n": W09nIcon,
  "10n": W10nIcon,
  "11n": W11nIcon,
  "13n": W13nIcon,
  "50n": W50nIcon,
};

function CurrentWeather() {
  const current = useSelector((state) => state.weather.cityWeather.current);
  const status = useSelector((state) => state.weather.status);
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const today = new Date();
  const main = Array.isArray(current?.weather)
    ? current?.weather[0]?.main
    : "-";
  const icon = Array.isArray(current?.weather)
    ? current?.weather[0]?.icon
    : "-";
  console.log("status", status);
  return (
    <div className=" w-full flex flex-col gap-3 grow justify-evenly py-4 px-1">
      {status == "idle" ? (
        <Image
          className="self-center"
          src={iconMap[icon]}
          height={180}
          width={180}
          alt="current-weather-icon"
        />
      ) : (
        <Skeleton height={180} circle />
      )}
      {status == "idle" ? (
        <div style={{ fontWeight: "300" }} className="text-8xl">
          {displayTemp(current.temp, temperatureUnit)}
          <span className=" text-4xl">&deg;{temperatureUnit}</span>
        </div>
      ) : (
        <Skeleton height={90} />
      )}
      <div className="">
        <span className="">{weekDayMap[today.getDay()]}, </span>
        <span className=" align-top text-gray-400">
          {today.getHours().toString().padStart(2, 0)}:
          {today.getMinutes().toString().padStart(2, 0)}
        </span>
      </div>
      <hr></hr>
      {status == "idle" ? (
        <div className=" text-sm font-normal">{main}</div>
      ) : (
        <Skeleton count={1} />
      )}
      {status == "idle" ? (
        <div className=" text-sm font-normal">
          Feels like {displayTemp(current.feels_like, temperatureUnit)}&deg;
          {temperatureUnit}
        </div>
      ) : (
        <Skeleton count={1} />
      )}
    </div>
  );
}

export default CurrentWeather;
