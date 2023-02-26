import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { green } from '@mui/material/colors';

const EditorHeader = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(
    theme.breakpoints.up('md'),
    { defaultMatches: true }
  );
  
  return (
    <>
      <Typography
        variant='h2'
        color={theme.palette.text.primary}
      >
        Drawing Editor
      </Typography>
      <Box paddingTop={2}>
        <Typography
          variant='h5'
          color={theme.palette.text.secondary}
        >
          Draw a digit 
          {' '}
          <span style={{ color: green[600] }}>
            between 0 and 9
          </span>
          {' '}
          in the window below
        </Typography>
      </Box>
    </>
  );
};

export default EditorHeader;