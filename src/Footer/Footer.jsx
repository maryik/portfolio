import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://github.com/maryik?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub className='icon-footer'/></a>
            <a href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B0%D1%82-%D0%B3%D0%B8%D1%80%D1%81%D0%B0-943774292/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon-footer'/></a>
            <a href="https://www.instagram.com/_maryik._/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon-footer'/></a>
        </div>
    )
}