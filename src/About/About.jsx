import React from 'react';
import CardOfSkill from '../CardOfSkill/CardOfSkill';
import { FaDownload, FaReact, FaHtml5, FaCss3, FaJs, FaCodeBranch, FaGithub, FaFigma, FaPython } from 'react-icons/fa';
import './About.css';
import Footer from '../Footer/Footer';
import DownloadButton from '../DownloadButton';

export default function About() {
  return (
    <div className='about-text'>
      <h1>Get to <span>know</span> me</h1>
      <p>Hello, I'm <span>Marat Girsa</span> and I live in Belarus in the city of Minsk. I am <span>Beginning frontend developer</span> and study at Minsk Radio Engineering College.</p>
      <p>I love developing beautiful <span>websites</span> that can be <span>useful</span> for people. You can view my <span>projects</span> on the "Projects" page.</p>
      <p>Every time in the <span>development</span> process I discover something new and interesting, which <span>encourages</span> me to <span>continue</span> to learn and develop.</p>
      <Footer/>
      <DownloadButton className='button-about-resume' ButtonText={'Download Resume'} Icon={<FaDownload className='icon'/>} downloadUrl={"/жирафы.txt"} downloadFilename={"жирафы.txt"}/>
      <div className='about-skills'>
        <h1>Skillset</h1>
        <div className='about-skills-card'>
          <CardOfSkill Icon={<FaHtml5 className='icon-card'/>}/>
          <CardOfSkill Icon={<FaCss3 className='icon-card'/>}/>
          <CardOfSkill Icon={<FaJs className='icon-card'/>}/>
          <CardOfSkill Icon={<FaReact className='icon-card'/>}/>
          <CardOfSkill Icon={<FaCodeBranch className='icon-card'/>}/>
          <CardOfSkill Icon={<FaGithub className='icon-card'/>}/>
          <CardOfSkill Icon={<FaFigma className='icon-card'/>}/>
          <CardOfSkill Icon={<FaPython className='icon-card'/>}/>
        </div>
      </div>
      </div>
  );
}
