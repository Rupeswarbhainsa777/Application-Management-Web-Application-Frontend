import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Menubar from "./componenet/Menuebar/Menuebar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Addjobs from "./Pages/Addjobs/Addjobs.jsx";
import Alljobs from "./Pages/Alljobs/Alljobs.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import { AppContext } from "./context/AppContext.jsx";

function DarkModeBodyEffect() {
  const { darkMode } = useContext(AppContext);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return null;
}

function App() {
  return (
    <AppProvider>
      <DarkModeBodyEffect />
      <Router>
        <div>
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-job" element={<Addjobs />} />
            <Route path="/all-jobs" element={<Alljobs />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App
