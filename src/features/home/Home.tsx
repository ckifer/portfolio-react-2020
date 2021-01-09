import { Card, Container, Grid, CardContent } from '@material-ui/core';
import React from 'react';
import { Element } from 'react-scroll';
import Splash from '../../components/splash';
import About from '../about/About';
import Education from '../education';
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
          <Element name="About">
            <Card raised title="About" className="text-left">
              <CardContent>
                <About />
              </CardContent>
            </Card>
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="Experience">
            <Card raised title="Experience" className="text-left">
              <CardContent>
                <Experience />
              </CardContent>
            </Card>
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="Education">
            <Card raised title="Education" className="text-left">
              <CardContent>
                <Education />
              </CardContent>
            </Card>
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="Projects">
            <Card raised title="Projects" className="text-left">
              <CardContent></CardContent>
            </Card>
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="Skills">
            <Card raised title="Skills" className="text-left">
              <CardContent></CardContent>
            </Card>
          </Element>
        </Grid>
        <Grid item xs={12}>
          <Element name="Contact">
            <Card raised title="Education" className="text-left">
              <CardContent></CardContent>
            </Card>
          </Element>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
