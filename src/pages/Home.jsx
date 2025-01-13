import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByCity } from '../reducers/WeatherByCityReducer';
import WeatherPaper from '../components/WeatherPaper';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Home = () => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const { data, loading, error } = useSelector(
    ({ weatherByCity }) => weatherByCity
  );
  console.log('data', data);
  console.log('unit', unit);

  const dispatch = useDispatch();
  console.log('city', city);
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const apiKey = 'e4cdbdef3ca74e57f737ca795b2e971d';

  const handleSearch = () => {
    if (city) {
      dispatch(getWeatherByCity(city, unit, apiKey));
    }
  };
  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
    dispatch(getWeatherByCity(city, newUnit, apiKey));
  };

  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginTop={4}
        gap={2}>
        <TextField
          label='Buscar ciudad'
          variant='outlined'
          value={city}
          onChange={handleChange}
          placeholder='Indica la ciudad que deseas buscar'
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
          Buscar
        </Button>
      </Box>
      {data && (
      <Box>
        <WeatherPaper data={data} unit={unit} toggleUnit={toggleUnit}/>
      </Box>

      )}
    </>
  );
};

export default Home;
