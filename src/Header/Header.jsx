import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <header style={{ backgroundColor: scrollPosition > 0? `rgba(17, 10, 56, ${scrollPosition/150})` : 'transparent' }}>
            <h2>MG</h2>
            <Link to="/" className='link'><FaHome className='icon-link'/>Home</Link>
            <Link to="/about" className='link'><FaUser className='icon-link'/>About</Link>
            <Link to="/projects" className='link'><FaBriefcase className='icon-link'/>Projects</Link>
            <Link to="/contact" className='link'><FaEnvelope className='icon-link'/>Contact</Link>
        </header>
    );
}
