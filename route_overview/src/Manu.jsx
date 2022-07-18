import React from "react";
import { NavLink } from "react-router-dom";

const Manu = () => {
    return (
        <div className=" menu_style">
            <NavLink exact={true} style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/" >AboutUs</NavLink>
            <NavLink exact={true} style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/contact"> Contact</NavLink>
        </div>
    );
};

export default Manu;
