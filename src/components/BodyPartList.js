import React from 'react';
import { Grid } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const BodyPartList = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Grid container spacing={3} justifyContent="center">
    {data.map((item) => (
      <Grid
        item
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Grid>
    ))}
  </Grid>
);

export default BodyPartList;
