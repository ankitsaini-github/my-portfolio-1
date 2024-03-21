import './Hero.css'

import React from 'react'

const Hero = () => {
  return (
    <section className='hero-container' id='home'>
      <div className='hero-content'>
        <h2>Building Digital Experience that Inspire</h2>
        <p>Passionate Frontend Developer | Transforming Ideas into seemless and Visually Stunning web Solution</p>
        <div className='hero-content-btns'>
          <a className='resume-btn' href='https://drive.google.com/file/d/14V5dgRIgYF6EIiy2vdRm6-paeH_no0Sx/view?usp=drive_link' target='_blank'>My Resume</a>
          <a className='letstalk-btn' href='#contactme'>Lets Talk</a>
        </div>
      </div>

      <div className='hero-img'> 
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/react.png' alt=''/>
          </div>
          <img src='./assets/images/profile1.png' alt=''/>
        </div>

        <div>
          <div className='tech-icon'>
            <img src='./assets/images/html.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/css.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/js.png' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero