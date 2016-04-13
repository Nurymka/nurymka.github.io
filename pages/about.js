/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './about.scss'
import {LoadingLogo} from '../components/helpers.jsx'

export default class extends Component {

  render() {
    return (
      <div>
        <div className='test'>
          <LoadingLogo />
        </div>
      </div>
    );
  }

}
