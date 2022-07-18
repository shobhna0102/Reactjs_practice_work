import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Manu from './Manu';

const App = () => {
  return (
    <>
      <Manu />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
    </>

  );
}

export default App;
