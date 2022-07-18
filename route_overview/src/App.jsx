import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import User from './User';
import Service from './Service';

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:fname' element={<User />} />
        <Route path='/service' element={<Service />} />
        <Route element={<Error />} />
      </Routes>
    </>

  );
}

export default App;
