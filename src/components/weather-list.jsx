import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { displayTemp, hourlyMap, weekDayMap } from "@/lib/utils";
import Skeleton from "react-loading-skeleton"; // Import the Skeleton component
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

function WeatherList() {
  const forecastDuration = useSelector(
    (state) => state.weather.forecastDuration
  );
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const status = useSelector((state) => state.weather.status);

  const dailyData = useSelector((state) => state.weather.cityWeather.dailyData);
  const hourlyData = useSelector(
    (state) => state.weather.cityWeather.hourlyData
  );
  const listItems = forecastDuration == "HOURLY" ? hourlyData : dailyData;

  const skeletonCount = forecastDuration === "HOURLY" ? 24 : 7;
  return (
    // <div className="my-10 px-4 flex gap-1">
    // <div className="my-10 px-4 grid grid-cols-7 gap-2 overflow-x-scroll">
    //   {weatherListItems.map(({ title, maxTemp, minTemp, icon }, index) => {
    //     return (
    //       <div
    //         key={title}
    //         className="bg-white h-36 min-w-28 max-w-72 p-4 rounded-3xl col-span-1"
    //       >
    //         {title}
    //       </div>
    //     );
    //   })}
    // </div>
    <div className={`my-5 flex overflow-x-auto no-scrollbar w-full`}>
      {status == "idle"
        ? listItems.map(({ dt, temp_max, temp_min, temp, weather }, index) => {
            const newWeekDayIndex = (new Date().getDay() + index) % 7;
            const newHourIndex = (new Date().getHours() + index) % 24;
            const { icon } = Array.isArray(weather) && weather[0];
            let title =
              forecastDuration === "HOURLY"
                ? hourlyMap[newHourIndex]
                : weekDayMap[newWeekDayIndex];

            return (
              <div
                key={dt}
                className="bg-white min-h-48 min-w-32 max-w-72 p-4 rounded-3xl mr-2 flex flex-col items-center gap-2"
              >
                <div className="text-sm">{title}</div>
                <Image src={iconMap[icon]} alt="weather-icon" />
                <div className="text-pretty text-sm">
                  {temp ? (
                    <span>{displayTemp(temp, temperatureUnit)}&deg;</span>
                  ) : (
                    <>
                      <span>{displayTemp(temp_max, temperatureUnit)}&deg;</span>{" "}
                      <span className="text-gray-500">
                        {displayTemp(temp_min, temperatureUnit)}&deg;
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          })
        : Array.from({ length: skeletonCount }, (_, index) => (
            <div
              key={index}
              className="bg-white min-h-48 min-w-32 max-w-72 p-4 rounded-3xl mr-2 flex flex-col items-center justify-between gap-2"
            >
              <Skeleton height={20} width={50} />
              <Skeleton height={50} width={50} circle={true} />
              <Skeleton height={20} width={30} />
            </div>
          ))}
    </div>
  );
}

export default WeatherList;
