import CycloneIcon from '@mui/icons-material/Cyclone';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = [
  {
    title: 'Clima',
    path: '/'
  },
  {
    title: 'Instrucciones',
    path: '/instructions'
  }
   ];

const NavBar = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component='nav' sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Typography
            variant='h5'
            component='div'
            sx={{ color: '#fff', display: 'flex', px: 2, gap: 2, fontWeight: 'bold' }}
            >
            <CycloneIcon fontSize={'large'} sx={{}}/>
            Ciudad Meteo
          </Typography>
          <Box sx={{ px: 10, display: 'flex', gap: 4 }}>
            {navItems.map((item) => (
              <Link key={item.title} to={item.path} style={{ color: '#fff', fontWeight: 'bold', }}>
                {item.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
