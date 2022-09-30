import React from 'react';
import styled from 'styled-components';
import { breakpointBelow } from '../config/breakpoints';

const Container = styled.div`
  input[type="text"], input[type="email"] {
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
    -webkit-appearance: none;
    width: 5rem;

    &:hover {
      opacity: 0.8;
    }
  }

  fieldset {
    display: flex;
    flex-direction: column;
  }
`;

const handleSubmit = (e) => {
  e.preventDefault();
  const email = 'maria@mindingyourbusinessinc.com';
  const subject = 'question from your website';
  const message = document.getElementById('comments').value;
  
  window.open(`mailto:${email}?subject=${subject}&body=${message}`);
}

const Form = (props) => {
  return (
    <Container>
      {props.h1 ? <h1>contact</h1> : <h2>contact</h2>}
      <form onSubmit={handleSubmit}>
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
    </Container>
  );
}

export default Form;
