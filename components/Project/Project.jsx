import React from 'react'
import './Project.scss'
import Footer from '../Footer/'

export const Project = (props) => (
  <div className={`project-page project-${props.bgClass}`}>
    <div className='project-header'>
      {!props.isInterest
        ? <div className={`icon ${props.bgClass}`} />
        : null}
      <div className='text-container'>
        <h2><b>{props.name}</b></h2>
        <p>{props.desc}</p>
      </div>
    </div>
    <div className='content'>
      <div className='content-inner'>
        {props.children}
      </div>
    </div>
    <Footer darkTheme/>
  </div>
)

export const Interest = (props) => (
  <Project {...props} isInterest/>
)
