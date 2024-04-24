import { weatherAxiosInstance } from "@/lib/axiosConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  status: "idle",
  currentCityName: "",
  cachedCityOptions: [],
  cityWeather: {
    current: {},
    dailyData: [],
    hourlyData: [],
  },
  forecastDuration: "HOURLY",
  temperatureUnit: "C",
};

export const getWeatherData = createAsyncThunk(
  "weather/get-data",
  async (cityData, thunkAPI) => {
    let { lon, lat, value } = cityData;
    let params = {
      lat: lat,
      lon: lon,
      units: "metric",
    };
    try {
      const response = await weatherAxiosInstance.get("", {
        params,
      });

      return { weatherData: response.data, cityData };
    } catch (error) {}
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    toggleForecastDuration: (state, action) => {
      state.forecastDuration = action.payload;
    },
    toggleTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
    // selectCity: (state, action) => {
    //   state.currentCityIndex = action.payload;
    // },
    addCurrentLocation: (state, action) => {
      let currentCity = {
        lat: action.payload.lat,
        lon: action.payload.lon,
        name: "Current Location",
        country: "",
      };
      state.currentCityName = currentCity.name;
      state.cachedCityOptions.push(currentCity);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        const { current, hourly, daily } = action.payload.weatherData;

        const updatedHourly = hourly.slice(0, 24).map((data) => {
          return {
            dt: data.dt,
            temp: data.temp,
            weather: data.weather,
          };
        });
        const updatedDaily = daily.slice(0, 7).map((data) => {
          return {
            dt: data.dt,
            temp_max: data.temp.max,
            temp_min: data.temp.min,
            weather: data.weather,
          };
        });

        state.cityWeather.current = current;
        state.cityWeather.hourlyData = updatedHourly;
        state.cityWeather.dailyData = updatedDaily;

        if (
          state.cachedCityOptions.findIndex(
            (option) => option.name == action.payload.cityData.name
          ) == -1
        ) {
          state.cachedCityOptions = [
            action.payload.cityData,
            ...state.cachedCityOptions,
          ];
        }
        state.currentCityName = action.payload.cityData.name;
        state.status = "idle";
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const {
  toggleForecastDuration,
  toggleTemperatureUnit,
  selectCity,
  addCurrentLocation,
} = weatherSlice.actions;

export default weatherSlice.reducer;
