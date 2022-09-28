import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import PageHeader from './pageheader';
import Sidebar from './sidebar';

const Container = styled.div`
  width: 560px;
  float: left;
  padding: 20px;
  padding-right: 30px;
  border-right: 10px solid ${props => props.theme.lightGray};
  line-height: 1.5;
  min-height: 1050px;

  h2 {
    color: ${props => props.theme.primary};
  }
`;

const Service = styled.div`
  margin-bottom: 40px;
   
  img {
    float: left;
    padding-right: 10px;
  }
`;

const Header = styled.div`
  display: flex;

  span {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondary};
    margin-right: 0.5rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-radius: 3px;
  }
`;

const Services = () => {
  return (
    <>
      <PageHeader image={images.garden} />
      <div className="clearfix">
        <Container>
          <Service>
            <img src={images.tea} alt="" />
            <div id="service1">
              <Header>
                <span class="material-symbols-outlined">book</span>
                <h1>bookkeeping</h1>
              </Header>
              <p>Our office works with small- to medium-sized service-related companies, startups, entrepreneurs, solopreneurs, retail operations, and/or home-based enterprises. Our offerings include full-cycle to partial-service bookkeeping, depending on your needs. One-time or year-end projects are always welcome. We work closely with your tax accountant in order that your records are properly positioned for tax preparation purposes, which results in timely filing of all government, payroll, federal, and state required forms.</p>
            </div>
          </Service>
          <Service>
            <img src={images.tape} alt="" />
            <div id="service2">
              <Header>
                <span class="material-symbols-outlined">calculate</span>
                <h1>payroll</h1>
              </Header>
              <p>We support many local and national payroll companies, confirming the accuracy of payroll runs, quarterly filings, and annual forms.  All payroll transactions are accurately entered into our bookkeeping software so year-end totals reconcile with payroll reports.</p>
            </div>
          </Service>
          <Service>
            <img src={images.computer} alt="" />
            <div id="service3">
              <Header>
                <span class="material-symbols-outlined">schedule</span>
                <h1>quickbooks</h1>
              </Header>
              <p>QuickBooks training and general all-around record-keeping education is certainly available to all of our clients. We can guide you as you navigate the bookkeeping software, elevating your knowledge to a level of self-application. We are also available on a consulting basis, ready to answer your questions or help with your bookkeeping issues. Training can be customized to your level of knowledge of the accounting cycle. It is most rewarding when our clients slowly begin to master their own business accounting needs.</p>
            </div>
          </Service>
        </Container>
        <Sidebar />
      </div>
    </>
  );
}

export default Services;
