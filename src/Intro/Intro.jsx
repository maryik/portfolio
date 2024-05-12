import React from 'react';
import Typewriter from 'typewriter-effect';
import './Intro.css';
import Button from '../Button/Button';
import { FaUser, FaDownload  } from 'react-icons/fa';
import { AiFillFileText } from 'react-icons/ai';

export default function Intro() {
    return(
        <div className='marquee'>
            <h1>Hello there!<br/>
            I'M <span className='MG'>Marat Girsa!</span></h1>
            <Typewriter
                options={{
                    strings: ['Student', 'Frontend Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20
                }}
            />
            <div className='buttons'>
                <Button ButtonText={'Resume'} Icon={<FaDownload className='icon'/>} to="/resume"/>
                <Button ButtonText={'About'} Icon={<FaUser className='icon'/>} to="/about"/>
            </div>
        </div>
    )
}
