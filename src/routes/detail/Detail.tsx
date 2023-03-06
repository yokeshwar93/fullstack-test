import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Chart } from '../../components';
import styled from 'styled-components';

const Media = styled.img`
  width: 100px;
  margin-left: auto;
`;

export const Detail = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'row', mb: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography component="div" variant="h5">
                http://example.com/article
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                George
              </Typography>
            </Box>
            <Media src='https://picsum.photos/600/400' />
          </Paper>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 4 }}>
          <Chart
              title='Traffic'
              labels={ ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'] }
              data={ [
                400,
                390,
                320,
                290,
                270,
                200,
                150,
                148,
                132,
                149,
                190,
                240,
                280,
                285,
                270,
                320,
                357,
                360,
                380,
                450,
                470,
                500,
                430,
                440
              ] }
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
