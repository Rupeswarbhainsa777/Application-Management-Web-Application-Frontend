import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Menubar from "./componenet/Menuebar/Menuebar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import AddJobs from "./Pages/AddJobs/AddJobs.jsx";
import AllJobs from "./Pages/AllJobs/AllJobs.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AiSupport from "./Pages/Ai Support/AiSupport.jsx";

import { AppProvider } from "./context/AppProvider.jsx";
import { AppContext } from "./context/AppContext.jsx";
import Login from "./Pages/Login/Login.jsx";
import Registration from "./Pages/Reg/Registration.jsx";

/* 🌙 Syncs Dark Mode Context with Body Class */
function DarkModeBodyEffect() {
  const { darkMode } = useContext(AppContext);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return null;
}

/* 🚀 Main Application Component */
function App() {
  return (
      <AppProvider>
        <DarkModeBodyEffect />
        <Router>
          <Menubar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/add-job" element={<AddJobs />} />
              <Route path="/all-jobs" element={<AllJobs />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/aisupport" element={<AiSupport />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reg" element={<Registration />} />
            </Routes>
          </main>
        </Router>
      </AppProvider>
  );
}

export default App;
