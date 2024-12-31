import React from 'react';
import './About.css';
import aboutimg from '../../assets/about.png';
import user from '../../assets/user.png';

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={aboutimg} alt="" />
        </div>
        <div className="about-sections">
            <div className='about-left'>
                <img src={user} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>I am an experienced Backend Developer</p>
                    <p>My Passion is working on Web Development</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p>
                        <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill"><p>React JS</p>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill"><p>Javascript</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill"><p>Wordpress</p>
                        <hr style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
           <div className="about-achieve">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
           </div>
           <hr />
           <div className="about-achieve">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
           </div>
           <hr />
           <div className="about-achieve">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
           </div>
           <hr />
        </div>
    </div>
  )
}

export default About;