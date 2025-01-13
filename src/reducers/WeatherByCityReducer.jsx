import { createSlice } from '@reduxjs/toolkit';
import WeatherService from '../services/WeatherServices';
import { toast } from './notificationReducer';
import { weatherText } from '../locale/es';

const weatherByCitySlice = createSlice({
  name: 'weatherByCity',
  initialState: { data: null, loading: false, error: null },
  reducers: {
    setWeatherByCity(state, action) {
      const { data } = action.payload;

      return { ...state, data, loading: false, error: null };
    },
    setWeatherLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setWeatherError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setWeatherByCity, setWeatherLoading, setWeatherError } =
  weatherByCitySlice.actions;

export const getWeatherByCity = (cityName, unit) => {
  return async (dispatch) => {
    try {
      dispatch(setWeatherLoading());
      const apiKey = 'e4cdbdef3ca74e57f737ca795b2e971d';
      const { data } = await WeatherService.getWeatherByCity(
        cityName,
        unit,
        apiKey
      );
      dispatch(setWeatherByCity({ data }));
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        dispatch(
          setWeatherError({ message: weatherText.NOT_FOUND, status: 404 })
        );
        dispatch(
          toast(
            weatherText.CITY_ERROR
          )
        );
      } else {
        dispatch(
          setWeatherError({
            message: error.message,
            status: error.response?.status,
          })
        );
        dispatch(toast(weatherText.ERROR));
      }
    }
  };
};

export default weatherByCitySlice.reducer;
