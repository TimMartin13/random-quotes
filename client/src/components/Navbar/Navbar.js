import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
  z-index: 100;
  // position: fixed;
  width: 100%; 
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${ NavLink }
  font-style: italic;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
  ${ NavLink }
  transition: 0.4s;
  :hover {
    color: #9198e5;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">MERCURY</Logo>
      <NavMenu>
        { menuData.map((item, index) => (
          <NavMenuLinks to={ item.link } key={ index }>
            { item.title }
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Navbar
