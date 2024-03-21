import './ProjectCard.css'

import React from 'react'

const ProjectCard = ({details}) => {
  return (
    <div className='project-card'>
      <h6>{details.title}</h6>
      <div className='project-type'>{details.type}</div>
      <ul>
        {
          details.detail.map((item)=>(
            <li key={item}>{item}</li>
          ))
        }
      </ul>
      <div className='project-btns'>
        <a href={details.liveUrl} target='_blank'><img src='./assets/images/live.png' alt='live'/><p>Live</p></a>
        <a href={details.codeUrl} target='_blank'><img src='./assets/images/code.png' alt='code'/><p>Code</p></a>
      </div>
    </div>
  )
}

export default ProjectCard