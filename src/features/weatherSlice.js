import { weatherAxiosInstance } from "@/lib/axiosConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  status: "idle",
  currentCityIndex: null,
  cityOptions: [
    {
      value: 0,
      label: "Current Location",
      lat: 0,
      lon: 0,
      country: "",
      state: "",
    },
    {
      value: 1,
      label: "New York County",
      lat: 40.7127281,
      lon: -74.0060152,
      country: "US",
      state: "New York",
    },
    {
      value: 2,
      label: "New Delhi",
      lat: 28.6138954,
      lon: 77.2090057,
      country: "IN",
      state: "Delhi",
    },
    {
      value: 3,
      label: "Mumbai",
      lat: 19.0785451,
      lon: 72.878176,
      country: "IN",
      state: "Maharashtra",
    },
    {
      value: 4,
      label: "Tokyo",
      lat: 35.6828387,
      lon: 139.7594549,
      country: "JP",
    },
    {
      value: 5,
      label: "Bengaluru",
      lat: 12.9767936,
      lon: 77.590082,
      country: "IN",
      state: "Karnataka",
    },
    // Additional Indian cities
    {
      value: 6,
      label: "Kolkata",
      lat: 22.572646,
      lon: 88.363895,
      country: "IN",
      state: "West Bengal",
    },
    {
      value: 7,
      label: "Chennai",
      lat: 13.0826802,
      lon: 80.2707184,
      country: "IN",
      state: "Tamil Nadu",
    },
    {
      value: 8,
      label: "Hyderabad",
      lat: 17.385044,
      lon: 78.486671,
      country: "IN",
      state: "Telangana",
    },
    {
      value: 9,
      label: "Pune",
      lat: 18.5204303,
      lon: 73.8567437,
      country: "IN",
      state: "Maharashtra",
    },
    {
      value: 10,
      label: "Ahmedabad",
      lat: 23.022505,
      lon: 72.5713621,
      country: "IN",
      state: "Gujarat",
    },
    // Additional cities from rest of the world
    {
      value: 11,
      label: "London",
      lat: 51.5073509,
      lon: -0.1277583,
      country: "GB",
    },
    {
      value: 12,
      label: "Paris",
      lat: 48.856614,
      lon: 2.3522219,
      country: "FR",
    },
    {
      value: 13,
      label: "Beijing",
      lat: 39.9041999,
      lon: 116.4073963,
      country: "CN",
    },
    {
      value: 14,
      label: "Rio de Janeiro",
      lat: -22.9068467,
      lon: -43.1728965,
      country: "BR",
    },
    {
      value: 15,
      label: "Sydney",
      lat: -33.8688197,
      lon: 151.2092955,
      country: "AU",
    },
    // More cities
    {
      value: 16,
      label: "Los Angeles",
      lat: 34.052235,
      lon: -118.243683,
      country: "US",
      state: "California",
    },
    {
      value: 17,
      label: "Chicago",
      lat: 41.8781136,
      lon: -87.6297982,
      country: "US",
      state: "Illinois",
    },
    {
      value: 18,
      label: "Toronto",
      lat: 43.65107,
      lon: -79.347015,
      country: "CA",
      state: "Ontario",
    },
    {
      value: 19,
      label: "Mexico City",
      lat: 19.4326077,
      lon: -99.133208,
      country: "MX",
    },
    {
      value: 20,
      label: "São Paulo",
      lat: -23.5505199,
      lon: -46.6333094,
      country: "BR",
    },
    {
      value: 21,
      label: "Moscow",
      lat: 55.755826,
      lon: 37.6173,
      country: "RU",
    },
    {
      value: 22,
      label: "Berlin",
      lat: 52.5200066,
      lon: 13.404954,
      country: "DE",
    },
    {
      value: 23,
      label: "Madrid",
      lat: 40.4167754,
      lon: -3.7037902,
      country: "ES",
    },
    {
      value: 24,
      label: "Rome",
      lat: 41.9027835,
      lon: 12.4963655,
      country: "IT",
    },
    {
      value: 25,
      label: "Istanbul",
      lat: 41.0082376,
      lon: 28.9783589,
      country: "TR",
    },
    // 15 more cities
    {
      value: 26,
      label: "Shanghai",
      lat: 31.2303904,
      lon: 121.4737021,
      country: "CN",
    },
    {
      value: 27,
      label: "Seoul",
      lat: 37.566535,
      lon: 126.9779692,
      country: "KR",
    },
    {
      value: 28,
      label: "Bangkok",
      lat: 13.7563309,
      lon: 100.5017651,
      country: "TH",
    },
    {
      value: 29,
      label: "Singapore",
      lat: 1.352083,
      lon: 103.819836,
      country: "SG",
    },
    {
      value: 30,
      label: "Sydney",
      lat: -33.8688197,
      lon: 151.2092955,
      country: "AU",
    },
    {
      value: 31,
      label: "Cairo",
      lat: 30.0444196,
      lon: 31.2357116,
      country: "EG",
    },
    {
      value: 32,
      label: "Lagos",
      lat: 6.5243793,
      lon: 3.3792057,
      country: "NG",
    },
    {
      value: 33,
      label: "Jakarta",
      lat: -6.2087634,
      lon: 106.845599,
      country: "ID",
    },
    {
      value: 34,
      label: "Dhaka",
      lat: 23.810332,
      lon: 90.4125181,
      country: "BD",
    },
    {
      value: 35,
      label: "Karachi",
      lat: 24.8607343,
      lon: 67.001136,
      country: "PK",
    },
    {
      value: 36,
      label: "Lima",
      lat: -12.046374,
      lon: -77.0427934,
      country: "PE",
    },
    {
      value: 37,
      label: "Santiago",
      lat: -33.4488897,
      lon: -70.6692655,
      country: "CL",
    },
    {
      value: 38,
      label: "Buenos Aires",
      lat: -34.6036844,
      lon: -58.3815591,
      country: "AR",
    },
  ],

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
  async (params, thunkAPI) => {
    try {
      const response = await weatherAxiosInstance.get("", {
        params,
      });

      return response.data;
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
    selectCity: (state, action) => {
      state.currentCityIndex = action.payload;
    },
    addCurrentLocation: (state, action) => {
      state.cityOptions[0].lat = action.payload.lat;
      state.cityOptions[0].lon = action.payload.lon;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        const { current, hourly, daily } = action.payload;

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
