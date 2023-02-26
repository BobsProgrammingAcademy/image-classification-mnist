import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import ResetIcon from '@mui/icons-material/RotateLeft';
import SendIcon from '@mui/icons-material/SendToMobile';
import DownloadIcon from '@mui/icons-material/Download';

const EditorButtons = ({ submitOnClick, resetOnClick, downloadOnClick }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(
    theme.breakpoints.up('md'),
    { defaultMatches: true }
  );
  
  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems='flex-start'
        justifyContent='flex-start'
        marginTop={4}
      >
        <Button
          variant='contained'
          color='primary'
          size='medium'
          startIcon={<SendIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          onClick={submitOnClick}
          sx={{
            padding: '14px 30px',
            marginRight: '15px',
            fontSize: '18px',
            border: '2px solid ' + theme.palette.primary.main,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '2px solid ' + theme.palette.primary.main
            }
          }}
        >
          Send Drawing
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            variant='outlined'
            color='primary'
            size='medium'
            startIcon={<ResetIcon />}
            fullWidth={isMd ? false : true}
            disableElevation={true}
            onClick={resetOnClick}
            sx={{
              padding: '14px 30px',
              marginRight: '15px',
              fontSize: '18px',
              border: '2px solid ' + theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
                border: '2px solid ' + theme.palette.primary.main
              }
            }}
          >
            Reset Editor
          </Button>
        </Box>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            variant='outlined'
            size='medium'
            color='secondary'
            startIcon={<DownloadIcon />}
            fullWidth={isMd ? false : true}
            disableElevation={true}
            onClick={downloadOnClick}
            sx={{
              padding: '14px 30px',
              marginRight: '15px',
              fontSize: '18px',
              border: '2px solid ' + theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.secondary,
                border: '2px solid ' + theme.palette.secondary.main
              }
            }}
          >
            Download
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditorButtons;