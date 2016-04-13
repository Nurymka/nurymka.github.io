/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import './Navigation.scss'
import Headroom from 'react-headroom'
import { Link, animateScroll } from 'react-scroll'
import {AnimatedCloseIcon} from '../helpers.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
var injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

const Navigation = React.createClass({
  getInitialState () {
    return {
      menuModalOpen: false
    }
  },

  openModal () {
    this.setState({ menuModalOpen: true })
    document.body.style.overflow = 'hidden';
  },

  closeModal () {
    this.setState({ menuModalOpen: false })
    document.body.style.overflow = 'scroll';
  },

  render () {
    return (
      <div>
        <Headroom pinStart={1} disableInlineStyles>
          <div className='headroom-inner'>
            <a className='link-fading'
              onClick={(e) => {
                if (isHome(this.props.path)) {
                  e.preventDefault()
                  animateScroll.scrollToTop()
                }
              }}
              href='/home'>
              <div className='logo logo-normal' />
            </a>
            <a onClick={this.openModal} className='hamburger'><i className='fa fa-bars fa-2x'/></a>
            <NavigationLinks {...this.props} />
          </div>
        </Headroom>
        <ReactCSSTransitionGroup transitionName='menu-modal' component='div'
            transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.state.menuModalOpen ?
            <div className='mobile-nav'>
              <div className='close-button' onClick={this.closeModal}>
                <AnimatedCloseIcon />
              </div>
              <NavigationLinks {...this.props} closeModal={this.closeModal} />
            </div> : null}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

const NavigationLinks = (props) => (
  <ul className='navigation-links'>
    <li>
      {isHome(props.path)
        ? <NavigationLink to='projects' onClick={props.closeModal ? props.closeModal : null}>projects</NavigationLink>
        : <a className={isProject(props.path) ? 'active' : ''} href='/home#projects'>projects</a>}
    </li>
    <li>
      {isHome(props.path)
        ? <NavigationLink to='interests' onClick={props.closeModal ? props.closeModal : null}>interests</NavigationLink>
        : <a className={isInterest(props.path) ? 'active' : ''} href='/home#interests'>interests</a>}
    </li>
    <li>
      <NavigationLink to='contact me' onClick={props.closeModal ? props.closeModal : null}>contact me</NavigationLink>
    </li>
  </ul>
)

const isAtPath = (currentPath, path) => currentPath.includes(path)
const isHome = (currentPath) => currentPath === '/' || currentPath === '/home'
const isProject = (currentPath) => isAtPath(currentPath, '/projects/')
const isInterest = (currentPath) => isAtPath(currentPath, '/interests/')

const NavigationLink = (props) => (
  <Link activeClass='active' smooth offset={-15} duration={500} {...props}>{props.children}</Link>
)

export default Navigation
