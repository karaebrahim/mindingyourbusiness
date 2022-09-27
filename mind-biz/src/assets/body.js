import React from 'react';
import styled from 'styled-components';
import Buttons from './buttons';

const Header = styled.div`
  margin-top: 20px;
   
  img {
    border-top: 15px solid ${props => props.theme.primary};
    border-bottom: 15px solid ${props => props.theme.primary};
  }
`;

const Body = () => {
  return (
    <>
      <Header id="header">
        <img src="../img/iStock-bike.jpg" alt="" />
      </Header>
      <Buttons />
      <div id="welcome">
        <div class="box">
          <h1>welcome!</h1>
          <p>Minding Your Business, Inc. offers <a href="services.html">expert bookkeeping and payroll reporting services</a> for small businesses and individuals throughout Southern Maine. We provide customized services designed to fit your distinct needs. Whether you need one-time assistance setting up your accounting program or ongoing bookkeeping support, we have the skills to get the job done.</p>
          <p><a href="contact.html">Please contact me.</a> I would love to chat to see if I can assist with your bookkeeping needs.</p>
          <p>—Maria Ebrahim | President</p>
        </div>
      </div>

      <div id="benefits">
        <div class="box">
          <h1>benefits</h1>
          <ul>
            <li>Frees up your time so you can concentrate on growing and maintaining your business</li>
            <li>Provides back office bookkeeping staff without having to hire employees</li>
            <li>Delivers timely and efficient services thereby generating relevant information</li>
            <li>Produces year-end reports for tax preparation purposes</li>
            <li>Reduces audit and non-compliance issues with the Federal and State goverment agencies</li>
            <li>Relieves stress for the business owner knowing that your company is being thoroughly attended</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Body;
