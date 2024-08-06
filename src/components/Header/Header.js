import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  return (
    <header className="header">
      <Link to='/' className="header__title"><h4>Portfolio</h4></Link>
      <div className='header__links'>
        <Link to='/education' className="header__link"><h4>Education</h4></Link>
        <Link to='/work' className="header__link"><h4>Work</h4></Link>
        <Link to='/projects' className="header__link"><h4>Projects</h4></Link>
      </div>
    </header >
  )
}

export default Header
