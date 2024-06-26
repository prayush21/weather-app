"use client";

import Main from "@/components/main";
import Sider from "@/components/sider";
import { getWeatherData, addCurrentLocation } from "@/features/weatherSlice";
import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./loading";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            // dispatch(addCurrentLocation({ lat: latitude, lon: longitude }));
            dispatch(
              getWeatherData({
                lat: latitude,
                lon: longitude,
                country: "",
                name: "Current Location",
                value: "Current Location",
                state: "",
                label: "Current Location",
              })
            );
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
        <Suspense fallback={<Loading />}>
          <Sider />
          <Main />
        </Suspense>
      </div>
    </main>
  );
}
