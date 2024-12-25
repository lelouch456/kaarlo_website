import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const API_URL = 'http://localhost:5000';

export const Nav = styled.nav`
  background: #ffb3ff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
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

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch(`${API_URL}/api/nav-items`);
        if (!response.ok) {
          throw new Error('Failed to fetch navigation items');
        }
        const data = await response.json();
        setNavItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavItems();
  }, []);

  if (error) {
    return <div>Error loading navigation: {error}</div>;
  }

  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          navItems.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.title}
            </NavLink>
          ))
        )}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;