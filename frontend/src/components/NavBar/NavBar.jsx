import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <nav className="navBar">
            <h1>React Games</h1>
            <NavLink to='/'
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                className="navBarElem"
            >
                Home
            </NavLink>
        </nav>
    );
}

export default NavBar;