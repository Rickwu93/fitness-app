import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p="20px">
        <Typography variant="h4" mb="33px">
            Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
        </Typography>
    </Box>
    )
}

export default ExerciseVideos