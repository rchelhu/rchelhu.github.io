import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import googleLogo from './images/google-logo.png';
import cometClassifierLogo from './images/comet-classifier-logo.png';
import interactiveWorldLogo from './images/interactive-world-logo.png';
import personalWebsiteLogo from './images/personal-website-logo.png';
import recipeThymeLogo from './images/recipe-thyme-logo.png';
import golfLogo from './images/golf-logo.png';

const SkillTag = ({ skill }) => (
  <span className="skill-tag">{skill}</span>
);

function Portfolio() {
  let navigate = useNavigate();

  return (
    <div className="container">
    <div className="resume-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <span className="back-arrow">&#8592;</span>
      </button>
      <div className="resume-header">
        <h1>Experience & Portfolio</h1>
        <p>I am passionate about building products with user-centric, empathetic design processes.</p>
      </div>
      <div className="work-experience">
        <img src={googleLogo} alt="Google" className="company-logo-left" />
        <div className="experience-content">
          <h2>Google</h2>
          <p className="title">STEP (Software Engineering) Intern</p>
          <p className="date">05/2023 - 08/2023</p>
          <div className="project-details">
            <ul>
              <li>Implement swipe on message feature in Google Chat iOS to streamline/optimize core user interactions</li>
              <li>Launched feature internally; received QA and SRE/FDA (Feature Development Approval) approval</li>
              <li>Wrote 1400+ lines of Objective-C and Swift code, showcasing proficiency in new programming languages and practices</li>
              <li>Worked independently to lead project end-to-end: wrote 14-paged design document, developed three project prototypes, led several code design reviews with senior engineers, proposed UI/UX adjustments, cross-functional collaboration with Android engineers, wrote 15 total unit and integration (Fake Server E2E) tests, and spearheaded the feature launch (Longball) process</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="Objective-C" />
            <SkillTag skill="Swift" />
            <SkillTag skill="Unit & E2E Testing" />
          </div>
        </div>
      </div>
      
      <div className="work-experience">
        <div className="experience-content">
          <h2>Comet Classifier</h2>
          <p className="title">University of California, Berkeley</p>
          <p className="date">09/2023 - 11/2023</p>
          <div className="project-details-left">
            <ul>
              <li>Developed machine learning classifier with team of 5 to detect comets using Linear SVM and Jupyter Notebook (<a href="https://github.com/pranavdo/MeteoriteCOPF23" target="_blank" rel="noopener noreferrer">Github Link</a>)</li>
              <li>Used SVD for feature extraction of comets based on the sigma values in order to find most significant features from image data, which includes Semi-Major Axis, Sidereal Orbital Period, and Aphelion Distance</li>
              <li>Utilized SVM for precision classification, achieving a notable 0.98 test accuracy. Enhanced insights with 3D matplotlib visualizations, clearly depicting decision boundaries and support vectors.</li>
              <li>Used React.js and Flask-based backend to create website featuring classifier’s ability to identify comets based on selected features</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="Python" />
            <SkillTag skill="React.js" />
            <SkillTag skill="Machine Learning" />
          </div>
        </div>
        <img src={cometClassifierLogo} alt="Comet Classifier" className="comet-classifier-logo-right" />
      </div>

      <div className="work-experience">
        <img src={interactiveWorldLogo} alt="Google" className="interactive-world-logo-left" />
        <div className="experience-content">
          <h2>Interactive World Game</h2>
          <p className="title">University of California, Berkeley</p>
          <p className="date">11/2023 - 12/2023</p>
          <div className="project-details">
            <ul>
              <li>Developed engine capable of randomly generating unique, explorable worlds based on user input seeds (<span class="underline-text">Github link upon request</span>)</li>
              <li>Integrated Kruskal’s algorithm and various data structures to effectively manage room and hallway connectivity</li>
              <li>Engineered real-time interaction capabilities and lighting systems to enhance in-game navigation and elevate visual effects</li>
              <li>Implemented a save and load game feature, enabling players to save their progress and revisit their unique game worlds</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="Java" />
          </div>
        </div>
      </div>

      <div className="work-experience">
        <div className="experience-content">
          <h2>rchelhu.github.io</h2>
          <p className="title">Personal Website</p>
          <p className="date">12/2023 - Present</p>
          <div className="project-details-left">
            <ul>
              <li>Used React.js to create comprehensive personal website from scratch; optimized the site for desktop and mobile (<a href="https://github.com/rchelhu/rchelhu.github.io" target="_blank" rel="noopener noreferrer">Github Link</a>)</li>
              <li>Used Figma to develop a responsive, user-centric design that emphasizes ease of navigation and aesthetic appeal</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="React.js" />
            <SkillTag skill="UI/UX Design" />
          </div>
        </div>
        <img src={personalWebsiteLogo} alt="Personal Website" className="comet-classifier-logo-right" />
      </div>

      <div className="work-experience">
        <img src={recipeThymeLogo} alt="Recipe Thyme" className="recipethyme-logo-left" />
        <div className="experience-content">
          <h2>RecipeThyme</h2>
          <p className="title">2021 Technovation Challenge</p>
          <p className="date">10/2020 - 03/2021</p>
          <div className="project-details">
            <ul>
              <li>Used SwiftUI to design mobile application with 3 team members to help low-income families find healthy recipes (<a href="https://github.com/ilana27/RecipeThyme" target="_blank" rel="noopener noreferrer">Github Link</a>)</li>
              <li>Used Firebase database integration to save users’ information, Swift’s Form structure and picker/toggle elements to code
“Recipe Builder” function, and a JSON database of recipes to display recipe names in a user-friendly list</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="Swift" />
          </div>
        </div>
      </div>

      <div className="work-experience">
        <div className="experience-content">
          <h2>Chinese Youth Golf Foundation</h2>
          <p className="title">Founder, President, Website Developer</p>
          <p className="date">06/2020 - 07/2020</p>
          <div className="project-details-left">
            <ul>
              <li>Developed and designed <a href="https://chineseyouthgolffoundation.com" target="_blank" rel="noopener noreferrer">chineseyouthgolffoundation.com</a></li>
              <li>Used HTML/CSS for frontend features such as interactive flip cards and videos/photo galleries</li>
              <li>Used Javascript to create button that generates randomized golf tips</li>
              <li>Set up webserver by configuring the website backend, setting up HTTPS encryption, and wiring the frontend to serve data to clients</li>
            </ul>
          </div>
          <div className="skills-list">
            <SkillTag skill="HTML" />
            <SkillTag skill="CSS" />
            <SkillTag skill="Javascript" />
          </div>
        </div>
        <img src={golfLogo} alt="Golf" className="comet-classifier-logo-right" />
      </div>

    </div>
    </div>
  );
}

export default Portfolio;