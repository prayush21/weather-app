"use client";

import Main from "@/components/main";
import Sider from "@/components/sider";
import axiosInstance from "@/lib/axiosConfig";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axiosInstance
      .get("", {
        params: {
          lat: 40.7127281,
          lon: -74.0060152,
          exclude: "minutely",
        },
      })
      .then((res) => {
        console.log("res", res);
      });
  }, []);

  return (
    <main className=" w-screen h-screen sm:px-10 py-5">
      <div className="max-w-full w-full h-full m-auto grid grid-flow-row sm:grid-cols-4 rounded-xl">
        <Sider />
        <Main />
      </div>
    </main>
  );
}
