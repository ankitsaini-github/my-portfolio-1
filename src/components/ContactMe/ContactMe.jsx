import './ContactMe.css'

import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import React from 'react'

const ContactMe = () => {
  return (
    <section className='contact-container' id='contactme'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{flex:1}}>
          <ContactInfoCard
            iconUrl='./assets/images/mail.png'
            text='Ankit121saini@gmail.com'
          />
          <ContactInfoCard
            iconUrl='./assets/images/github.png'
            text='https://github.com/ankitsaini-github'
          />
        </div>
        <div style={{flex:1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe