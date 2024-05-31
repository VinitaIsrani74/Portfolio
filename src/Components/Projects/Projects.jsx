import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// project images
import RealEstate1 from '../../assets/projectImages/RealEstate/RealEstate1.png'
import RealEstate2 from '../../assets/projectImages/RealEstate/RealEstate2.png'
import RealEstate3 from '../../assets/projectImages/RealEstate/RealEstate3.png'
import SocialMedia from "../../assets/projectImages/Social-media.png";
import SocialMedia1 from "../../assets/projectImages/social-media1.png";
import SocialMedia2 from "../../assets/projectImages/social-media-2.png";
import Hangman1 from "../../assets/projectImages/hangmangame/Hangman1.png";
import Hangman2 from "../../assets/projectImages/hangmangame/Hangman2.png";
import Hangman3 from "../../assets/projectImages/hangmangame/Hangman3.png";
import AiImage1 from "../../assets/projectImages/aiImageGenerator/aiImageGenerator1.png";
import AiImage2 from "../../assets/projectImages/aiImageGenerator/aiImageGenerator2.png";
import AiImage3 from "../../assets/projectImages/aiImageGenerator/aiImageGenerator3.png";
import food1 from "../../assets/projectImages/foodRecipe/foodRecipe1.png";
import food2 from "../../assets/projectImages/foodRecipe/foodRecipe2.png";
import food3 from "../../assets/projectImages/foodRecipe/foodRecipe3.png";
import weather1 from "../../assets/projectImages/weatherApp/weather1.png";
import weather2 from "../../assets/projectImages/weatherApp/weather2.png";
import weather3 from "../../assets/projectImages/weatherApp/weather3.png";
import sps1 from "../../assets/projectImages/stonePaperScissor/stonePaperScissor1.png";
import sps2 from "../../assets/projectImages/stonePaperScissor/stonePaperScissor2.png";
import sps3 from "../../assets/projectImages/stonePaperScissor/stonePaperScissor3.png";
import addToCart1 from "../../assets/projectImages/addToCart/addToCart1.png";
import addToCart2 from "../../assets/projectImages/addToCart/addToCart2.png";
import addToCart3 from "../../assets/projectImages/addToCart/addToCart3.png";
import restAPI1 from "../../assets/projectImages/restAPI/restAPI1.png";
import restAPI2 from "../../assets/projectImages/restAPI/restAPI2.png";
import restAPI3 from "../../assets/projectImages/restAPI/restAPI3.png";

