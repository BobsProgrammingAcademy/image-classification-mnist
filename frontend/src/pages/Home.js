import 'regenerator-runtime';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import CustomDivider from '../components/CustomDivider';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <CustomDivider />
      <Description />
      <Spacer sx={{ pt: 20}} />
    </>
  );
};

export default Home;