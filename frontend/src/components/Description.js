import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit as EditIcon } from '@fortawesome/free-regular-svg-icons';
import { faDownload as DownloadIcon } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as ShareSquareIcon } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode as LaptopCodeIcon } from '@fortawesome/free-solid-svg-icons';
library.add(EditIcon, DownloadIcon, ShareSquareIcon, LaptopCodeIcon);

import DescriptionItem from './DescriptionItem';

const Description = () => {
  const theme = useTheme();
  
  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        paddingTop={4}
        backgroundColor={theme.palette.background.default}
      >
        <Container
          maxWidth='md'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            px: { md: '15px !important' } 
          }}
        >
          <Typography
            variant='h1'
            color={theme.palette.text.primary}
            align='center'
            marginTop='30px'
            data-aos='fade-up'
          >
            How Does It Work?
          </Typography>
          <Typography
            variant='h4'
            color={theme.palette.text.secondary}
            align='center'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
            data-aos='fade-up'
          >
            A step-by-step guide on how to use the app
          </Typography>
          <Grid container spacing={4} data-aos='fade-up'>
            <DescriptionItem 
              color='rgb(31, 102, 239)' 
              icon={EditIcon}
              title='Draw a Digit'
              subtitle='First, use your mouse to draw a single digit between 0 and 9 in the provided drawing editor in the browser.'
            />
            <DescriptionItem 
              color={theme.palette.error.dark} 
              icon={ShareSquareIcon}
              title='Send the Drawing for Classification'
              subtitle='Once you are happy with your drawing, send it to the machine learning model for classification by pressing the Send Drawing button. Press the Reset Editor button to clean the editor to draw another digit.'
            />           
            <DescriptionItem 
              color={theme.palette.primary.main} 
              icon={LaptopCodeIcon}
              title='Get the Classification Result'
              subtitle='Once you have sent your drawing to the machine learning model, the model classifies your drawing as one of the digits between 0 and 9. The result of the classification is then printed on the screen.'
            />
            <DescriptionItem 
              color={theme.palette.warning.dark}
              icon={DownloadIcon}
              title='Download Your Drawing'
              subtitle='You can download your drawing by pressing the Download button.'
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;