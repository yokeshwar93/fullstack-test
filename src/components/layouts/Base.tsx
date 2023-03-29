import React, {createContext, useState} from 'react';
import Box from '@mui/material/Box';
import { AppBar } from '../app-bar';
import {SelectChangeEvent} from "@mui/material";
import {Outlet} from "react-router-dom";


export const FilterContext = createContext({
  selectedFilter: ''
});
export const BaseLayout = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('today');

  const handleFilterChange = (event : SelectChangeEvent) => {
    setSelectedFilter(event.target.value)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar title='Traffic' selectedFilter={selectedFilter} handleFilterChange={handleFilterChange}/>
      <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            marginTop: '64px'
          }}
        >
        <FilterContext.Provider value={{selectedFilter}}>
          <Outlet />
        </FilterContext.Provider>

      </Box>
    </Box>
  );
};
