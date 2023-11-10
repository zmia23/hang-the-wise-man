import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Game from './views/Game';

function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter basename='/hang-the-wise-man'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
