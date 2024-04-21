import React from "react";
import Image from "next/image";
import weatherIconSvg from "../../public/weatherIcon.svg";
function CurrentWeather() {
  return (
    <div className=" w-full flex flex-col gap-3 grow justify-evenly py-4 px-1">
      <Image
        className="self-center"
        src={weatherIconSvg}
        height={180}
        width={180}
        alt="current-weather-icon"
      />
      <div className=" font-light text-8xl">12&deg;C</div>
      <div className="">
        <span className="">Monday,</span>
        <span className="text-gray-400">16:00</span>
      </div>
      <hr></hr>
      <div className=" text-xs font-normal">Mostly Cloudy</div>
      <div className=" text-xs font-normal">Rain - 30%</div>
    </div>
  );
}

export default CurrentWeather;
