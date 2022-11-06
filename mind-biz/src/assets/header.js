import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { images } from '../images';
import Navigation from './navigation';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85rem;
  margin: 0 auto;

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
    <Container>
      <Top>
        <Link to="/"><Logo src={images.logo} alt="logo" /></Link>
        <Navigation />
        <Para>
          <a href="tel:+12076197068">ph: 207-619-7068</a><br />
          <a href="mailto:maria@mindingyourbusinessinc.com" target="_blank" className="email" rel="noreferrer">maria@mindingyourbusinessinc.com</a>
        </Para>
      </Top>
    </Container>
  );
}

export default Header;
