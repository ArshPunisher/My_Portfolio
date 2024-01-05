import React from 'react'
import logo from '../assets/img/logo.png'
import Icon1 from '../assets/img/nav-icon1.svg'
import Icon2 from '../assets/img/github-mark-white.svg'
import Icon3 from '../assets/img/nav-icon3.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='footer-right'>
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/arsh-ramgarhia/"><img src={Icon1} alt="" /></a>
                  <a href="https://github.com/ArshPunisher"><img className="git-icon" src={Icon2} alt="" /></a>
                  <a href="https://www.instagram.com/iarshramgarhia/"><img src={Icon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;