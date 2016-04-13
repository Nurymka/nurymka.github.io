/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react'
import './index.scss'
import '../components/Navigation/Navigation.scss'
import {HorizontalDivider} from '../components/helpers.jsx'
import {Projects, Interests} from '../components/ProjectContents'
import {Element} from 'react-scroll'
import Footer from '../components/Footer'

export default class extends Component {
  render () {

    const FullPageHeader = () => (
      <div className='fullpageheader'>
        <div className='header'>
          <div className='nameblock'>
            <h1><b>NURYM</b> KUDAIBERGEN</h1>
            <HorizontalDivider isMarginalized/>
            <span className='lowerlabel'>iOS Developer</span>
          </div>
          <a>
            <img src='assets/arrow.png' alt='Scroll Down' className='arrowdown' />
          </a>
        </div>
        <HeaderDesc />
      </div>
    )

    const HeaderDesc = () => (
      <div className='desc-container'>
        <div className='desc'>
          <p>Hi, I’m Nurym. I lovingly make iOS and web applications. I’m currently based in Astana, Kazakhstan, though you might see me casually strolling in the streets of San Francisco, California. That’s my dramatic silhouette sitting over there.</p>
          <HorizontalDivider className='flexible-divider'/>
          <p>
            <b>Languages I know:</b><br/>
            Swift, Objective-C, JavaScript, Kazakh, Russian, English<br/>
            <b>{"Frameworks/Technologies I have experience with:"}</b><br/>
            Meteor, React, React Native, Redux, Node.js, Cocos2D, Unity, git, vim
          </p>
        </div>
      </div>
    )

    const FullWidthTitle = (props) => {
      const text = props.isReversed
        ? <span><b>{props.boldText}</b> {props.lightText}</span>
        : <span>{props.lightText}<b> {props.boldText}</b></span>
      return (
        <Element name={props.scrollElementName} className='fullwidth-title' id={props.scrollElementName}>
          <h2 className='text'>{text}</h2>
          <HorizontalDivider isMarginalized/>
        </Element>
      )
    }

    FullWidthTitle.propTypes = {
      isReversed: PropTypes.bool,
      lightText: PropTypes.string.isRequired,
      boldText: PropTypes.string.isRequired
    }

    const ItemCard = (props) => (
      <a href={props.href} className={`item-card item-card-hoverable ${props.className ? props.className : ''}`}>
        <div className={`bg-card ${props.cardBgClass ? props.cardBgClass : ''}`} />
        <div className='text-container'>
          <h2><b>{props.cardName}</b></h2>
          <p>{props.cardDesc}</p>
        </div>
      </a>
    )

    ItemCard.propTypes = {
      cardBgClass: PropTypes.string.isRequired,
      cardName: PropTypes.string.isRequired,
      cardDesc: PropTypes.string.isRequired
    }

    const ExpandedItemCard = (props) => (
      <div className='item-card item-card-expanded'>
        <div className={`top-bar ${props.cardBgClass}`}>
          <div className={`icon ${props.cardBgClass}`} />
          <div className='text-container'>
            <h2><b>{props.cardName}</b></h2>
            <p>{props.cardDesc}</p>
          </div>
        </div>
        <div className={`content content-${props.cardBgClass}`}>
          {props.children}
        </div>
      </div>
    )

    return (
      <div className='main' id='main'>
        <FullPageHeader />
        <FullWidthTitle
          lightText='featured'
          boldText='work'
          scrollElementName='projects'/>
        <ItemCard
          href={Projects.kanjiNinja.href}
          cardBgClass={Projects.kanjiNinja.shortName}
          cardName={Projects.kanjiNinja.name}
          cardDesc={Projects.kanjiNinja.desc} />
        <ItemCard
          className='item-card-last'
          href={Projects.nukte.href}
          cardBgClass={Projects.nukte.shortName}
          cardName={Projects.nukte.name}
          cardDesc={Projects.nukte.desc} />
        <ItemCard
          href={Projects.princetonChat.href}
          cardBgClass={Projects.princetonChat.shortName}
          cardName={Projects.princetonChat.name}
          cardDesc={Projects.princetonChat.desc} />
        <ItemCard
          href={Projects.taylr.href}
          cardBgClass={Projects.taylr.shortName}
          cardName={Projects.taylr.name}
          cardDesc={Projects.taylr.desc} />
        <FullWidthTitle lightText='interests' boldText='other' isReversed scrollElementName='interests'/>
        <ItemCard
          href={Interests.speedcubing.href}
          cardBgClass={Interests.speedcubing.shortName}
          cardName={Interests.speedcubing.name}
          cardDesc={Interests.speedcubing.desc} />
        <ItemCard
          href={Interests.photography.href}
          cardBgClass={Interests.photography.shortName}
          cardName={Interests.photography.name}
          cardDesc={Interests.photography.desc} />
        <Footer />
      </div>
    )
  }
}
