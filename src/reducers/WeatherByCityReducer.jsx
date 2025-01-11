import { createSlice } from "@reduxjs/toolkit";

const weatherByCitySlice = createSlice({
    name: 'weatherByCity',
    initialState: { data: null, loading: false, error: null},
    reducers: {
        setWeatherByCity(state, action) {
            const { data } = action.payload

            return { ...state, data, loading: false, error: null }
        },
        setWeatherLoading(state) {
            state.loading = false;
            state.error = null;
        },
        setWeatherError(state, action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { setWeatherByCity, setWeatherLoading, setWeatherError } = weatherByCitySlice.actions

export default weatherByCitySlice.reducer