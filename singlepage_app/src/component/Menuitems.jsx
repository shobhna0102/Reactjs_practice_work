import React from 'react'

const Menuitems = ({ pagename }) => {
    return (
        <>
            {/* <Navbar /> */}
            <section className="hero-section">
                <p>Welcome to </p>
                <h1>My {pagename} Page</h1>
            </section>
        </>
    )
}

export default Menuitems;
