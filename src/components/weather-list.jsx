import React from "react";
import weatherIconSvg from "../../public/weatherIcon.svg";
import Image from "next/image";

const weekListItems = [
  { title: "Sun", icon: weatherIconSvg, maxTemp: 15, minTemp: -3 },
  { title: "Mon", icon: weatherIconSvg, maxTemp: 20, minTemp: 5 },
  { title: "Tue", icon: weatherIconSvg, maxTemp: 18, minTemp: 3 },
  { title: "Wed", icon: weatherIconSvg, maxTemp: 22, minTemp: 8 },
  { title: "Thu", icon: weatherIconSvg, maxTemp: 17, minTemp: 2 },
  { title: "Fri", icon: weatherIconSvg, maxTemp: 21, minTemp: 7 },
  { title: "Sat", icon: weatherIconSvg, maxTemp: 19, minTemp: 4 },
];

const weatherListItems = [
  { title: "12AM", icon: weatherIconSvg, maxTemp: 15, minTemp: -3 },
  { title: "1AM", icon: weatherIconSvg, maxTemp: 20, minTemp: 5 },
  { title: "2AM", icon: weatherIconSvg, maxTemp: 18, minTemp: 3 },
  { title: "3AM", icon: weatherIconSvg, maxTemp: 22, minTemp: 8 },
  { title: "4AM", icon: weatherIconSvg, maxTemp: 17, minTemp: 2 },
  { title: "5AM", icon: weatherIconSvg, maxTemp: 21, minTemp: 7 },
  { title: "6AM", icon: weatherIconSvg, maxTemp: 19, minTemp: 4 },
  { title: "7AM", icon: weatherIconSvg, maxTemp: 15, minTemp: -3 },
  { title: "8AM", icon: weatherIconSvg, maxTemp: 20, minTemp: 5 },
  { title: "9AM", icon: weatherIconSvg, maxTemp: 18, minTemp: 3 },
  { title: "10AM", icon: weatherIconSvg, maxTemp: 22, minTemp: 8 },
  { title: "11AM", icon: weatherIconSvg, maxTemp: 17, minTemp: 2 },
  { title: "12PM", icon: weatherIconSvg, maxTemp: 21, minTemp: 7 },
  { title: "1PM", icon: weatherIconSvg, maxTemp: 19, minTemp: 4 },
  { title: "2PM", icon: weatherIconSvg, maxTemp: 15, minTemp: -3 },
  { title: "3PM", icon: weatherIconSvg, maxTemp: 20, minTemp: 5 },
  { title: "4PM", icon: weatherIconSvg, maxTemp: 18, minTemp: 3 },
  { title: "5PM", icon: weatherIconSvg, maxTemp: 22, minTemp: 8 },
  { title: "6PM", icon: weatherIconSvg, maxTemp: 17, minTemp: 2 },
  { title: "7PM", icon: weatherIconSvg, maxTemp: 21, minTemp: 7 },
  { title: "8PM", icon: weatherIconSvg, maxTemp: 19, minTemp: 4 },
  { title: "9PM", icon: weatherIconSvg, maxTemp: 15, minTemp: -3 },
  { title: "10PM", icon: weatherIconSvg, maxTemp: 20, minTemp: 5 },
  { title: "11PM", icon: weatherIconSvg, maxTemp: 18, minTemp: 3 },
];

function WeatherList() {
  const listItems = weekListItems;
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
      {listItems.map(({ title, maxTemp, minTemp, icon }, index) => {
        return (
          <div
            key={title}
            className="bg-white min-h-36 min-w-32 max-w-72 p-4 rounded-3xl mr-2 flex flex-col items-center gap-2"
          >
            <div className=" text-sm">{title}</div>
            <Image src={icon} alt="weather-icon" />
            <div className=" text-pretty text-sm">
              <span className="">{maxTemp}&deg;</span>{" "}
              <span className="text-gray-500">{minTemp}&deg;</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherList;
