import React from "react";

const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav_bg ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1">
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
                                    <img src='' className="img-fluid-animated" alt="home img" />

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
