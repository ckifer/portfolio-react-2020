import { withStyles } from '@material-ui/core';
import { TimelineContent, Timeline } from '@material-ui/lab';

const CustomTimelineContent = withStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.up('sm')]: {
        padding: '6px 16px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '3px 8px',
        // padding: '3px 8px',
      },
    },
    alignRight: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0px',
      },
    },
  };
})(TimelineContent);

const CustomTimeline = withStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.down('sm')]: {
        padding: '0px',
      },
    },
  };
})(Timeline);

export { CustomTimelineContent, CustomTimeline };
