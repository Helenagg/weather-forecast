import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { WiHumidity } from 'react-icons/wi';
import { GiPressureCooker } from 'react-icons/gi';
import WaterSharpIcon from '@mui/icons-material/WaterSharp';
import AirSharpIcon from '@mui/icons-material/AirSharp';
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { TbTemperatureCelsius } from 'react-icons/tb';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

const WeatherPaper = ({ data, unit, toggleUnit }) => {
  return (
    <>
      <Box sx={{ px: 10 }}>
        <Paper
          elevation={3}
          sx={{
            boxShadow: (theme) => `0px 4px 10px ${theme.palette.primary.light}`,
            mt: 2,
            p: 2,
          }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <TextField
              variant='standard'
              value={data.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant='contained' sx={{ mx: 2, bgcolor: '#000' }} onClick>
              <FavoriteSharpIcon sx={{ color: 'alert.main'}}/>
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box
              component='img'
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              sx={{
                width: 100,
                height: 100,
              }}
            />
          </Box>
          <Box
            component='section'
            sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
            <Typography
              variant='h2'
              sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
              <ThermostatIcon sx={{ fontSize: 50, pt: 1 }} />
              {data.main.temp}
              {unit === 'metric' ? (
                <TbTemperatureCelsius />
              ) : (
                <TbTemperatureFahrenheit />
              )}
            </Typography>
            <Button
              variant='contained'
              sx={{ mx: 2, my: 2 }}
              onClick={toggleUnit}>
              Cambiar a: {unit === 'metric' ? '\u00b0F' : '\u00b0C'}
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-end',
                ml: 'auto',
              }}>
              <Typography variant='body' sx={{ color: 'primary.dark' }}>
                Temperatura Máxima: {data.main.temp_max}
              </Typography>
              <Typography variant='body' sx={{ color: 'primary.dark' }}>
                Temperatura Mínima: {data.main.temp_min}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', mt: 1 }}>
            <WiHumidity size={40} />
            <Typography variant='body' sx={{ mt: 1 }}>
              Humedad: {data.main.humidity}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', mt: 2, mb: 1, mx: 1 }}>
            <GiPressureCooker size={25} />
            <Typography variant='body' sx={{}}>
              Presión: {data.main.pressure}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', mt: 2, mb: 1, mx: 1 }}>
            <WaterSharpIcon />
            <Typography variant='body' sx={{}}>
              Nivel del mar: {data.main.sea_level}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', mt: 2, mx: 1 }}>
            <AirSharpIcon />
            <Typography variant='body' sx={{}}>
              Velocidad del viento: {data.wind.speed}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default WeatherPaper;
