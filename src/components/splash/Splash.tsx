import { Grid, Button, Typography } from '@material-ui/core';
import React from 'react';
import styles from './Splash.module.scss';

const Splash = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      className={`h-100 w-100 ${styles.imageContainer}`}
    >
      <Grid item xs={12} style={{ marginTop: '12px' }}>
        <Typography variant="h1" className={styles.header}>
          Coltin Kifer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={styles.subHeader}>
          Software Developer
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: '16px', marginBottom: '22px' }}>
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
  );
};

export default Splash;
