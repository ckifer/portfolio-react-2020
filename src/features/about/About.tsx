import { Grid } from '@material-ui/core';
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
    return <div>Todos List Is Empty</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item>
        {Object.keys(about).map((key, id) => (
          <p key={key} id={id.toString()}>
            {about[id].paragraph}
          </p>
        ))}
      </Grid>
    </Grid>
  );
};

export default About;
