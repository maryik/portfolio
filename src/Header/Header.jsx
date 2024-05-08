import './Header.css'
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
export default function Header() {
    return(
        <header>
            <h2>MG</h2>
            <a href='/' className='link'><FaHome className='icon-link'/>Home</a>
            <a href='/' className='link'><FaUser className='icon-link'/>About</a>
            <a href='/' className='link'><FaBriefcase className='icon-link'/>Projects</a>
            <a href='/' className='link'><FaEnvelope className='icon-link'/>Contact</a>
        </header>
    )
}