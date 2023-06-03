import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="page-name">Pick3Data</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact={true.toString()} to="/" activeclassname="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/lottery">Lottery Data</NavLink>
          </li>
          <li>
            <NavLink to="/membership">Membership</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Sign In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
