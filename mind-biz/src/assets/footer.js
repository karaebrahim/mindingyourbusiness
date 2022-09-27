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
`;

const Span = styled.span`
  float: right;
  padding-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <p>minding your business, inc. &emsp; 7 tee drive &emsp; portland, me 04103</p>
      <Span><p>&copy; 2022 Kara Ebrahim</p></Span>
    </Container>
  );
}

export default Footer;
