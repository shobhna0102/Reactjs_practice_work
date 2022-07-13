import React from "react";
import logo from "./images/logo.jpeg";



const Header = () => {
    return (

        <div className="header">
            <img alt="logo" src={logo} width='70' height='50' />
            <h1> Shobhna Keep Notes</h1>
        </div>

    );
}

export default Header;

