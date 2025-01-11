import { configureStore } from "@reduxjs/toolkit";
import WeatherByCityReducer from "./reducers/WeatherByCityReducer";

export const store = configureStore({
    reducer: {
        weatherByCity: WeatherByCityReducer,
    }
})