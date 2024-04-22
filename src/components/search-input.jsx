"use client";

import { getWeatherData, selectCity } from "@/features/weatherSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const filterOptions = (inputValue) => {
  return optionsArray;
};

const promiseOptions = (inputValue, options) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, [1000]);
  });
};

function SearchInput() {
  const dispatch = useDispatch();
  const cityOptions = useSelector((state) => state.weather.cityOptions);
  async function handleCityChange(newValue) {
    let { coords, value } = newValue;
    let params = {
      lat: coords.lat,
      lon: coords.lon,
      units: "metric",
    };
    dispatch(selectCity(value));
    await dispatch(getWeatherData(params)).unwrap();
  }
  return (
    <AsyncSelect
      defaultInputValue="Current Location"
      onChange={handleCityChange}
      defaultOptions={cityOptions.map((city, index) => {
        return {
          label: city.name,
          value: index,
          coords: { lat: city.lat, lon: city.lon },
        };
      })}
      loadOptions={promiseOptions}
    />
  );
}

export default SearchInput;
