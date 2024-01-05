import React from 'react'
import project1 from '../assets/img/Project_1.jpg'
import project2 from '../assets/img/Project_2.jpg'

function Projects() {
  return (
    <section className='project' id='projects'>
        <h2>Projects</h2>
        <div className='para'>
            <p>Innovatively crafted a Netflix-inspired platform using Next.js and Tailwind CSS, integrated seamlessly with Firebase for a dynamic database experience. Additionally, developed a robust college management system using Python, harnessing the power of SQLite3 for efficient data management. Passionately engineered to combine functionality with an intuitive user interface</p>
        </div>

        <div className='project-row'>
            <div className='project-col'>
                <a href="https://github.com/ArshPunisher/netflix-clone"><img src={project1} alt="Project 1" /></a>
            </div>
            <div className='project-col'>
                <img src={project2} alt="Prject 2" />
            </div>
        </div>
    </section>
  )
}

export default Projects