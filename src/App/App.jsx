import { useState } from 'react'
import mainLogo from '../assets/main.svg'
import Header from '../Header/Header.jsx'
import Intro from '../Intro/Intro.jsx'
import './App.css'
function App() {

  return (
    <>
      <Header />
      <div className="info">
        <Intro />
        <img src={mainLogo} style={{marginLeft: '50px'}} alt="Vite logo" />
      </div>
    </>
  )
}

export default App
