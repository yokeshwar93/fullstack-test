import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledAppBar = styled(MuiAppBar)`
  padding: 12px 30px;
  flex-direction: row;
`;

export const AppBar = () => {
  return (
    <StyledAppBar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, alignSelf: 'center' }}
      >
        Traffic
      </Typography>
    </StyledAppBar>
  );
};
