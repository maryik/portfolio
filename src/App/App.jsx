import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Intro from '../Intro/Intro.jsx';
import About from '../About/About.jsx';
import mainLogo from '../assets/main.svg';
import './App.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
