import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpointBelow } from '../config/breakpoints';

const Nav = styled.nav`
  display: flex;

  ul {
    display: flex;
    padding: 0;
    margin: 22px 0 0;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 0 1rem;
  text-transform: uppercase;
  font-size: 1.15rem;

  ${breakpointBelow.tablet} {
    font-size: 1rem;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.white};
  padding: 5px 20px 20px 20px;
  margin-right: 5px;
  margin-left: 5px;

  ${breakpointBelow.tabletPortrait} {
    padding: 5px 10px 20px 10px;
    margin-right: 4px;
    margin-left: 4px;
  }

  &:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.black};
    border-radius: 3px 3px 0 0;
  }

  &.active {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.black};
    border-radius: 3px 3px 0 0;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <ListItem><Link activeClassName="active" to="/about">about</Link></ListItem>
        <ListItem><Link activeClassName="active" to="/services">services</Link></ListItem>
        <ListItem><Link activeClassName="active" to="/contact">contact</Link></ListItem>
      </ul>
    </Nav>
  );
}

export default Navigation;