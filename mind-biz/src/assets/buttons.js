import React from 'react';
import styled from 'styled-components';
import { images } from '../images';

const Container = styled.div`
  width: 810px;
  margin: 0 auto;
   
  h2 {
    font-size: 1.25em;
  }

  .bookkeeping {
    float: left;
    width: 150px;
    height: 120px;
    text-align: center;
    margin: 40px;
    padding: 20px 20px 40px 20px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: ${props => props.theme.secondary};

      h2 {
        background-image: url(${images.bookStack});
        background-repeat: no-repeat;
        background-position: 40px 0px;
      }
    }

    h2 {
      background-image: url(${images.bookStack});
      background-repeat: no-repeat;
      background-position: 40px -131px;
      padding-top: 80px;
    }
  }
 
  .payroll {
    float: left;
    width: 150px;
    height: 120px;
    text-align: center;
    margin: 40px;
    padding: 20px 20px 40px 20px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: ${props => props.theme.secondary};

      h2 {
        background-image: url(${images.calcStack});
        background-repeat: no-repeat;
        background-position: 45px 0px;
      }
    }

    h2 {
      background-image: url(${images.calcStack});
      background-repeat: no-repeat;
      background-position: 45px -128px;
      padding-top: 80px;
    }
  }
 
  .quickbooks {
    float: left;
    width: 150px;
    height: 120px;
    text-align: center;
    margin: 40px;
    padding: 20px 20px 40px 20px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: ${props => props.theme.secondary};

      h2 {
        background-image: url(${images.clockStack});
        background-repeat: no-repeat;
        background-position: 40px 0px;
      }
    }

    h2{
      background-image: url(${images.clockStack});
      background-repeat: no-repeat;
      background-position: 40px -131px;
      padding-top: 80px;
    }
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${props => props.theme.black};
   
  &:hover{
    color: ${props => props.theme.white};
  }
`;

const Buttons = () => {
  return (
    <Container className="clearfix">
      <Link href="services.html#service1" className="bookkeeping">
        <h2>bookkeeping</h2>
      </Link>
      <Link href="services.html#service2" className="payroll">
        <h2>payroll reporting</h2>
      </Link>
      <Link href="services.html#service3" className="quickbooks">
        <h2>quickbooks</h2>
      </Link>
    </Container>
  );
}

export default Buttons;