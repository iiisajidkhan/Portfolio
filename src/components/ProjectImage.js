import React from 'react';
import './ProjectImage.css';

const ProjectImage = ({ project }) => {
  const getImageStyle = () => {
    const styles = {
      1: { // Apple Store Redesign
        background: 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%)',
        color: '#1d1d1f',
        pattern: 'apple'
      },
      2: { // Web Splash
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: '#ffffff',
        pattern: 'websplash'
      },
      3: { // Stark
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        color: '#00ff88',
        pattern: 'stark'
      },
      4: { // Xtem
        background: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)',
        color: '#0066ff',
        pattern: 'xtem'
      },
      5: { // Plantmi Landing Page
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a2a 100%)',
        color: '#ff69b4',
        pattern: 'plantmi'
      },
      6: { // Freely Dashboard
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        color: '#0066ff',
        pattern: 'dashboard'
      },
      7: { // QuickBook
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        color: '#333333',
        pattern: 'book'
      },
      8: { // E-Commerce Platform
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        color: '#ff6600',
        pattern: 'ecommerce'
      },
      9: { // Mobile Banking App
        background: 'linear-gradient(135deg, #0066cc 0%, #004499 100%)',
        color: '#ffffff',
        pattern: 'banking'
      },
      10: { // Fitness Tracker
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a1a0a 100%)',
        color: '#00ff88',
        pattern: 'fitness'
      },
      11: { // Music Streaming App
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a2a 100%)',
        color: '#ff0066',
        pattern: 'music'
      },
      12: { // Travel Booking Platform
        background: 'linear-gradient(135deg, #0066ff 0%, #0044cc 100%)',
        color: '#ffffff',
        pattern: 'travel'
      }
    };
    return styles[project.id] || styles[1];
  };

  const style = getImageStyle();

  return (
    <div className="project-image-wrapper" style={{ background: style.background }}>
      <div className="project-image-content" style={{ color: style.color }}>
        <div className={`project-pattern ${style.pattern}`}>
          <div className="project-title-overlay">{project.title}</div>
          <div className="project-mockup-elements">
            {style.pattern === 'apple' && (
              <>
                <div className="mockup-phone"></div>
                <div className="mockup-phone"></div>
                <div className="mockup-phone"></div>
              </>
            )}
            {style.pattern === 'websplash' && (
              <>
                <div className="mockup-form">
                  <div className="form-field"></div>
                  <div className="form-field"></div>
                  <div className="form-button"></div>
                </div>
              </>
            )}
            {style.pattern === 'stark' && (
              <>
                <div className="mockup-card"></div>
                <div className="mockup-card"></div>
                <div className="mockup-card"></div>
              </>
            )}
            {style.pattern === 'xtem' && (
              <>
                <div className="mockup-wallet"></div>
                <div className="mockup-chart"></div>
              </>
            )}
            {style.pattern === 'plantmi' && (
              <>
                <div className="mockup-flower"></div>
                <div className="mockup-text-large">Plantmi</div>
              </>
            )}
            {style.pattern === 'dashboard' && (
              <>
                <div className="mockup-sidebar"></div>
                <div className="mockup-chart-area"></div>
                <div className="mockup-stats"></div>
              </>
            )}
            {style.pattern === 'book' && (
              <>
                <div className="mockup-book"></div>
                <div className="mockup-book"></div>
                <div className="mockup-book"></div>
              </>
            )}
            {style.pattern === 'ecommerce' && (
              <>
                <div className="mockup-product"></div>
                <div className="mockup-product"></div>
                <div className="mockup-product"></div>
              </>
            )}
            {style.pattern === 'banking' && (
              <>
                <div className="mockup-card-visual"></div>
                <div className="mockup-balance"></div>
              </>
            )}
            {style.pattern === 'fitness' && (
              <>
                <div className="mockup-ring"></div>
                <div className="mockup-stats-grid"></div>
              </>
            )}
            {style.pattern === 'music' && (
              <>
                <div className="mockup-album"></div>
                <div className="mockup-album"></div>
                <div className="mockup-album"></div>
              </>
            )}
            {style.pattern === 'travel' && (
              <>
                <div className="mockup-map"></div>
                <div className="mockup-booking-card"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;

