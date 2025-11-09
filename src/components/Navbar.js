import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo-container">
            <img 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Sajid Khan" 
              className="profile-pic"
            />
            <span className="logo-name">Sajid Khan</span>
          </div>
        </div>
        
        <div className="navbar-center">
          <Link 
            to="/work" 
            className={`nav-link ${location.pathname === '/' || location.pathname === '/work' ? 'active' : ''}`}
          >
            All
          </Link>
          <Link 
            to="/websites" 
            className={`nav-link ${location.pathname === '/websites' ? 'active' : ''}`}
          >
            Websites
          </Link>
          <Link 
            to="/saas" 
            className={`nav-link ${location.pathname === '/saas' ? 'active' : ''}`}
          >
            SaaS
          </Link>
          <Link 
            to="/landing-pages" 
            className={`nav-link ${location.pathname === '/landing-pages' ? 'active' : ''}`}
          >
            Landing Pages
          </Link>
          <Link 
            to="/mobile-apps" 
            className={`nav-link ${location.pathname === '/mobile-apps' ? 'active' : ''}`}
          >
            Mobile Apps
          </Link>
        </div>
        
        <div className="navbar-right">
          <Link to="/resume" className="get-in-touch-btn">
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

