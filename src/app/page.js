"use client";

import Main from "@/components/main";
import Sider from "@/components/sider";
import { getWeatherData } from "@/features/weatherSlice";
import axiosInstance from "@/lib/axiosConfig";
import { useEffect } from "react";
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
  // console.log("getWeatherData", getWeatherData);
  useEffect(() => {
    // axiosInstance
    //   .get("", {
    //     params: params,
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //   });
    dispatch(getWeatherData(params));
  }, [dispatch]);

  return (
    <main className=" w-screen h-screen sm:px-10 py-5">
      <div className="max-w-full w-full h-full m-auto grid grid-flow-row sm:grid-cols-4 rounded-xl">
        <Sider />
        <Main />
      </div>
    </main>
  );
}
