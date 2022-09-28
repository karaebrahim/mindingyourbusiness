import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  background-color: ${props => props.theme.primary};
   
   p {
    float:left;
    font-size: 80%;
    padding-left: 20px;
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
      <p>minding your business, inc. | <a href="https://goo.gl/maps/SWM5zowXtBwCDS4P6" target="_blank" rel="noreferrer">7 tee drive, portland me 04103</a></p>
      <Span><p>&copy; 2022 Kara Ebrahim</p></Span>
    </Container>
  );
}

export default Footer;
