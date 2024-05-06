import React from "react";
import "./about.css";
import AboutImage from "../../assets/aimage2.jpg";

const About = () => {
  return (
    <div className="about-container" data-aos="zoom-in">
      <div className="about-left">
        <div className="img-bg">
        <img src={AboutImage} alt="aboutimg" className="about-image" />
        </div>
      </div>

      <div className="about-right">
        <div className="aheading">
          <h3>Vinita Israni</h3>
          <h4>Full Stack Developer: Coding fluency, from UI to database.</h4>
        </div>
        <div className="desc">
          While my professional background may not include direct experience in
          MERN stack development, I've actively sought out opportunities to
          expand my knowledge and skills in this area. Through personal projects, I've gained proficiency in building
          full-stack applications using MongoDB, Express.js, React.js, and
          Node.js. I'm eager to leverage these skills in a professional setting
          and contribute to innovative projects at your company.
        </div>
        <div className="desc">I'll give my all if given the chance, ready to dive into every task. With six months of part-time experience as a MERN stack developer, I'm eager to learn and grow. I've tasted the thrill of coding online, and I'm hungry for more challenges. Give me the opportunity, and I'll prove my dedication and passion for this craft.</div>
      </div>
    </div>
  );
};

export default About;
