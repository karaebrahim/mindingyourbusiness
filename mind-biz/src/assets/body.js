import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import Buttons from './buttons';
import Intro from './intro';
import Benefits from './benefits';

const Header = styled.div`
  margin-top: 20px;
   
  img {
    border-top: 15px solid ${props => props.theme.primary};
    border-bottom: 15px solid ${props => props.theme.primary};
  }
`;

const Body = () => {
  return (
    <>
      <Header id="header">
        <img src={images.bike} alt="" />
      </Header>
      <Buttons />
      <Intro />
      <Benefits />
    </>
  );
}

export default Body;
