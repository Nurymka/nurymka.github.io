import React, {PropTypes} from 'react'
import {Element, animateScroll} from 'react-scroll'
import './Footer.scss'
import '../Navigation/Navigation.scss'

const Footer = (props) => (
  <Element className={`footer ${props.darkTheme ? 'footer-dark' : ''}`} name='contact me'>
    <div className='footer-inner'>
      <ul className='navigation-links footer-nav-icons'>
        <FooterLink href='https://github.com/nurymka' target='_blank'>
          <i className='fa fa-github-square' />
        </FooterLink>
        <FooterLink href='mailto:nurim98@gmail.com'>
          <i className='fa fa-envelope' />
        </FooterLink>
        <FooterLink href='https://www.instagram.com/nurymka33/' target='_blank'>
          <i className='fa fa-instagram' />
        </FooterLink>
        <FooterLink href='https://www.facebook.com/Kidenok' target='_blank'>
            <i className='fa fa-facebook-square' />
        </FooterLink>
      </ul>
      <ul className='navigation-links footer-nav-text'>
        <FooterLink href='https://github.com/nurymka' target='_blank'>github</FooterLink>
        <FooterLink href='mailto:nurim98@gmail.com'>email</FooterLink>
        <FooterLink href='https://www.instagram.com/nurymka33/' target='_blank'>instagram</FooterLink>
        <FooterLink href='https://www.facebook.com/Kidenok' target='_blank'>facebook</FooterLink>
      </ul>
      <div className='copyright-container'>
        <span className='copyright-text'>2016 © <span className='copyright-name'>Nurym Kudaibergen</span></span>
        <div onClick={() => { animateScroll.scrollToTop() }} className={`logo link-fading ${props.darkTheme ? 'logo-normal' : 'logo-black'}`}/>
      </div>
    </div>
  </Element>
)

Footer.propTypes = {
  darkTheme: PropTypes.bool
}

const FooterLink = (props) => (
  <li>
    <a className='link-fading' {...props}>
      {props.children}
    </a>
  </li>
)

export default Footer
