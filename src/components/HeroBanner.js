import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography color="#3f50b5" fontWeight="600" fontSize="32px" sx={{ mb: '32px' }}>
      Exercise Database & Library
    </Typography>
    <Typography fontSize="26px" lineHeight="35px">
      Check out the most effective <br /> exercises personalized to you
    </Typography>
    <Stack mb="300px">
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#3f50b5',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
