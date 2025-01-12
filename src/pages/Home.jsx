import { Box, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [city, setCity] = useState('')
console.log('city', city);
  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <Box 
      display='flex'
      justifyContent='center'
      alignItems='center'
      marginTop={4}
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
    </Box>
  )
}

export default Home