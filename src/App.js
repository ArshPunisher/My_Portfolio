import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App