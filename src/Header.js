// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // assuming you will have a CSS file for Header component

function Header() {
    return (
        <header className="header">
            <h1>Pick3Data</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/lottery">Lottery Data</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
