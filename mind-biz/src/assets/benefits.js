import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 865px;
  padding: 20px 50px 20px 65px;
`;

const Box = styled.div`
  width: 810px;
  background-color: ${props => props.theme.gray};
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;

  ul {
    padding-left:20px;
  }
`;

const Benefits = () => {
  return (
    <Container>
      <Box>
        <h1>benefits</h1>
        <ul>
          <li>Frees up your time so you can concentrate on growing and maintaining your business</li>
          <li>Provides back office bookkeeping staff without having to hire employees</li>
          <li>Delivers timely and efficient services thereby generating relevant information</li>
          <li>Produces year-end reports for tax preparation purposes</li>
          <li>Reduces audit and non-compliance issues with the Federal and State goverment agencies</li>
          <li>Relieves stress for the business owner knowing that your company is being thoroughly attended</li>
        </ul>
      </Box>
    </Container>
  );
}

export default Benefits;