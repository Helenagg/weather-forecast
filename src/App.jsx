import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import useCustomTheme from './resources/useCustomTheme';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import { FavoritesProvider } from './context/FavoritesContext';
import Footer from './components/Footer';
import Instructions from './components/Instructions';

function App() {
  return (
    <>
      <ThemeProvider theme={useCustomTheme}>
        <FavoritesProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/instructions' element={<Instructions />} />
          </Routes>
          <Notification />
          <Footer />
        </FavoritesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
