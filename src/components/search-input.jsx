"use client";

import React from "react";
import AsyncSelect from "react-select/async";

const optionsArray = [
  { label: "New York", value: 1 },
  { label: "Mumbai", value: 2 },
  { label: "Delhi", value: 3 },
];

const filterOptions = (inputValue) => {
  return optionsArray;
};

const promiseOptions = (inputValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterOptions(inputValue));
    }, [1000]);
  });
};

function SearchInput() {
  return <AsyncSelect defaultOptions loadOptions={promiseOptions} />;
}

export default SearchInput;
