import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Intro from '../Intro/Intro.jsx';
import About from '../About/About.jsx';
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
    if (location.pathname === '/') {
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
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
      </Routes>
    </div>
  );
}

export default App;