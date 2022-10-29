import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import BodyPartList from './BodyPartList';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = targetMuscleExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{' '}
        <span style={{ color: '#3f50b5', textTransform: 'capitalize' }}>
          Target Muscle
        </span>{' '}
        exercises
      </Typography>
      <Box sx={{ p: 2, position: 'relative', flexGrow: 1 }}>
        {currentExercises.length !== 0 ? (
          <BodyPartList data={currentExercises} />
        ) : (
          <Loader />
        )}
      </Box>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {targetMuscleExercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(targetMuscleExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
