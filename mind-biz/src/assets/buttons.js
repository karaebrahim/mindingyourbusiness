import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:810px;
  margin:0 auto;
   
  h2 {
    font-size: 1.25em;
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.black};
   
  &:hover{
    color: ${props => props.theme.white};
  }
`;

const Buttons = () => {
  return (
    <Container id="buttons" className="clearfix">
      <Link href="services.html#service1" className="bookkeeping">
        <h2>bookkeeping</h2>
      </Link>
      <Link href="services.html#service2" className="payroll">
        <h2>payroll reporting</h2>
      </Link>
      <Link href="services.html#service3" className="quickbooks">
        <h2>quickbooks</h2>
      </Link>
    </Container>
  );
}

export default Buttons;