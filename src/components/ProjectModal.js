import React, { useEffect, useRef } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const images = project.images || [project.image];

  return (
    <div className="project-modal-overlay">
      <div className="project-modal" ref={modalRef}>
        <button className="project-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="project-modal-content">
          <div className="project-modal-header">
            <h2 className="project-modal-title">{project.title}</h2>
            <p className="project-modal-description">{project.description}</p>
          </div>

          <div className="project-modal-images" ref={imagesRef}>
            {images.map((image, index) => (
              <div key={index} className="project-modal-image-wrapper">
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="project-modal-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

