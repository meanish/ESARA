import React from 'react';
import { StyleHeader } from "./Components/Styles/Home/Header.styled";
import { NavLink } from "react-router-dom";
import { Logo } from "./Components/Styles/Logo.styled";
import Nav from "./Nav";

const Header = () => {
    return (

        <StyleHeader>
            <div className="container nav">
                <NavLink to="/esara"><Logo src="./images/logo.png" alt="" /></NavLink>
                <Nav/>
            </div>
        </StyleHeader>

    )
}

export default Header