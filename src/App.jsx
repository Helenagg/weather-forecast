import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import useCustomTheme from './resources/useCustomTheme';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <ThemeProvider theme={useCustomTheme}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
