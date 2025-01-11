import { createTheme } from '@mui/material';

const useCustomTheme = createTheme({
  palette: {
    primary: {
      main: '#87CEEB',
      dark: '#00509E',
      light: '#B3E5FC',
    },
    secondary: {
      main: '#FFC107',
      dark: '#FF7043',
    },
    neutral: {
      gray: '#607D8B',
      'gray-light': '#ECEFF1',
    },
  },
});

export default useCustomTheme;
