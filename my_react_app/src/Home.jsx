import React from "react";
import web from '../src/images/home1.jpg'

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-colum">
                                    <h1>
                                        Grow your business with
                                        <strong className="brand-name">Thapa</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        {" "}
                                        we are the team of talanted developer making websites
                                    </h2>
                                    <div className="mt-3">
                                        <a className="btn-get-started"> Get Started</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                    <img src={web} className="img-fluid-animated" alt="home img" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
