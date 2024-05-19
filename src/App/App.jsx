import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Intro from '../Intro/Intro.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import ContactMe from '../ContactMe/ContactMe.jsx';
import mainLogo from '../assets/main.svg';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [overflow, setOverflow] = useState('auto');

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/contact') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      window.scrollTo(0, 0);
    }
    else if (location.pathname === '/projects') {
      document.body.style.overflow = 'auto';
      document.body.style.height = '320vh';
      window.scrollTo(0, 0);
    }
    else{
      document.body.style.overflow = 'auto';
      document.body.style.height = '220vh';
    }
  }, [location.pathname]);

  return (
    <div style={{ overflow }}>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className="info">
              <Intro />
              <img src={mainLogo} style={{ marginLeft: '50px' }} alt="Vite logo" />
            </div>
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <About />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Header />
            <Projects />
          </>
        }/>
        <Route path="/contact" element={
          <>
            <Header />
            <ContactMe />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;