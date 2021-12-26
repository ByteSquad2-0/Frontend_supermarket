import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
// import Login from './Pages/login';
// import Register from './Pages/register';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Items from './Pages/Items';
import Cart from './Pages/Cart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(129,140,248)',
        dark: 'rgb(109,120,228)',
        contrastText: 'white',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}
        <Route path='/Store' element={<Store />} />
        <Route path='/inventory' element={<Items />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
