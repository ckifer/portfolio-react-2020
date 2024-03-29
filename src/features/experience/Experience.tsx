import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Room } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import {
  isLoaded,
  isEmpty,
  useFirestoreConnect,
  OrderByOptions,
} from 'react-redux-firebase';
import React from 'react';
import { RootState } from '../../app/store';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from '@material-ui/lab';
import dateformat from 'dateformat';
import {
  CustomTimelineContent,
  CustomTimeline,
} from '../../components/timelineContent';

export type IExperience = {
  description: string;
  employer: string;
  endDate: firebase.default.firestore.Timestamp;
  startDate: firebase.default.firestore.Timestamp;
  title: string;
  order: number;
  current?: boolean;
}[];

const Experience = () => {
  useFirestoreConnect([
    { collection: 'experience', orderBy: ['order', 'asc'] as OrderByOptions },
  ]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      [theme.breakpoints.up('sm')]: {
        padding: '6px 16px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '3px 8px',
      },
    },
    date: {
      marginTop: '12px',
    },
  }));

  const classes = useStyles();

  const experience = useSelector<RootState>(
    (state) => state.firestore?.ordered?.experience
  ) as IExperience;

  if (!isLoaded(experience)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(experience)) {
    return <div>Experience list is empty</div>;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Experience</Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        item
        xs={12}
        spacing={2}
        justifyContent="center"
      >
        <CustomTimeline align="alternate">
          {experience &&
            Object.keys(experience).map((key, id) => {
              const currentItem = experience[id];
              return (
                <TimelineItem key={`timeline-item-${id}`}>
                  <TimelineOppositeContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.date}
                    >
                      {`${dateformat(
                        currentItem.startDate?.toDate(),
                        'mmmm d, yyyy'
                      )} - ${
                        currentItem.current
                          ? 'Present'
                          : dateformat(
                              currentItem.endDate?.toDate(),
                              'mmmm d, yyyy'
                            )
                      }`}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Room />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <CustomTimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        {currentItem.employer}
                      </Typography>
                      <Typography color="textSecondary">
                        {currentItem.title}
                      </Typography>
                      <Typography>{currentItem.description}</Typography>
                    </Paper>
                  </CustomTimelineContent>
                </TimelineItem>
              );
            })}
        </CustomTimeline>
      </Grid>
    </Grid>
  );
};

export default Experience;
