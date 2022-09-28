import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 865px;
  padding: 20px 50px 20px 65px;
`;

const Wrapper = styled.div`
  width: 810px;
  margin-bottom: 20px;

  ul {
    padding-left:20px;
  }
`;

const Benefits = () => {
  return (
    <Container>
      <Wrapper className="box">
        <h1>benefits</h1>
        <ul>
          <li>Frees up your time so you can concentrate on growing and maintaining your business</li>
          <li>Provides back office bookkeeping staff without having to hire employees</li>
          <li>Delivers timely and efficient services thereby generating relevant information</li>
          <li>Produces year-end reports for tax preparation purposes</li>
          <li>Reduces audit and non-compliance issues with the Federal and State goverment agencies</li>
          <li>Relieves stress for the business owner knowing that your company is being thoroughly attended</li>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Benefits;