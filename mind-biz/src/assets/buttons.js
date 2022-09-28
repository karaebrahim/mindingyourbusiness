import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Link = styled.a`
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
      <Link href="services#service1">
        <span class="material-symbols-outlined">book</span>
        <h2>bookkeeping</h2>
      </Link>
      <Link href="services#service2">
        <span class="material-symbols-outlined">calculate</span>
        <h2>payroll reporting</h2>
      </Link>
      <Link href="services#service3">
        <span class="material-symbols-outlined">schedule</span>
        <h2>quickbooks</h2>
      </Link>
    </Container>
  );
}

export default Buttons;