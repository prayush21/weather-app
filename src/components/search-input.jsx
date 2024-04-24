"use client";

import { getWeatherData, selectCity } from "@/features/weatherSlice";
import { geoAxiosInstance } from "@/lib/axiosConfig";
import debounce from "debounce";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const filterOptions = (inputValue, cityOptions) => {
  return cityOptions.filter((city) =>
    city.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = async (inputValue, cityOptions) => {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(filterOptions(inputValue, cityOptions));
  //   }, 1000);
  // });

  const options = await geoAxiosInstance.get("", {
    params: {
      q: inputValue,
      limit: 5,
    },
  });

  return options.data.map((option, index) => {
    const label = `${option.name}, ${option.country}`;
    return {
      label: label,
      lat: option.lat,
      lon: option.lon,
      country: option.country,
      name: option.name,
      value: `${option.name} - ${option.lat}`,
      state: option.state ? option.state : "",
    };
    // return {
    //   [option.name]: {
    //     label: label,
    //     lat: option.lat,
    //     lon: option.lon,
    //     country: option.country,
    //     name: option.name,
    //     value: index,
    //     state: option.state ? option.state : "",
    //   },
    // };
  });
};
const debouncedPromiseOptions = debounce(async (inputValue, cityOptions) => {
  const options = await geoAxiosInstance.get("", {
    params: {
      q: inputValue,
      limit: 5,
    },
  });

  return options.data.map((option, index) => {
    const label = `${option.name}, ${option.country}`;
    return {
      label: label,
      lat: option.lat,
      lon: option.lon,
      country: option.country,
      name: option.name,
      value: `${option.name} - ${option.lat}`,
      state: option.state ? option.state : "",
    };
  });
}, 400);

function SearchInput() {
  const dispatch = useDispatch();
  const currentCityName = useSelector((state) => state.weather.currentCityName);
  const cachedCityOptions = useSelector(
    (state) => state.weather.cachedCityOptions
  );
  // const selectOptions = cityOptions.map((city, index) => {
  //   return {
  //     label: city.name,
  //     value: index,
  //     coords: { lat: city.lat, lon: city.lon },
  //   };
  // });
  async function handleCityChange(newValue) {
    await dispatch(getWeatherData(newValue)).unwrap();
  }

  console.log(
    "value",
    cachedCityOptions.find((option) => option.name == currentCityName)
  );

  return (
    <>
      <AsyncSelect
        className="react-select-container"
        classNamePrefix="react-select"
        theme={`neutral60`}
        value={cachedCityOptions.find(
          (option) => option.name == currentCityName
        )}
        onChange={handleCityChange}
        defaultOptions={cachedCityOptions}
        loadOptions={(inputValue) =>
          promiseOptions(inputValue, cachedCityOptions)
        }
      />
    </>
  );
}

export default SearchInput;
