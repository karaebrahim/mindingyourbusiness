import React from 'react';
import styled from 'styled-components';
import { images } from '../images';
import PageHeader from './pageheader';
import Form from './form';
import { breakpointBelow } from '../config/breakpoints';

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto 1rem;
  padding-top: 10px;

  ${breakpointBelow.tablet} {
    width: auto;
    padding: 20px;
  }
`;

const Contact = () => {
  return (
    <>
      <PageHeader image={images.flowers} />
      <div>
        <FormContainer>
          <Form h1 />
        </FormContainer>
      </div>
    </>
  );
}

export default Contact;
