import { Card, Container, Grid, CardContent } from '@material-ui/core';
import React from 'react';
import Splash from '../../components/splash';
import About from '../about/About';
import Experience from '../experience';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Card raised>
            <Splash />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card raised title="About" style={{ textAlign: 'left' }}>
            <CardContent>
              <About />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card raised title="Experience" style={{ textAlign: 'left' }}>
            <CardContent>
              <Experience />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
