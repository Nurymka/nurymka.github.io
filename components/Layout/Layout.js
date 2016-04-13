/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react'
import './Layout.scss'
import Navigation from '../Navigation'
import {LoadingLogo} from '../helpers.jsx'

export default React.createClass({
  componentDidMount() {
    const loading = document.getElementById('loading')
    const setDisplayNone = () => { loading.style.display = 'none' }
    loading.addEventListener('webkitAnimationEnd', setDisplayNone, false);
    loading.addEventListener('animationend', setDisplayNone, false);
    loading.addEventListener('oanimationend',setDisplayNone, false);
  },

  render () {
    return (
      <div className={`Layout${this.props.path === '/' ? ' animated' : ''}`}>
        <div id='loading' className='loading-container'>
          <LoadingLogo />
        </div>
        <div className='layout-inner'>
          <Navigation path={this.props.path} />
          {this.props.children}
        </div>
      </div>
    )
  }
})
