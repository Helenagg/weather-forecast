import { createSlice } from "@reduxjs/toolkit";
import WeatherService from '../services/WeatherServices';
import { toast } from "./notificationReducer";

//TODO: Notification for error

const weatherByCitySlice = createSlice({
    name: 'weatherByCity',
    initialState: { data: null, loading: false, error: null},
    reducers: {
        setWeatherByCity(state, action) {
            const { data } = action.payload

            return { ...state, data, loading: false, error: null }
        },
        setWeatherLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setWeatherError(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { setWeatherByCity, setWeatherLoading, setWeatherError } = weatherByCitySlice.actions

export const getWeatherByCity = (cityName, unit, apiKey) => {
    return async (dispatch) => {
        try {
            dispatch(setWeatherLoading());

            const { data } = await WeatherService.getWeatherByCity(cityName, unit, apiKey)
            dispatch(setWeatherByCity({ data }))
        } catch (error) {
            console.error(error);
            dispatch(setWeatherError({ message: error.message, status: error.response?.error}))
            dispatch(toast('No se ha podido encontrar el clima para la ciudad seleccionada'))
        }
    }
}

export default weatherByCitySlice.reducer