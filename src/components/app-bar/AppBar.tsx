import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FilterSelect from "../filter-select/FilterSelect";

const StyledAppBar = styled(MuiAppBar)`
  padding: 12px 30px;
  flex-direction: row;
`;

export type AppBarProps = {
  title: string;
  selectedFilter: string;

  handleFilterChange: (event : any) => void;
};

export const AppBar = ({ title, selectedFilter, handleFilterChange }: AppBarProps) => {
  return (
    <StyledAppBar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, alignSelf: 'center' }}
      >
        { title }
      </Typography>
      <FilterSelect selectedFilter={selectedFilter} handleFilterChange={handleFilterChange } />
    </StyledAppBar>
  );
};
