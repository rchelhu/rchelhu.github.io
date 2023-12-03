import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import portraitImage from './images/portrait.png';
import githubLogo from './images/github-logo.png';
import linkedinLogo from './images/linkedin-logo.png';
import emailLogo from './images/email-logo.png';

function HomePage() {
let navigate = useNavigate();
  return (
    <div class="home-container">
        <div class="profile-picture-container">
            <img src={portraitImage} alt="Rachel" class="profile-picture" />
        </div>
        <div class="text-and-buttons">
            <div class="profile-section">
            <h1>Hi, I'm Rachel!</h1>
            <div class="personal-links">
                <a href="https://github.com/rchelhu" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" class="social-logo" />
                </a>
                <a href="https://www.linkedin.com/in/rchelhu" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" class="social-logo" />
                </a>
                <a href="mailto:rchelhu@berkeley.edu" target="_blank" rel="noopener noreferrer">
                <img src={emailLogo} alt="Email" class="social-logo" />
                </a>
            </div>
            <p>
                I am a Computer Science student at the University of California, Berkeley. I am
                passionate about utilizing technology as a medium for advocacy and creating products
                that uplift all people and communities. I also enjoy golf, skateboarding, roller coasters, video editing, and webtoons.
            </p>
            <div class="button-container">
                <button className="back-button" onClick={() => navigate('/portfolio')}>
                    PORTFOLIO
                </button>
                <a
                    href="./assets/resume.pdf"
                    className="back-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    RESUME
                </a>
            </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
