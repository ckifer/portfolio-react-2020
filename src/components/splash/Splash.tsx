import { Grid, Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import styles from './Splash.module.scss';
import codePic from '../../assets/codePic.jpg';

const Splash = () => {
  const classes = makeStyles((theme) => {
    return {
      after: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 112px)',
        color: '#fff',
        display: 'block',
        background:
          theme.palette.type === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(0, 0, 0, 0.6)',
      },
    };
  })();
  return (
    <div className={styles.imageContainer}>
      <img className="h-100 w-100" src={codePic} alt="Code" />
      <div className={classes.after}>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          alignContent="center"
          className="h-100 w-100"
        >
          <Grid item xs={12}>
            <Typography variant="h1" className={styles.header}>
              Coltin Kifer
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" className={styles.subHeader}>
              Software Developer
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '16px' }}>
            <Button
              href="https://drive.google.com/file/d/1rwV-G0CitpfzOygqH4t3QYaHrDSMAr7R/view?usp=sharing"
              target="_blank"
              color="secondary"
              variant="contained"
            >
              Open Resume
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Splash;
