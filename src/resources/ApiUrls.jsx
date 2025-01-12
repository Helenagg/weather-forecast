export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const GET_WEATHER_BY_CITY = (cityName, apiKey) => `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`