
import React from 'react';
import { useLocation } from "react-router-dom";
const Service = () => {
    const location = useLocation();

    return (
        <h1>Our current location {location.pathname} </h1>

    );

}

export default Service;
