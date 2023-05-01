import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <button className="nav-toggle" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
                <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={toggleNav}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleNav}>Bio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" onClick={toggleNav}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleNav}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
