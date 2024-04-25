import React from "react";

// front end skills icon
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";

//backend skills icon
import node from '../../assets/nodejs.png'
import express from '../../assets/express-js.png'
import java from '../../assets/java.png'
import python from '../../assets/python.jpg'
import cIcon from '../../assets/cicon.jpeg'
import cpp from '../../assets/cpplogo.jpeg'
import mysql from '../../assets/mysql.jpeg'
import { SiMongoose } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

//other skills icon
import { FaPix } from "react-icons/fa6";
import { CiDatabase } from "react-icons/ci"
import cors from '../../assets/cors.png'
import Postman from '../../assets/postmanicon.png'
import { SiThunderstore } from "react-icons/si";
import { SiAxios } from "react-icons/si";

import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container" data-aos="zoom-in">
      <div className="skills-heading">Areas of Expertise: Skills</div>
      <div className="sub-heading">
        Here are some of my skills on which i have been working for the past 4 years
      </div>
      <div className="containerr">

         {/* frontend skills */}
      <div className="frontend-skills">
        <h1 className="skill-heading">Frontend Skills</h1>
        <div className="skill-container">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <FaHtml5 style={{color: "orange"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <FaCss3Alt style={{color: "blue"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">Javascript</span>
            <IoLogoJavascript style={{color: "orange"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">React</span>
            <FaReact style={{color: "lightblue"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">Redux</span>
            <SiRedux style={{color: "purple"}}/>
          </div>
         
          <div className="skill">
            <span className="skill-name">Responsive Design</span>
            <DiResponsive style={{color: "yellow", fontSize: "4rem"}}/>
          </div>
        </div>
      </div>

      {/* backend skills */}
      <div className="backend-skills">
        <h1 className="skill-heading">Backend Skills</h1>
        <div className="skill-container">
          <div className="skill">
            <span className="skill-name">NodeJS</span>
            <img src={node} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">Express</span>
            <img src={express} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">Java</span>
            <img src={java} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">Python Basics</span>
            <img src={python} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">C</span>
            <img src={cIcon} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">C++</span>
            <img src={cpp} alt="" className="imgg"/>
          </div>
          
          <div className="skill">
            <span className="skill-name">MySQL</span>
            <img src={mysql} alt="" className="imgg"/>
          </div>
          <div className="skill">
            <span className="skill-name">mongoose</span>
            <SiMongoose style={{color: "orange"}} />
          </div>
          <div className="skill">
            <span className="skill-name">MongoDB</span>
            <SiMongodb style={{color: "green"}}/>
          </div>
        </div>
      </div>

       {/* other skills */}
      <div className="other-skills">
        <h1 className="skill-heading">Other Skills</h1>
        <div className="skill-container">
        <div className="skill">
            <span className="skill-name">Rest API</span>
            <FaPix style={{color: "#EBADC2"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">Cors</span>
            <img src={cors} alt="" className="imgg" style={{objectFit: "cover",borderRadius: "5px"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">Data Sctructures and algorithm</span>
            <CiDatabase style={{color: "yellow"}}/>
          </div>
          
          <div className="skill">
            <span className="skill-name">Thunder Client</span>
            <SiThunderstore style={{color: "#84648A"}}/>
          </div>
          <div className="skill">
            <span className="skill-name">Axios</span>
            <SiAxios style={{color: "orange"}}/>
          </div>
          
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
