import React from "react";
import ab from "../src/images/about.jpg";
import Component from "./Component";

const About = () => {
    return (
        <>
            <Component
                name="Welcome to About page"
                imgsrc={ab}
                visit="/contact"
                btnname="Contact Now"
            />
        </>
    );
};

export default About;
