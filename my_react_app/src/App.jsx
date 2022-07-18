import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />

      </Routes>

    </>
  );
}

export default App;
