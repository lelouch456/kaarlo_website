// src/components/Navbar/index.js
import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #ffb3ff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;