import React from "react";
import { NavLink } from "react-router-dom";

const Manu = () => {
    return (
        <div className=" menu_style">
            <NavLink style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/" >AboutUs</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/contact"> Contact</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/user/shobhna"> User</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "blue" } : { color: "#545e6f" }} to="/service"> Service</NavLink>
        </div>
    );
};

export default Manu;
