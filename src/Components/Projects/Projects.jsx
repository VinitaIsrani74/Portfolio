import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// project images
import SocialMedia from "../../assets/projectImages/Social-media.png";
import SocialMedia1 from "../../assets/projectImages/social-media1.png";
import SocialMedia2 from "../../assets/projectImages/social-media-2.png";
import Hangman1 from '../../assets/projectImages/hangmangame/Hangman1.png'
import Hangman2 from '../../assets/projectImages/hangmangame/Hangman2.png'
import Hangman3 from '../../assets/projectImages/hangmangame/Hangman3.png'
import AiImage1 from '../../assets/projectImages/aiImageGenerator/aiImageGenerator1.png'
import AiImage2 from '../../assets/projectImages/aiImageGenerator/aiImageGenerator2.png'
import AiImage3 from '../../assets/projectImages/aiImageGenerator/aiImageGenerator3.png'
import food1 from '../../assets/projectImages/foodRecipe/foodRecipe1.png'
import food2 from '../../assets/projectImages/foodRecipe/foodRecipe2.png'
import food3 from '../../assets/projectImages/foodRecipe/foodRecipe3.png'
import weather1 from '../../assets/projectImages/weatherApp/weather1.png'
import weather2 from '../../assets/projectImages/weatherApp/weather2.png'
import weather3 from '../../assets/projectImages/weatherApp/weather3.png'
import sps1 from '../../assets/projectImages/stonePaperScissor/stonePaperScissor1.png'
import sps2 from '../../assets/projectImages/stonePaperScissor/stonePaperScissor2.png'
import sps3 from '../../assets/projectImages/stonePaperScissor/stonePaperScissor3.png'


