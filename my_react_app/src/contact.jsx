import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState(
        {
            fullname: "",
            mobile: "",
            email: "",
            message: "",
        });


    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value

            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is:- ${data.fullname} my mobile number is:-${data.mobile}my email is :-${data.email}Here is what i want to say :-${data.message}`);
    };

    return (
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    FullName
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Mobile
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="mobile"
                                    value={data.mobile}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Mobile"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="fNameorm-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={data.message}
                                    onChange={inputEvent}
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
