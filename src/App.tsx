import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BaseLayout } from './components';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BaseLayout><Outlet /></BaseLayout> }>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
