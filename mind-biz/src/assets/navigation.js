import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  float: left;
  border-top: 3px solid ${props => props.theme.secondary};
  border-bottom: 3px solid ${props => props.theme.secondary};
  margin-top: 20px;
  padding-left: 25px;
  width: 312px;

  ul {
    padding:0;
    margin:0;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  padding-top: 15px;
  padding-right: 5px;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 5px 20px 20px 20px;
  margin-right: 5px;
  margin-left: 5px;

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <ListItem><Link href="about.html">about</Link></ListItem>
        <ListItem><Link href="services.html">services</Link></ListItem>
        <ListItem><Link href="contact.html">contact</Link></ListItem>
      </ul>
    </Nav>
  );
}

export default Navigation;