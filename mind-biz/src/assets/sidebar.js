import React from 'react';
import styled from 'styled-components';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  width: 310px;
  float: right;
  padding: 20px;

  ${breakpointBelow.tablet} {
    width: auto;
    float: none;
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

const Contact = styled.div`
  input[type="text"], input[type="email"] {
    width: 280px;
    margin-bottom: 20px;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 3px;
    height: 2rem;
    font-size: 100%;
    padding-left: 0.5rem;

    ${breakpointBelow.tablet} {
      width: auto;
    }
  }
   
  textarea {
    width: 280px;
    height: 200px;
    margin-bottom: 10px;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 3px;
    font-size: 100%;
    font-family: 'Roboto';
    padding: 0.5rem;

    ${breakpointBelow.tablet} {
      width: auto;
    }
  }
   
  input[type="submit"] {
    margin-bottom: 10px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.primary};
    padding: 8px;
    border-radius: 3px;
    font-family: 'Roboto';
    cursor: pointer;

    ${breakpointBelow.tablet} {
      width: 5rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  fieldset {
    ${breakpointBelow.tablet} {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Forms = styled.div`
  a {
    border-bottom:1px solid ${props => props.theme.black};
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Contact>
        <h2>contact</h2>
        <form action="mailto:maria@mindingyourbusinessinc.com" method="POST" enctype="text/plain">
          <fieldset>
            <label for="name">name </label><input type="text" name="name" id="name" />
            <label for="email">email </label><input type="email" name="email" id="email" />
          </fieldset>
          <fieldset>
            <label for="comments">questions/comments </label>
            <textarea id="comments" name="comments"></textarea>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </Contact>
      <Forms>
        <h2>useful forms</h2>
        <ul>
          <li><a href="http://www.irs.gov/" target="_blank" rel="noreferrer" >Internal Revenue Service (IRS)</a></li>
          <li><a href="http://www.state.me.us/revenue/" target="_blank" rel="noreferrer" >Maine Revenue Services</a></li>
          <li><a href="http://www.irs.gov/pub/irs-pdf/fw4.pdf?portlet=3" target="_blank" rel="noreferrer" >Federal Form W-4</a></li>
          <li><a href="pdf/w4me.pdf" target="_blank" >Maine Form W-4</a></li>
          <li><a href="pdf/EE-Direct-Deposit.pdf" target="_blank" >EE Direct Deposit Agreement</a></li>
          <li><a href="pdf/i-9.pdf" target="_blank" >I-9</a></li>
        </ul>
      </Forms>
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
