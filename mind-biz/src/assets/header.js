import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import Navigation from './navigation';

const Top = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  width: 980px;

  img {
    float: left;
    width: 300px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const Para = styled.p`
  float: left;
  font-size: 90%;
  width: 295px;
  border-top: 3px solid ${props => props.theme.secondary};
  border-bottom: 3px solid ${props => props.theme.secondary};
  margin-top: 20px;
  padding: 15px 15px 15px 32px;

  .email {
    border-bottom: 1px solid ${props => props.theme.black};
  }
`;

const Header = () => {
  return (
    <Top className="clearfix">
      <Navigation />
      <a href="index.html"><img src={images.logo} alt="logo" /></a>
      <Para>
        <a href="tel:+12076197068">ph: 207-619-7068</a><br />
        <a href="mailto:maria@mindingyourbusinessinc.com" target="_blank" className="email" rel="noreferrer">maria@mindingyourbusinessinc.com</a>
      </Para>
    </Top>
  );
}

export default Header;
