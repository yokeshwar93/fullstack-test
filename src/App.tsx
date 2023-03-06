import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BaseLayout } from './components';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Home, Detail } from './routes';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BaseLayout><Outlet /></BaseLayout> }>
            <Route index element={<Home /> } />
            <Route path='/detail' element={<Detail /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
