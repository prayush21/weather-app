import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "@/features/weatherSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};
