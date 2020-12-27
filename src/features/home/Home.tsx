import { Card, Container, Grid } from '@material-ui/core';
import React from 'react';
import Splash from '../../components/splash';
import About from '../about/About';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <Card>
            <Splash />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <About />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