import "./projects.css";
const Projects = () => {
  const [projectsToShow, setProjectsToShow] = useState(2);
  const totalProjects = [
    {
      img: {url1: SocialMedia,url2: SocialMedia1, url3: SocialMedia2},
      projectTitle: "Social-Media Clone",
      projectSubTitle:
        "Developed a full-stack social media platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      projectDesc: [
        "Built a MERN stack social media clone with Redux, CORS, Axios, Socket.IO, and JWT authentication.",
        "Leveraged MongoDB, Express.js, React.js, and Node.js for seamless full-stack development.",
        "REST API: Developed a RESTful API architecture to facilitate communication between the frontend and backend, ensuring efficient data transfer and interaction with the server.",
        "Redux managed state efficiently, while CORS ensured secure communication. ",
        "Axios handled HTTP requests, Socket.IO enabled real-time updates, and JWT authenticated users securely.",
      ],
      technology:
        "Built using the MERN stack: MongoDB, Express.js, React.js, Node.js. along with Redux,REST API , JWT Authentication, Password Hashing, Axios, Cors. ",
        url: "https://github.com/VinitaIsrani74/Social-Media-Clone-MERN-Stack-Project"
    },
    {
      img: {url1: AiImage1,url2: AiImage2, url3: AiImage3},
      projectTitle: "AI Image Generator",
      projectSubTitle:
        "The project generates images using an AI algorithm, providing users with unique and creative visual outputs based on their inputs or predefined parameters.",
      projectDesc: [
        "Learned to parse and utilize JSON data returned by the OpenAI API.",
        "Enhanced skills in handling API responses and extracting relevant information.",
        "Interactive elements for user input and image display.",
        "Leveraged asynchronous JavaScript functions (such as fetch) to interact with the API seamlessly within the application",
        "Learned to parse JSON responses received from the OpenAI API, extracting relevant image data for display",
        "Real-time rendering of AI-generated images.",
       
        "Integrated async/await for asynchronous programming."
      ],
      technology:
        "Built using HTML (for layout), CSS (for styling), JavaScript (for dynamic functionality) and OpenAI (to generate images using AI algorithms) ",
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
    },
    {
      img: {url1:Hangman1,url2: Hangman2, url3:Hangman3},
      projectTitle: "Hangman Game",
      projectSubTitle:
        "Developed a fully functional Hangman Game using HTML, CSS, JavaScript. The game challenges players to guess a hidden word by suggesting letters within a limited number of guesses.",
      projectDesc: [
        "Clean and intuitive design using HTML and CSS along with responsive design.",
        "Visual representation of the hangman drawing as the player makes incorrect guesses",
        "Option to play again after winning or losing.",
        "Handled win and loss conditions with appropriate feedback to the player.",
      ],
      technology:
        "Built using HTML (for layout), CSS (for styling) and JavaScript (for Game logic, interactivity and User input management.) ",
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
    },
    {
      img: {url1:food1,url2: food2, url3:food3},
      projectTitle: "Food Recipe",
      projectSubTitle:
        "The food recipe app allows users to search for recipes based on their preferences. It fetches recipe data from an external API using the Fetch method, async/await, and displays the results to the user.",
      projectDesc: [
        "Utilizes the Fetch API method with async/await to asynchronously request recipe data from the external API.",
        "Explored asynchronous programming concepts in JavaScript, understanding the importance of handling asynchronous tasks without blocking the main thread.",
        
      ],
      technology:
        "Built using HTML (for structuring the app's layout), CSS (for styling) and JavaScript (for interactivity, User input management and for making asynchronous requests to the API) ",
      url: "https://github.com/VinitaIsrani74/Food-Recipe-App",
    },
    {
      img: {url1: weather1,url2: weather2, url3:weather3},
      projectTitle: "Stay Ahead, Stay Informed: Your Personal Weather Forecast ",
      projectSubTitle:
        "This project Utilizes JavaScript to fetch data from the weather API and display it to users. This could include current temperature, humidity, wind speed.",
      projectDesc: [
        "Utilizes the Fetch API method with async/await to asynchronously request recipe data from the external API.",
        "Explored asynchronous programming concepts in JavaScript, understanding the importance of handling asynchronous tasks without blocking the main thread.",
        "Users also have the option to search for weather in specific locations by entering a city name or country name"
      ],
      technology:
        "Built using HTML (for structuring the app's layout), CSS (for styling) and JavaScript (for interactivity, User input management and for making asynchronous requests to the API) ",
      url: "https://github.com/VinitaIsrani74/Weather-application",
    },
    {
      img: {url1: sps1,url2: sps2, url3:sps3},
      projectTitle: "Rock vs. Paper vs. Scissors: Where Every Decision Counts",
      projectSubTitle:
        "A game built with HTML, CSS, and JavaScript. Players make their choice, compete against the computer, and track scores in this classic showdown. ",
      projectDesc: [
        "Updates the score based on the outcome of each round and displays it to the player.",
        "Compares the player's choice with the computer's choice to determine the winner of each round.",
        "Implementing the rules and logic of the stone-paper-scissors game would have sharpened my problem-solving skills, especially in translating real-world rules into code."
      ],
      technology:
        "Built using HTML (for layout), CSS (for styling) and JavaScript ( Provided the game's functionality, including user input handling, game logic, and updating the UI based on game outcomes.) ",
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
    },
   
  ];



  const handleShowMore = () => {
    setProjectsToShow((prevCount) => prevCount + 2); // Increase the count by 2
  };



  return (
    <div className="projects" data-aos="zoom-in">
      <div className="container">
        <h2 className="section-heading">
          Portfolio and Personal Websites: Projects
        </h2>

        <div className="all-items">
          {totalProjects.slice(0, projectsToShow).map((project) => (
            <div className="item">
              <div className="left">
                <div className="project-img">



                <Carousel
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlaySpeed={2000}
                slidesToSlide={1}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                className="carousel-container"
                >
                <div className="carousel-div">
                    <img src={project.img.url1} alt="img" className="carousel-img" />
                 
                </div>
                <div className="carousel-div">
                    <img src={project.img.url2} alt="img" className="carousel-img" />
                  
                </div>
                <div className="carousel-div">
                    <img src={project.img.url3} alt="alt" className="carousel-img" />
                    
                </div>
            </Carousel>

                </div>
              </div>

              <div className="right">
                <h2 className="project-title">{project.projectTitle} </h2>
                <h3 className="project-sub-title">{project.projectSubTitle}</h3>
                <div className="project-desc">
                  <ul>
                    {project.projectDesc.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </ul>
                </div>
                <strong>Technology Used:{project.technology}</strong>
                <div className="buttons">
                 <a href={project.url} ><button className="know-more-button">Repository</button></a> 
                  {/* <button className="link-btn">
                    <span>Preview</span>
                    <FaExternalLinkAlt />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projectsToShow < totalProjects.length && (
          <button onClick={handleShowMore} className="show-more">
            Show More Work
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
