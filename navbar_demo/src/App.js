import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './pages';
import About from './pages/About';
import Events from './pages/Events';
import Annual from './pages/Annual';
// import Teams from './pages/Teams';
// import Blogs from './pages/Blogs';
//import SignUp from './pages/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='events' element={<Events />} />
        <Route path='annual' element={<Annual />} />
        {/* <Route path='/teams' element={<Teams />} />
        <Route path='/blogs' element={<Blogs />} /> */}


        {/* <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} /> */}

      </Routes>
    </Router>
  );
}

export default App;