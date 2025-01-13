import { configureStore } from "@reduxjs/toolkit";
import WeatherByCityReducer from './reducers/WeatherByCityReducer'
import notificationReducer from "./reducers/notificationReducer";

export const store = configureStore({
    reducer: {
        weatherByCity: WeatherByCityReducer,
        notification: notificationReducer,
    }
})