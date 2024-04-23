"use client";

import { getWeatherData, selectCity } from "@/features/weatherSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const filterOptions = (inputValue, cityOptions) => {
  return cityOptions.filter((city) =>
    city.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue, cityOptions) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue, cityOptions));
    }, 1000);
  });
};

function SearchInput() {
  const dispatch = useDispatch();
  const cityOptions = useSelector((state) => state.weather.cityOptions);
  // const selectOptions = cityOptions.map((city, index) => {
  //   return {
  //     label: city.name,
  //     value: index,
  //     coords: { lat: city.lat, lon: city.lon },
  //   };
  // });
  async function handleCityChange(newValue) {
    let { lon, lat, value } = newValue;
    let params = {
      lat: lat,
      lon: lon,
      units: "metric",
    };
    dispatch(selectCity(value));
    await dispatch(getWeatherData(params)).unwrap();
  }
  return (
    <AsyncSelect
      className="react-select-container"
      classNamePrefix="react-select"
      theme="neutral60"
      defaultInputValue="Current Location"
      onChange={handleCityChange}
      defaultOptions={cityOptions}
      loadOptions={(inputValue) => promiseOptions(inputValue, cityOptions)}
    />
  );
}

export default SearchInput;
