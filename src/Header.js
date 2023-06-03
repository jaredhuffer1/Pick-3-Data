import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the correct CSS file

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/lottery" activeClassName="active-link">Lottery Data</NavLink></li>
                    <li><NavLink to="/membership" activeClassName="active-link">Membership</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;



