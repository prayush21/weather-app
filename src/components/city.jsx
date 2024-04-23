import Image from "next/image";
import React, { useEffect, useState } from "react";
import NewYork from "../../public/new-york.avif";
import { useSelector } from "react-redux";
import { unsplashAxiosInstance } from "@/lib/axiosConfig";
function City() {
  const cityOptions = useSelector((state) => state.weather.cityOptions);
  const currentCityIndex = useSelector(
    (state) => state.weather.currentCityIndex
  );
  const { name, state, country } = cityOptions[currentCityIndex] ?? "";
  const nameTitle = name
    ? `${name}, ${state ? `${state},` : ""} ${country}`
    : "Current Location";
  const [srcImage, setSrcImage] = useState(NewYork);

  useEffect(() => {
    if (name) {
      unsplashAxiosInstance
        .get("/search/photos", {
          params: { query: name, page: 1, per_page: 1 },
        })
        .then((res) => {
          const { results } = res.data;
          const { urls } = results[0];

          setSrcImage(urls.regular);
        });
    }
  }, [name]);

  return (
    <div className=" relative w-full rounded-3xl">
      <Image
        className="object-cover w-72 h-32 rounded-3xl brightness-50"
        src={srcImage}
        alt="city"
        width={280}
        height={200}
      />
      <div className=" w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        {nameTitle}
      </div>
    </div>
  );
}

export default City;
