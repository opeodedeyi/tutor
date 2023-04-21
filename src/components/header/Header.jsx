import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">home</Link>
            <ul>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/portfolio">portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
