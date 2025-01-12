import { Box, Button, InputAdornment, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCity } from "../reducers/WeatherByCityReducer";

const Home = () => {
  const [city, setCity] = useState('')
  const { data, loading, error } = useSelector(({ weatherByCity }) => weatherByCity)
  console.log('data', data);

  const dispatch = useDispatch()
console.log('city', city);
  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const apiKey = 'e4cdbdef3ca74e57f737ca795b2e971d';

  const handleSearch = () => {
    if (city) {
      dispatch(getWeatherByCity(city, apiKey))
    }
  }

  return (
    <Box 
      display='flex'
      justifyContent='center'
      alignItems='center'
      marginTop={4}
      gap={2}
    >
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
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
    <Button
        variant="contained" 
        color="primary" 
        sx={{ p: 1.5}}
        onClick={handleSearch}
        startIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </Box>
  )
}

export default Home