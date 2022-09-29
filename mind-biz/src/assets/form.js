import styled from 'styled-components';
import { breakpointBelow } from '../config/breakpoints';

export const FormStyles = styled.div`
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
