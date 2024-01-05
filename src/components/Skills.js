import React from 'react'

function Skills() {
  return (
    <section className='skills' id='skills'>
      <h2>My <span>Skills</span></h2>
      <div className='skills-row'>
        <div className='skills-col'>
          <h3 className='title'>Coding Skills</h3>
            <div className='skill-box'>

              <div className='progress'>
                <h3>HTML <span>90%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>CSS <span>80%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>JavaScript <span>85%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>Python <span>65%</span></h3>
                <div className='bar'><span></span></div>
              </div>

            </div>
        </div>
        <div className='skills-col'>
          <h3 className='title'>Professional Skills</h3>
            <div className='skill-box'>

              <div className='progress'>
                <h3>React.js <span>90%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>Web designer <span>70%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>Web development <span>95%</span></h3>
                <div className='bar'><span></span></div>
              </div>

              <div className='progress'>
                <h3>Git <span>90%</span></h3>
                <div className='bar'><span></span></div>
              </div>

            </div>
        </div>

      </div>
    </section>
  )
}

export default Skills