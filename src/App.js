import { useEffect, useRef } from "react";

//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";


function App() {

  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0"
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
  }

  useEffect(() => {
    AOS.init();
  },[])
  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const education = useRef();
  const contact = useRef();

  const scrollHandler = (e) => {
    console.log(e);
    window.scrollTo({ top: e.current.offsetTop, behavior: "smooth" });
  };


  const handleGitHubClick = () => {
    // Open GitHub profile in a new tab
    window.open('https://github.com/VinitaIsrani74', '_blank');
  };

  return (
    <div className="App">
      {/* navbar */}
      <div className="navbar">
        <TfiMenuAlt onClick={openMenu} className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
          <RxCross1 className="nav-mob-close" onClick={closeMenu} />
          <li onClick={() => scrollHandler(home)}>Home</li>
          <li onClick={() => scrollHandler(about)}>About</li>
          <li onClick={() => scrollHandler(skills)}>Skills</li>
          <li onClick={() => scrollHandler(projects)}>Projects</li>
          <li onClick={() => scrollHandler(education)}>Education</li>
          <li onClick={() => scrollHandler(contact)}>Contact</li>
        </ul>
        <div className="nav-connect"  onClick={handleGitHubClick}>Github Profile</div>
      </div>
      {/* navbar */}
      <div ref={home}>
        <Hero github={handleGitHubClick}/>
      </div>

      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={projects}>
        <Projects />
      </div>

      <div ref={education}>
        <Education />
      </div>

      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
