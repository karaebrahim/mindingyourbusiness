import React from 'react';
import { images } from '../images';
import PageHeader from './pageheader';
import Buttons from './buttons';
import Intro from './intro';
import Benefits from './benefits';

const Body = () => {
  return (
    <>
      <PageHeader image={images.bike} />
      <Buttons />
      <Intro />
      <Benefits />
    </>
  );
}

export default Body;
