import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import Sidebar from './sidebar';

const Header = styled.div`
  margin-top: 20px;
   
  img {
    border-top: 15px solid ${props => props.theme.primary};
    border-bottom: 15px solid ${props => props.theme.primary};
  }
`;

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

const Biography = styled.div`
  margin-top:5px;
   
  img {
    float: left;
    margin-right: 20px;
  }
`;

const Statement = styled.div`
  width: 520px;
  background-color: ${props => props.theme.gray};
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .6);
  margin-top: 30px;
  margin-bottom: 20px;
   
  ul {
    padding-left: 20px;
  }
`;

const About = () => {
  return (
    <>
      <Header id="header">
        <img src={images.city} alt="" />
      </Header>
      <div className="clearfix">
        <Container>
          <Biography>
            <img src={images.headshot} alt="Maria Ebrahim headshot" />
            <h1>about maria</h1>
            <p><b>Maria Ebrahim</b> has been working with bookkeeping, payroll, and tax-preparation clients for almost 30 years. With a Bachelor’s Degree in Nursing from Villanova University and an Associate’s Degree in Accounting from University of Southern Maine, she has been addressing, organizing, and providing solutions for business owners' varied financial needs, no matter the required level of assistance.</p>
            <p>Maria supports QuickBooks Desktop, QuickBooks Online, Sage 50, and Procore Construction Accounting software. She enjoys relationships with many area accountants, providing tandem services to mutual clients. She is a member in good standing of the American Institute of Professional Bookkeepers.</p>
            <p>She and her husband, Kurt, have four adult children and five grandchildren and presently reside in West Falmouth. She has been a member of IAABO Board #21 since 1996, working every winter as a Varsity basketball official in the Greater Portland area.</p>
          </Biography>

          <Statement>
            <h1>statement of ideals</h1>
            <ul>
              <li>To provide efficient, timely, and relevant bookkeeping and payroll reporting services, in accordance with generally accepted accounting principles</li>
              <li>To communicate honestly, openly, and in clear understandable language</li>
              <li>To provide full disclosure concerning billing rates, invoices, terms of service, and reimbursement requirements</li>
              <li>To continually offer advice based on available resources. When necessary, conferring with your tax accountant to address more complicated issues.</li>
              <li>To transact bookkeeping services honestly, according to the mandates required by the Internal Revenue and Maine Revenue Services</li>
              <li>To protect your sensitive information and maintain the highest level of confidentiality</li>
              <li>To be available to you commensurate with your business needs</li>
              <li>To continue to educate you such that the bookkeeping process becomes a more efficient business model</li>
              <li>To be committed to the success and well-being of your business</li>
              <li>To treat your business as my own—with integrity and respect</li>
            </ul>
          </Statement>
        </Container>
        <Sidebar />
      </div>
    </>
  );
}

export default About;