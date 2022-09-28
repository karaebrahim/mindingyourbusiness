import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-top: 20px;
  padding-left: 25px;
  display: flex;
  align-items: flex-end;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  padding-right: 2rem;
  text-transform: uppercase;
  font-size: 1.15rem;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.white};
  padding: 5px 20px 20px 20px;
  margin-right: 5px;
  margin-left: 5px;

  &:hover {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.secondary};
    border-radius: 3px 3px 0 0;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <ListItem><Link href="about">about</Link></ListItem>
        <ListItem><Link href="services">services</Link></ListItem>
        <ListItem><Link href="contact">contact</Link></ListItem>
      </ul>
    </Nav>
  );
}

export default Navigation;