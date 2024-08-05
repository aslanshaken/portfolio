import React from 'react'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'
import './Home.css'
import Ava from './images/Ava.png'
import Linkedin from './images/linkedin.png'
import Github from './images/github.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'



const Home = () => {
  return (
    <div className="home">
      <div className='home__left'>
        <img src={Ava} className='home__ava' />
      </div>
      <div className='home__right'>
        <h1 className='home__title'>Aslan Shaken</h1>
        <h5 className='home__email'>aslanshaken@gmail.com</h5>
        <p className='home__description'>Passionate and results-driven software engineer
          with over 5 years of hands-on experience in
          full-stack web development. Proficient in a
          variety of programming languages and frameworks.
          Skilled in leading cross-functional teams to
          deliver scalable and robust software solutions.
          Committed to continuous learning and staying
          updated with emerging technologies. Adept at
          problem-solving and driving innovation in the
          fast-paced environments.</p>
        <div className='home__icons'>
          <a href='https://www.linkedin.com/in/aslanshaken' target="_blank"><img src={Linkedin} /></a>
          <a href='https://github.com/aslanshaken' target="_blank"><img src={Github} /></a>
          <a href='https://www.facebook.com/aslanshaken' target="_blank"><img src={Facebook} /></a>
          <a href='https://www.instagram.com/aslanshaken' target="_blank"><img src={Instagram} /></a>
        </div>
      </div>
    </div >
  )
}

export default Home
