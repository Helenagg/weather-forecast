import { configureStore } from "@reduxjs/toolkit";
import weatherByCityReducer from './reducers/WeatherByCityReducer'
import notificationReducer from "./reducers/notificationReducer";

export const store = configureStore({
    reducer: {
        weatherByCity: weatherByCityReducer,
        notification: notificationReducer,
    }
})