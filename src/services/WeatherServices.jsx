import MyAxiosInstance from "utils/MyAxiosInstance";
import { GET_WEATHER_BY_CITY } from "../resources/ApiUrls";

const getWeatherByCity = (cityName, apiKey) => MyAxiosInstance.get(GET_WEATHER_BY_CITY(cityName, apiKey));

const weatherConst = { getWeatherByCity };

export default weatherConst;