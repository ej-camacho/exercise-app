import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#757ce8">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      pt="40px"
      mt="40px"
      textAlign="center"
      pb="40px"
    >
      Made by Erick Camacho & Luis Marquez
    </Typography>
  </Box>
);

export default Footer;
