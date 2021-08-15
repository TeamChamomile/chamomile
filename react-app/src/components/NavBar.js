import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/products" activeClassName="active-link">
        Quote
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/examination" activeClassName="active-link">
        Examination
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
