import './MobileNav.css'

import React from 'react'

const MobileNav = ({isOpen, toggleMenu}) => {
  
  return (
    <div className={`mobile-menu ${isOpen? 'active':''}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='nav-logo' src='./assets/images/logo.png' alt=''/>
        <ul>
          <li>
            <a className='menu-item' href='#home'>Home</a>
          </li>
          <li>
            <a className='menu-item' href='#skills'>Skills</a>
          </li>
          <li>
            <a className='menu-item' href='#projects'>Projects</a>
          </li>
          <li>
            <a className='menu-item' href='#contactme'>Contact Me</a>
          </li>
          <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav