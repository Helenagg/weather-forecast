import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByCity } from '../reducers/WeatherByCityReducer';
import WeatherPaper from '../components/WeatherPaper';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Favorites from '../components/Favorites';
import { useFavorites } from '../context/FavoritesContext';
import { buttonText, weatherText } from '../locale/es';

const Home = () => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const { data, loading, error } = useSelector(
    ({ weatherByCity }) => weatherByCity
  );
  const { addFavorite } = useFavorites();

  const dispatch = useDispatch();
  console.log('city', city);
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      dispatch(getWeatherByCity(city, unit));
    }
  };
  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
    dispatch(getWeatherByCity(city, newUnit, apiKey));
  };

  const handleAddFavorite = () => {
    addFavorite(data?.name);
  };

  if (loading) return <div>{weatherText.LOADING}</div>;

  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginTop={4}
        gap={2}>
        <TextField
          label={weatherText.CITY_SEARCH}
          variant='outlined'
          value={city}
          onChange={handleChange}
          placeholder={weatherText.INDICATE}
          fullWidth
          sx={{
            width: 600,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AddLocationAltIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='contained'
          color='primary'
          sx={{ p: 1.5 }}
          onClick={handleSearch}
          startIcon={<SearchIcon />}>
          {buttonText.SEARCH}
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {data && (
          <>
            <Box>
              <WeatherPaper
                data={data}
                unit={unit}
                toggleUnit={toggleUnit}
                onAddFavorite={handleAddFavorite}
              />
            </Box>
            <Favorites />
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
