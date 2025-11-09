import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="https://via.placeholder.com/300/ffffff/000000?text=Sajid+Khan" 
              alt="Sajid Khan"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Sajid Khan, a passionate designer and developer with a focus on 
              creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              With expertise in UI/UX design, frontend development, and prototyping, 
              I bring ideas to life through thoughtful design and clean code.
            </p>
            <p>
              I'm always excited to work on new projects and collaborate with amazing 
              teams to create something meaningful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

