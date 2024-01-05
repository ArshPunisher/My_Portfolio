import React from 'react'
import './Components.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import headerImg from '../assets/img/obj_1.png'

function Banner() {
  const [text] = useTypewriter({
    words: [' Web Developer', ' Web Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  return (
    <section className='banner' id='home'>
      <div className='container'>
        <div className='left'>
          <span className='tag-line'>Welcome to my Portfolio</span>
          <h1>Hola! I'm Arsh
            <span className='txt-change'>{text}</span>
            <Cursor/>
          </h1>
          <p>A skilled frontend developer adept at creating immersive digital experiences using JavaScript, React.js, and TailwindCSS. I whip up responsive web spaces that users love to navigate. But hey, coding isn't my only gig—I'm also a bit of a fitness nut. You'll find me hitting the gym daily because staying healthy is key! I'm not just about tech, though. I thrive in diverse environments, showcasing adaptability and a dynamic skill set. Always curious, I'm on a mission to level up my tech game in this ever-evolving landscape.</p>
        </div>

        <div className='right'>
          <img src={headerImg} alt="Header Img"/>
        </div>
      </div>
      
    </section>
  )
}

export default Banner