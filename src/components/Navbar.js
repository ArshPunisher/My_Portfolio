import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import './Components.css'

function Navbar() {
  const[scrolled, setScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll=()=>{
      if(window.scrollY > 50){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='navbar-div'>
        <nav className={scrolled ? "scrolled" : ""}>
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
  
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className='nav-btns'>
              <div className="social-icon">
                  <a href="https://www.linkedin.com/in/arsh-ramgarhia/"><img src={navIcon1} alt="" /></a>
                  <a href="https://github.com/ArshPunisher"><img className="git-icon" src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/iarshramgarhia/"><img src={navIcon3} alt="" /></a>
              </div>
              <a className="navbar-text" href="#contact">
                  <button className="cntbtn"><span>Let’s Connect</span></button>
              </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar