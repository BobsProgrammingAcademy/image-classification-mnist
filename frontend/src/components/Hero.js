import React, { useEffect } from 'react';
import AOS from 'aos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';

import bgImage from '../assets/images/img1.jpg';
import HeroButtons from '../components/HeroButtons';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(
    theme.breakpoints.up('md'),
    { defaultMatches: true }
  );
  
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={10}
      backgroundColor={theme.palette.background.default}
    >
      <Grid container spacing={4} marginTop='20px'>
        <Grid item xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                variant='h1'
                color={theme.palette.text.primary}
                align='center'
                marginTop='30px'
              >
                Draw a Digit
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant='h4'
                color={theme.palette.text.secondary}
                align='center'
                paddingTop={3}
                paddingBottom={3}
                marginBottom='15px'
              >
                The App Will Tell You What Digit You Have Drawn
              </Typography>
            </Box>
            <HeroButtons />
          </Box>
        </Grid>
        <Grid 
          item 
          container 
          alignItems='center' 
          justifyContent='center' 
          xs={12} 
          md={6}
        >
          <Box
            sx={{
              height: { xs: 'auto', md: 1 },
              '& img': {
                objectFit: 'cover'
              },
              '& .lazy-load-image-loaded': {
                height: 1,
                width: 1
              }
            }}
          >
            <Box
              component={LazyLoadImage}
              src={bgImage}
              alt='Hero'
              effect='blur'
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
              borderRadius={2} 
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;