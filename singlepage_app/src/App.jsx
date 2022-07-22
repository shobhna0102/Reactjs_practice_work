import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'

const App = () => {


    return (
        <>

            <Routes>
                <Navbar />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<Service />} />
            </Routes>
            <Footer />

        </>
    );
}

export default App;
