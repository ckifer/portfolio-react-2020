import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase';
import React from 'react';
import { RootState } from '../../app/store';

export type IAbout = {
  paragraph?: string;
}[];

const About = () => {
  useFirestoreConnect([{ collection: 'about' }]);

  const about = useSelector<RootState>(
    (state) => state.firestore?.ordered?.about
  ) as IAbout;

  if (!isLoaded(about)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(about)) {
    return <div>About is Empty</div>;
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4">About Me</Typography>
      </Grid>
      <Grid item xs={12}>
        {about &&
          Object.keys(about).map((key, id) => (
            <div key={key} id={id.toString()}>
              <Typography>{about[id].paragraph}</Typography>
            </div>
          ))}
      </Grid>
    </>
  );
};

export default About;
