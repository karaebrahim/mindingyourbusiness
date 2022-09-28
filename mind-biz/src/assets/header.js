import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import Navigation from './navigation';
import { breakpointBelow } from '../config/breakpoints';

const Top = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  ${breakpointBelow.tablet} {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
  }
`;

const Logo = styled.img`
  width: 200px;
`;

const Para = styled.p`
  font-size: 90%;
  padding-right: 2rem;

  ${breakpointBelow.tablet} {
    text-align: center;
    padding-right: 0;
  }

  .email {
    border-bottom: 1px solid ${props => props.theme.secondary};
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
