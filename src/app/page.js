"use client";

import Main from "@/components/main";
import Sider from "@/components/sider";
import { getWeatherData } from "@/features/weatherSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const params = {
  // lat: 28.6138954,
  // lon: 77.2090057,
  lat: 35.6828387,
  lon: 139.7594549,
  // q: "New York",
  // exclude: "minutely",
  units: "metric",
  // dt: 1713717638788,
};
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const params = {
              lat: latitude,
              lon: longitude,
              units: "metric",
            };
            dispatch(getWeatherData(params));
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, [dispatch]); // Only run this effect on mount
  return (
    <main className=" w-screen h-screen sm:px-10 py-5">
      <div className="max-w-full w-full h-full m-auto grid grid-flow-row sm:grid-cols-4 rounded-xl">
        <Sider />
        <Main />
      </div>
    </main>
  );
}
