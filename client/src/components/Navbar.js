import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom'

import navStyles from './navbar.module.scss';


const Navbar = () => {

    return (
        <header className={navStyles.headerClass}>
            <h1>Skyline Ivy</h1>
            <nav className={navStyles.navClass}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all">All</NavLink>
                    </li>
                    <li>
                        <div className={navStyles.carttotal} >3</div>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
