import Image from "next/image";
import React, { useEffect, useState } from "react";
import defaultImage from "../../public/default.avif";
import { useSelector } from "react-redux";
import { unsplashAxiosInstance } from "@/lib/axiosConfig";
function City() {
  const cachedCityOptions = useSelector(
    (state) => state.weather.cachedCityOptions
  );
  const currentCityName = useSelector((state) => state.weather.currentCityName);
  const { name, state, country } =
    cachedCityOptions.find((option) => option.name == currentCityName) ?? "";
  let nameTitle = "";
  if (!name || name == "Current Location") nameTitle = "Current Location";
  else nameTitle = `${name}, ${state ? `${state},` : ""} ${country}`;

  const [srcImage, setSrcImage] = useState(defaultImage);
  console.log("name", name);
  useEffect(() => {
    if (name && name != "Current Location") {
      unsplashAxiosInstance
        .get("/search/photos", {
          params: { query: name, page: 1, per_page: 1 },
        })
        .then((res) => {
          const { results } = res.data ?? [];
          const { urls } = results.length == 0 ? null : results[0];

          setSrcImage(urls ? urls.regular : de);
        });
    }
  }, [name]);

  return (
    <div className=" relative w-full rounded-3xl">
      <Image
        className="object-cover w-72 h-32 rounded-3xl brightness-70"
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
