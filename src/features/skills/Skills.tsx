import { Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  isLoaded,
  isEmpty,
  useFirestoreConnect,
  OrderByOptions,
} from 'react-redux-firebase';
import { RootState } from '../../app/store';

export interface ISkills {
  order: number;
  skill: string;
}

const Skills = () => {
  useFirestoreConnect([
    { collection: 'skills', orderBy: ['order', 'asc'] as OrderByOptions },
  ]);

  const skills = useSelector<RootState>(
    (state) => state.firestore?.ordered?.skills
  ) as ISkills[];

  if (!isLoaded(skills)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(skills)) {
    return <div>Skills list is empty</div>;
  }

  const skillCards =
    skills &&
    skills.map((skill, id) => {
      return (
        <Grid key={`skill-item-${id}`} item>
          <Chip label={skill.skill} />
        </Grid>
      );
    });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Skills</Typography>
      </Grid>
      {skillCards}
    </Grid>
  );
};

export default Skills;
