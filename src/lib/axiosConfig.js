import axios from "axios";

const weatherAxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall",
  //   baseURL: "https://api.openweathermap.org/data/2.5/weather",
});

const unsplashAxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
});

const geoAxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0/direct",
});

geoAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params["appid"] = "5054178baa6ff4cb4e976f1e3345a1fa";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

unsplashAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params["client_id"] = "YQzr0LcDJkcceLrPhFpHj19CRPoRVWiGnVFgz6V7AOA";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

weatherAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params["appid"] = "e23b7c9b0288bc1b451f1b808d287fb2";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { weatherAxiosInstance, unsplashAxiosInstance, geoAxiosInstance };
