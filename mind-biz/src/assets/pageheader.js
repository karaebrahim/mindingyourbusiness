import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    border-top: 15px solid ${props => props.theme.primary};
    border-bottom: 15px solid ${props => props.theme.primary};
    width: 100%;
  }
`;

const PageHeader = (props) => {
  return (
    <Wrapper>
      <img src={props.image} alt="" />
    </Wrapper>
  );
}

export default PageHeader;
