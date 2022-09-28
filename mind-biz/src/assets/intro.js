import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 865px;
  padding: 20px 50px 20px 65px;
`;

const Wrapper = styled.div`
  width: 810px;
  margin-bottom: 20px;
   
  a {
    color: ${props => props.theme.secondary};
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Intro = () => {
  return (
    <Container>
      <Wrapper className="box">
        <h1>welcome!</h1>
        <p>Minding Your Business, Inc. offers <a href="services.html">expert bookkeeping and payroll reporting services</a> for small businesses and individuals throughout Southern Maine. We provide customized services designed to fit your distinct needs. Whether you need one-time assistance setting up your accounting program or ongoing bookkeeping support, we have the skills to get the job done.</p>
        <p><a href="contact.html">Please contact me.</a> I would love to chat to see if I can assist with your bookkeeping needs.</p>
        <p>—Maria Ebrahim | President</p>
      </Wrapper>
    </Container>
  );
}

export default Intro;