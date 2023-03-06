import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Article, Chart } from '../../components';

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 4 }}>
            <Chart
              title='Traffic'
              labels={ ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'] }
              data={ [
                1034,
                1050,
                1040,
                1020,
                980,
                900,
                1010,
                1050,
                1110,
                1250,
                1500,
                1580,
                1700,
                1680,
                1650,
                1790,
                1890,
                1880,
                1830,
                1890,
                1940,
                1740,
                1760,
                1600
              ] }
            />
          </Paper>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Article image='https://picsum.photos/600/400?a' author='John' traffic={ 90 } url='http://example/article/1'/>
            <Article image='https://picsum.photos/600/400?b' author='George' traffic={ 88 } url='http://example/article/2' />
            <Article image='https://picsum.photos/600/400?c' author='George' traffic={ 66 } url='http://example/article/3' />
            <Article image='https://picsum.photos/600/400?d' author='Maria' traffic={ 62 } url='http://example/article/4' />
            <Article image='https://picsum.photos/600/400?e' author='Mike' traffic={ 48 } url='http://example/article/5' />
            <Article image='https://picsum.photos/600/400?f' author='Maria' traffic={ 40 } url='http://example/article/6' />
            <Article image='https://picsum.photos/600/400?g' author='John' traffic={ 22 } url='http://example/article/7' />
            <Article image='https://picsum.photos/600/400?h' author='Sarah' traffic={ 11 } url='http://example/article/8' />
            <Article image='https://picsum.photos/600/400?i' author='Sarah' traffic={ 8 } url='http://example/article/9' />
            <Article image='https://picsum.photos/600/400?j' author='George' traffic={ 1 } url='http://example/article/10' />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
