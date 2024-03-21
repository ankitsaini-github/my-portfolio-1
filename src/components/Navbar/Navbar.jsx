import './Navbar.css'

import React, { useState } from 'react'

import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu=()=>{
    setOpenMenu((prev)=>!prev);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
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
              <button className='contact-btn'>Hire Me</button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
              <span className='material-symbols-outlined' style={{fontSize: '1.8rem'}}>
                {openMenu? 'close' : 'menu'}
              </span>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar