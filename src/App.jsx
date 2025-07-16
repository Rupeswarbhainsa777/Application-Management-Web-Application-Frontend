import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Menubar from "./componenet/Menuebar/Menuebar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <Router>
      <div>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
