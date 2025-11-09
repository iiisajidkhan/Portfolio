import React, { useEffect, useRef, useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, index, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`project-card ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
    >
      <div className="project-image-container">
        {!imageLoaded && (
          <div className="project-image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="project-overlay"></div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

