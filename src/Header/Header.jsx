import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <h2>MG</h2>
            <Link to="/" className='link'><FaHome className='icon-link'/>Home</Link>
            <Link to="/about" className='link'><FaUser className='icon-link'/>About</Link>
            <Link to="/projects" className='link'><FaBriefcase className='icon-link'/>Projects</Link>
            <Link to="/contact" className='link'><FaEnvelope className='icon-link'/>Contact</Link>
        </header>
    );
}
