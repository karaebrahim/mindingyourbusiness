import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  ${breakpointBelow.tabletPortrait} {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.black};
  width: 150px;
  height: 120px;
  text-align: center;
  margin: 40px;
  padding: 20px;
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  border-radius: 3px;

  ${breakpointBelow.tabletPortrait} {
    margin: 20px;
  }
   
  &:hover{
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondary};
  }
   
  h2 {
    font-size: 1rem;
  }

  span {
    font-size: 4rem;
  }
`;

const Buttons = () => {
  return (
    <Container>
      <ButtonLink to="/services#service1">
        <span className="material-symbols-outlined">book</span>
        <h2>bookkeeping</h2>
      </ButtonLink>
      <ButtonLink to="/services#service2">
        <span className="material-symbols-outlined">calculate</span>
        <h2>payroll reporting</h2>
      </ButtonLink>
      <ButtonLink to="/services#service3">
        <span className="material-symbols-outlined">schedule</span>
        <h2>quickbooks</h2>
      </ButtonLink>
    </Container>
  );
}

export default Buttons;