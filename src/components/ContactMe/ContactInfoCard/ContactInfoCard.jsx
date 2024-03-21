import './ContactInfoCard.css'

import React from 'react'

const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard