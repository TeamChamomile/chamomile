import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-coffee fa-2x" aria-hidden="true" />
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <span className="brand-first">CHA</span>
      <span className="brand-second">MO</span>
      <span className="brand-third">MILE</span>
    </NavLink>
  </div>
);

export default HeaderBarBrand;
