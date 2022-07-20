import React from "react";
import web from '../src/images/home1.jpg'
import Component from "./Component";
const Home = () => {
    return (
        <>
            <Component
                name="Grow Your business with "
                imgsrc={web}
                visit="/service"
                btnname="Get Started" />
        </>
    );
};


export default Home;
