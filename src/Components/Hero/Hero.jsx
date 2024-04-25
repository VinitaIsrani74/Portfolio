import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { IoIosMail } from "react-icons/io";
import Profile from "../../assets/profile1.png";
import resume from '../../assets/resume.pdf'

import "./hero.css";
const Hero = ({ github }) => {
  return (
    <div className="hero">
      
      <div className="contain">
        <div className="profile">
          <img src={Profile} alt="hero" className="profile-image" />
        </div>
        <div className="profile-details-role">
          <TypeAnimation
            sequence={[

              "A MERN Stack Developer",
              1000, 
              "A Full Stack Developer",
              1000,
              "A Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={20}
          
            repeat={Infinity}
          />


        </div>
        <p className="links">
            <a href="https://github.com/VinitaIsrani74"  className="link"><FaGithub  /></a>
            <a href="https://www.linkedin.com/in/vinita-israni-0b704a219/" className="link"><FaLinkedin  /></a>
            <a href="mailto:isranivinita74@gmail.com" style={{fontSize: "4.5rem"}}><IoIosMail /></a>
            </p>

            
      </div>
      <div className="profile-info">
        <h1>
          <span>I'm Vinita Israni</span>
          <br />
        </h1>

        <p>
        I'm MCA graduate passionate about tech. If given a chance, I'll put my heart into the job,
            giving it my all. Learning is my thing, and I'm ready to tackle any
            task. I'm eager to grow and be a valuable part of the team.
        </p>
        <div className="hero-action">
          <div className="hero-connect" onClick={github}>
            Github Profile
          </div>
          <a href={resume} download='resume' className="resume-link"><div className="hero-resume">Download Resume</div></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
