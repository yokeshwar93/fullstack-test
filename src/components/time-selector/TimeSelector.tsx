import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';

const StyledSelect = styled(Select)`
  &, svg {
    color: white;
  }

  fieldset {
    border-color: white;
  }
`;

export const TimeSelector = () => {
  return (
    <StyledSelect
      value='today'
      label='Time'
    >
      <MenuItem value='today'>Today</MenuItem>
      <MenuItem value='yesterday'>Yesterday</MenuItem>
      <MenuItem value='7d'>Last 7 days</MenuItem>
      <MenuItem value='1m'>This Month</MenuItem>
    </StyledSelect>
  );
}