import "./projects.css";
const Projects = () => {
  const [projectsToShow, setProjectsToShow] = useState(2);
  const totalProjects = [
    {
      img: { url1: RealEstate3, url2: RealEstate2, url3: RealEstate1},
      projectTitle: "PropertyPulse (Real Estate MERN Project)",
      projectSubTitle:
        "Developed a full-stack social media platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      projectDesc: [
        "Built a MERN stack social media clone with Redux, CORS, Axios, Socket.IO, and JWT authentication.",
        "Leveraged MongoDB, Express.js, React.js, and Node.js for seamless full-stack development.",
        "REST API: Developed a RESTful API architecture to facilitate communication between the frontend and backend, ensuring efficient data transfer and interaction with the server.",
        "Redux managed state efficiently, while CORS ensured secure communication. ",
        "Axios handled HTTP requests, Socket.IO enabled real-time updates, and JWT authenticated users securely.",
      ],
      tech: ["MERN(MongoDB, Express.js, React.js, Node.js)", "Redux Toolkit", "RESTful API", "JWT Auth","Google Auth","Password Hashing", "Firebase"],
      technology:
        "Built using the MERN stack: MongoDB, Express.js, React.js, Node.js. along with Redux,REST API , JWT Authentication, Password Hashing, Axios, Cors. ",
      url: "https://github.com/VinitaIsrani74/Real-Estate-MarketPlace-MERN",
      liveUrl: "https://real-estate-marketplace-mern-qsrv.onrender.com/",
      demoUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7202226598438211584/",
    },
    {
      img: { url1: SocialMedia, url2: SocialMedia1, url3: SocialMedia2 },
      projectTitle: "Social-Media Clone (MERN Project)",
      projectSubTitle:
        "Developed a full-stack social media platform using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      projectDesc: [
        "Built a MERN stack social media clone with Redux, CORS, Axios, Socket.IO, and JWT authentication.",
        "Leveraged MongoDB, Express.js, React.js, and Node.js for seamless full-stack development.",
        "REST API: Developed a RESTful API architecture to facilitate communication between the frontend and backend, ensuring efficient data transfer and interaction with the server.",
        "Redux managed state efficiently, while CORS ensured secure communication. ",
        "Axios handled HTTP requests, Socket.IO enabled real-time updates, and JWT authenticated users securely.",
      ],
      tech: ["MERN(MongoDB, Express.js, React.js, Node.js)", "Redux", "RESTful API", "JWT Auth","Axios","Password Hashing","Cors"],
      technology:
        "Built using the MERN stack: MongoDB, Express.js, React.js, Node.js. along with Redux,REST API , JWT Authentication, Password Hashing, Axios, Cors. ",
      url: "https://github.com/VinitaIsrani74/Social-Media-Clone-MERN-Stack-Project",

      demoUrl:
        "https://www.linkedin.com/posts/vinita-israni-0b704a219_my-mern-stack-project-a-fully-functional-activity-7191494029866405889-Rfgb?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: { url1: addToCart1, url2: addToCart2, url3: addToCart3 },
      projectTitle: "Cart Master (Redux Toolkit)",
      projectSubTitle:
        "CartMaster is an advanced add-to-cart feature designed to streamline the online shopping process, offering users a fast and reliable way to manage their shopping cart. Built using Redux Toolkit, it ensures efficient state management and a smooth user experience.",
      projectDesc: [
        "Intuitive User Interface: Provides a straightforward and visually appealing design for easy cart management.",
        "Real-Time Updates: Updates the cart in real-time without requiring page reloads.",
        "Efficient State Management: Leverages Redux Toolkit for streamlined state management, ensuring fast and consistent updates.",
        
      ],
      tech: ["HTML (for layout)", "CSS (for styling)","React",  "Redux Toolkit for streamlined state management"],
     
      url: "https://github.com/VinitaIsrani74/Add-to-Cart-using-Redux-Toolkit",
      liveUrl: "https://add-to-cart-redux-toolkit.netlify.app/",
      demoUrl:
        "https://www.linkedin.com/posts/vinita-israni-0b704a219_redux-reduxtoolkit-activity-7195325654395965440-cel5?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: { url1: restAPI1, url2: restAPI2, url3: restAPI3 },
      projectTitle: "CRUD operations with RESTful APIs",
      projectSubTitle:
        "Developed a project to perform CRUD (Create, Read, Update, Delete) operations using a REST API built with Node.js, Express, and MongoDB. ",
      projectDesc: [
        "Create: Adds new records to the database via POST requests.",
        "Read: Retrieves records from the database via GET requests.",
        "Update: Modifies existing records via PUT/PATCH requests.",
        "Delete: Removes records from the database via DELETE requests.",
      ],
      tech: ["NodeJS", "ExpressJS(to build the REST API)", "MongoDB( NoSQL database for data storage)", "moongoose","Thunder Client(For testing API endpoints during development)"],

      url: "https://github.com/VinitaIsrani74/REST-API",
        demoUrl:
        "https://www.linkedin.com/posts/vinita-israni-0b704a219_project-overview-i-built-a-mini-project-activity-7192171092998832129-H74e?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: { url1: AiImage1, url2: AiImage2, url3: AiImage3 },
      projectTitle: "AI Image Generator",
      projectSubTitle:
        "The project generates images using an AI algorithm, providing users with unique and creative visual outputs based on their inputs or predefined parameters.",
      projectDesc: [
        
        "Enhanced skills in handling API responses and extracting relevant information.",
        "Interactive elements for user input and image display.",
        "Leveraged asynchronous JavaScript functions (such as fetch) to interact with the API seamlessly within the application",
        "Learned to parse JSON responses received from the OpenAI API, extracting relevant image data for display",
        "Real-time rendering of AI-generated images.",
      ],
      tech: ["HTML (for layout)", " CSS (for styling)", "JavaScript (for dynamic functionality)", "OpenAI (to generate images using AI algorithms)"],
  
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
    },
    {
      img: { url1: Hangman1, url2: Hangman2, url3: Hangman3 },
      projectTitle: "Hangman Game",
      projectSubTitle:
        "Developed a fully functional Hangman Game using HTML, CSS, JavaScript. The game challenges players to guess a hidden word by suggesting letters within a limited number of guesses.",
      projectDesc: [
        "Clean and intuitive design using HTML and CSS along with responsive design.",
        "Visual representation of the hangman drawing as the player makes incorrect guesses",
        "Option to play again after winning or losing.",
        "Handled win and loss conditions with appropriate feedback to the player.",
      ],
      tech: ["HTML (for layout)", " CSS (for styling)", "RESTful API", "JavaScript (for Game logic, interactivity and User input management.)"],
      
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
      liveUrl: "https://hangman-game-uncover-the-hidden-world.netlify.app/",
      demoUrl:
        "https://www.linkedin.com/posts/vinita-israni-0b704a219_i-am-thrilled-to-share-some-exciting-news-activity-7164997286161313792-7Czu?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: { url1: food1, url2: food2, url3: food3 },
      projectTitle: "Food Recipe",
      projectSubTitle:
        "The food recipe app allows users to search for recipes based on their preferences. It fetches recipe data from an external API using the Fetch method, async/await, and displays the results to the user.",
      projectDesc: [
        "Utilizes the Fetch API method with async/await to asynchronously request recipe data from the external API.",
        "Explored asynchronous programming concepts in JavaScript, understanding the importance of handling asynchronous tasks without blocking the main thread.",
      ],
      tech: ["HTML (for structuring the app's layout)", "CSS (for styling)", "JavaScript (for interactivity, User input management and for making asynchronous requests to the API)"],
      
      url: "https://github.com/VinitaIsrani74/Food-Recipe-App",
      liveUrl: "https://food-recipe-appp.netlify.app/",
      demoUrl:
        "https://www.linkedin.com/posts/vinita-israni-0b704a219_html5-css-javascript-activity-7164668025202298880-7Vrj?utm_source=share&utm_medium=member_desktop",
    },
    {
      img: { url1: weather1, url2: weather2, url3: weather3 },
      projectTitle:
        "Stay Ahead, Stay Informed: Your Personal Weather Forecast ",
      projectSubTitle:
        "This project Utilizes JavaScript to fetch data from the weather API and display it to users. This could include current temperature, humidity, wind speed.",
      projectDesc: [
        "Utilizes the Fetch API method with async/await to asynchronously request recipe data from the external API.",
        "Explored asynchronous programming concepts in JavaScript, understanding the importance of handling asynchronous tasks without blocking the main thread.",
        "Users also have the option to search for weather in specific locations by entering a city name or country name",
      ],
      tech: ["HTML (for structuring the app's layout)", "CSS (for styling)", "JavaScript (for interactivity, User input management and for making asynchronous requests to the API)"],
      
      url: "https://github.com/VinitaIsrani74/Weather-application",
      liveUrl: "https://weather-the-storm.netlify.app/",
    },
    {
      img: { url1: sps1, url2: sps2, url3: sps3 },
      projectTitle: "Rock vs. Paper vs. Scissors: Where Every Decision Counts",
      projectSubTitle:
        "A game built with HTML, CSS, and JavaScript. Players make their choice, compete against the computer, and track scores in this classic showdown. ",
      projectDesc: [
        "Updates the score based on the outcome of each round and displays it to the player.",
        "Compares the player's choice with the computer's choice to determine the winner of each round.",
        "Implementing the rules and logic of the stone-paper-scissors game would have sharpened my problem-solving skills, especially in translating real-world rules into code.",
      ],
      tech: ["HTML (for layout)", "CSS (for styling)", "JavaScript ( Provided the game's functionality, including user input handling, game logic, and updating the UI based on game outcomes.)"],
      
      url: "https://github.com/VinitaIsrani74/Hangman-Game",
      liveUrl: "https://hand-clash.netlify.app/",
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
                      <img
                        src={project.img.url1}
                        alt="img"
                        className="carousel-img"
                      />
                    </div>
                    <div className="carousel-div">
                      <img
                        src={project.img.url2}
                        alt="img"
                        className="carousel-img"
                      />
                    </div>
                    <div className="carousel-div">
                      <img
                        src={project.img.url3}
                        alt="alt"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>

              <div className="right">
                <h2 className="project-title">{project.projectTitle} </h2>
                
                <div className="project-desc">
                  {
                    project.tech.map((technology) => (
                      <div className="technology">#{technology}</div>
                    ))
                  }
                </div>
              
                <div className="buttons">
                  <a href={project.url}>
                    <button className="know-more-button">Repository</button>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl}>
                      <button className="live-link-button">Live Link</button>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl}>
                      <button className="demo-button">Demo</button>
                    </a>
                  )}

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
