import React, { useState } from 'react'
import Head from './head'
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/certificates">Certificate</Link></li>
            <li><Link to="/project">Project</Link></li>
          </ul>
          <div className="start">

            <a className='Resumebtn'
              href={process.env.PUBLIC_URL + '/Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download="My_Resume"
            >
            </a>


          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
