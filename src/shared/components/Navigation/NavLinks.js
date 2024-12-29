import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import './NavLinks.css'

const NavLinks = props => {
    const auth = useContext(AuthContext);

    const logoutUser = () => {
        auth.logout();
    }

    return <ul className="nav-links">
        <li>
            <NavLink to='/' exact> ALL USERS</NavLink>
        </li>
        {auth.isLoggedIn && <li>
            <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <NavLink to='/places/new'>ADD PLACE</NavLink>
        </li>}
        {!auth.isLoggedIn &&<li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <button onClick={logoutUser}>LOGOUT</button>
        </li>}


    </ul>
};

export default NavLinks;