import React from 'react';
import styled from 'styled-components';
import { FormStyles } from './form';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  width: 310px;
  float: right;
  padding: 20px;
  border-left: 10px solid ${props => props.theme.lightGray};

  ${breakpointBelow.tablet} {
    width: auto;
    float: none;
    border-left: none;
    border-top: 10px solid ${props => props.theme.lightGray};
  }
   
  h2 {
    color: ${props => props.theme.secondary};
  }
   
  ul {
    padding: 0px 20px 0px 20px;
  }
   
  a {
    text-decoration: none;
    color: ${props => props.theme.black};

    &:visited {
      text-decoration: none;
      color: ${props => props.theme.secondary};
    }
  }
`;

const Wrapper = styled.div`
  a {
    border-bottom:1px solid ${props => props.theme.black};
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <FormStyles>
        <h2>contact</h2>
        <form action="mailto:maria@mindingyourbusinessinc.com" method="POST" encType="text/plain">
          <fieldset>
            <label htmlFor="name">name </label><input type="text" name="name" id="name" />
            <label htmlFor="email">email </label><input type="email" name="email" id="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="comments">questions/comments </label>
            <textarea id="comments" name="comments"></textarea>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </FormStyles>
      <Wrapper>
        <h2>useful forms</h2>
        <ul>
          <li><a href="http://www.irs.gov/" target="_blank" rel="noreferrer" >Internal Revenue Service (IRS)</a></li>
          <li><a href="http://www.state.me.us/revenue/" target="_blank" rel="noreferrer" >Maine Revenue Services</a></li>
          <li><a href="http://www.irs.gov/pub/irs-pdf/fw4.pdf?portlet=3" target="_blank" rel="noreferrer" >Federal Form W-4</a></li>
          <li><a href="https://www.mindingyourbusinessinc.com/pdf/w4me.pdf" target="_blank" rel="noreferrer" >Maine Form W-4</a></li>
          <li><a href="https://www.mindingyourbusinessinc.com/pdf/EE-Direct-Deposit.pdf" target="_blank" rel="noreferrer" >EE Direct Deposit Agreement</a></li>
          <li><a href="https://www.mindingyourbusinessinc.com/pdf/i-9.pdf" target="_blank" rel="noreferrer" >I-9</a></li>
        </ul>
      </Wrapper>
      <div>
        <h2>features</h2>
        <ul>
          <li>Personalized bookkeeping, which can include invoicing, A/R, A/P, bank reconciliations, 1099 reporting, quarterly and annual payroll reporting, and financial reporting</li>
          <li>Monthly, quarterly, or annual compilation of your data</li>
          <li>Year-end financial reporting and communication with your tax accountant</li>
          <li>Client education to promote efficiency and positive cash flow</li>
          <li>QuickBooks education for business owners and their staff</li>
          <li>Timely filing of government and insurance forms, as well expediting insurance audits</li>
        </ul>
      </div>
    </Container>
  );
}

export default Sidebar;
