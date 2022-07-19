import React from "react";
import { NavLink } from 'react-router-dom'

const Component = ({ name, imgsrc, visit, btnname }) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {name}<br />
                                        <strong className="brand-name"> Our Services</strong>
                                    </h1>
                                    <h2 className="my-3">

                                        we are the team of talanted developer making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} className="btn-get-started">{btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                    <img src={imgsrc} className="animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Component;
