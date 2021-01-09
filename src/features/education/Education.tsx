import { Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  isLoaded,
  isEmpty,
  useFirestoreConnect,
  OrderByOptions,
} from 'react-redux-firebase';
import React from 'react';
import dateformat from 'dateformat';
import { RootState } from '../../app/store';

export type IEducation = {
  degree: string;
  description: string;
  endDate: firebase.default.firestore.Timestamp;
  startDate: firebase.default.firestore.Timestamp;
  school: string;
  order: number;
}[];

const Education = () => {
  useFirestoreConnect([
    { collection: 'education', orderBy: ['order', 'asc'] as OrderByOptions },
  ]);

  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     [theme.breakpoints.up('sm')]: {
  //       padding: '6px 16px',
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       padding: '3px 8px',
  //     },
  //   },
  //   date: {
  //     marginTop: '12px',
  //   },
  // }));

  // const classes = useStyles();

  const education = useSelector<RootState>(
    (state) => state.firestore?.ordered?.education
  ) as IEducation;

  if (!isLoaded(education)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(education)) {
    return <div>Education List Is Empty</div>;
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h4">Education</Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        item
        xs={12}
        spacing={2}
      >
        <Grid item xs={6}>
          <Typography variant="h4" color="textSecondary">
            {education[0].school}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {`${dateformat(
              education[0].startDate.toDate(),
              'mmmm d, yyyy'
            )} - ${dateformat(education[0].endDate.toDate(), 'mmmm d, yyyy')}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary">
            {education[0].degree}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary">
            {education[0].description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Education;
