import React from "react";
import "./about.css";
import Image from "../../assets/about-image.jpg";
import Image2 from "../../assets/about-img-2.png";


const About = () => {
  return (
    <div className="about-container" data-aos="zoom-in">
      {/* top-section */}
      <div className="topSection">
        <div className="topSection-left">
          <h2 className="about-section-heading">
            <span> Hi! I'm Vinita Israni-</span>
            <br />
            Eager mind, endless possibilities in tech.
          </h2>
          <hr />
          <br />
          
        </div>
        <div className="topSection-right">


          <img src={Image} alt="" className="about-image" />
        </div>
      </div>

      {/* bottom-section */}
      <div className="bottomSection">
        <img src={Image2} alt="" className="about-img" />
        <div className="bottomSection-right">
          <div className="bottomSection-heading">About Me and My Work</div>
          <p>

          In my project section, you'll see my journey unfold, showcasing my
            determination to learn and grow. Each project I've undertaken
            reflects my passion for mastering new technologies and my
            willingness to push myself further.
           
            <br />
            <br />
            Technology excites me, and I'm ready to absorb everything I can. If
            you bring me on board, you'll get my full commitment and effort. I'm
            eager to prove myself and contribute to the company's success. With
            me, you'll have someone who's always eager to learn and grow
            alongside your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
