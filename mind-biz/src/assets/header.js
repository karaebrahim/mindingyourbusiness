import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import Navigation from './navigation';

const Top = styled.div`
  background-color: ${props => props.theme.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    text-decoration: none;
    color: ${props => props.theme.white};
  }
`;

const Logo = styled.img`
  width: 250px;
`;

const Para = styled.p`
  font-size: 90%;
  padding-right: 2rem;

  .email {
    border-bottom: 1px solid ${props => props.theme.white};
  }
`;

const Header = () => {
  return (
    <Top>
      <a href="/"><Logo src={images.logo} alt="logo" /></a>
      <Navigation />
      <Para>
        <a href="tel:+12076197068">ph: 207-619-7068</a><br />
        <a href="mailto:maria@mindingyourbusinessinc.com" target="_blank" className="email" rel="noreferrer">maria@mindingyourbusinessinc.com</a>
      </Para>
    </Top>
  );
}

export default Header;
