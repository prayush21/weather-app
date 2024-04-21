import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall",
});

axiosInstance.interceptors.request.use(
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

export default axiosInstance;
