import React from 'react';
import './Hero.css';
import user from '../../assets/user.png';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={user} alt="user" />
        <h1><span>I'm Avni</span>Wordpress Developer from India</h1>
        <p>Wordpress Developer</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume"> My Resume</div>
        </div>
    </div>
  )
}

export default Hero;