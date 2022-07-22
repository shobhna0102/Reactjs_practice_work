import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import './index.css';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter><Navbar /></BrowserRouter>,

    document.getElementById('root'));
