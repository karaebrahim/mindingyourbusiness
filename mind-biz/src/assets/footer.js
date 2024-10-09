import React from 'react';
import styled from 'styled-components';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  min-height: 40px;
  background-color: ${props => props.theme.primary};

  ${breakpointBelow.tabletPortrait} {
    display: flex;
    flex-direction: column;
  }

   p {
    float:left;
    font-size: 80%;
    padding-left: 20px;

    ${breakpointBelow.tabletPortrait} {
      margin: 0.5rem;
    }
   }

   a {
    color: ${props => props.theme.black}
   }
`;

const Span = styled.span`
  float: right;
  padding-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <p>minding your business, inc.</p>
      <Span><p>&copy; 2022 <a href="https://github.com/karaebrahim/mindingyourbusiness" target="_blank" rel="noreferrer">Kara Ebrahim</a></p></Span>
    </Container>
  );
}

export default Footer;
