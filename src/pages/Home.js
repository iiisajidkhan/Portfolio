import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Pagination from '../components/Pagination';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 12;

  // Get category from URL
  const getCategoryFromPath = () => {
    const path = location.pathname;
    if (path === '/websites') return 'websites';
    if (path === '/saas') return 'saas';
    if (path === '/landing-pages') return 'landing-pages';
    if (path === '/mobile-apps') return 'mobile-apps';
    return 'all';
  };

  const currentCategory = getCategoryFromPath();

  // Projects inspired by Dribbble (https://dribbble.com/)
  const allProjects = [
    // Websites
    { id: 1, title: 'Business Consulting Website Design', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=90'] },
    { id: 2, title: 'CRM Website Design', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90'] },
    { id: 3, title: 'Personal Portfolio Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90'] },
    { id: 4, title: 'E-Commerce Website Redesign', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=90'] },
    { id: 5, title: 'Creative Agency Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=90' },
    { id: 6, title: 'Tech Startup Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90' },
    { id: 7, title: 'Restaurant Website Design', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=90' },
    { id: 8, title: 'Real Estate Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=90' },
    { id: 37, title: 'Education Platform Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=90' },
    { id: 38, title: 'Healthcare Website Design', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&q=90' },
    { id: 39, title: 'Fashion E-Commerce Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=90' },
    { id: 40, title: 'News Platform Website', description: 'Web Design', category: 'websites', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&q=90' },
    
    // SaaS
    { id: 9, title: 'CarePlus — Healthcare SaaS Website Design', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=90'] },
    { id: 10, title: 'Delivery Management SaaS Design', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90'] },
    { id: 11, title: 'Dashboard for a Logistics Product', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90'] },
    { id: 12, title: 'Project Management Dashboard', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90' },
    { id: 13, title: 'CRM System Dashboard', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90' },
    { id: 14, title: 'Analytics Dashboard UI', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90' },
    { id: 15, title: 'Task Management SaaS', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=90' },
    { id: 16, title: 'Team Collaboration Platform', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=90' },
    { id: 41, title: 'Time Tracking Dashboard', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90' },
    { id: 42, title: 'Email Marketing SaaS', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90' },
    { id: 43, title: 'Finance SaaS Dashboard', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90' },
    { id: 44, title: 'HR Management Platform', description: 'SaaS Design', category: 'saas', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=90' },
    
    // Landing Pages
    { id: 17, title: 'Personal Portfolio Website — Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=90' },
    { id: 18, title: 'Plantmi Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&q=90' },
    { id: 19, title: 'SaaS Product Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90' },
    { id: 20, title: 'App Launch Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=90' },
    { id: 21, title: 'Product Launch Landing', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=90' },
    { id: 22, title: 'Service Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=90' },
    { id: 23, title: 'Course Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=90' },
    { id: 24, title: 'Startup Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=90' },
    { id: 45, title: 'Tech Product Landing', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90' },
    { id: 46, title: 'Creative Agency Landing', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=90' },
    { id: 47, title: 'Digital Product Landing', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=90' },
    { id: 48, title: 'Event Landing Page', description: 'Landing Page', category: 'landing-pages', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&q=90' },
    
    // Mobile Apps
    { id: 25, title: 'Banking App Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&q=90'] },
    { id: 26, title: 'Food Delivery App UI Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop&q=90'] },
    { id: 27, title: 'Mobile App for Finance', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=90', images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&q=90', 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1200&h=800&fit=crop&q=90'] },
    { id: 28, title: 'Logistics & Supply Chain Management Mobile App', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=90' },
    { id: 29, title: 'My Notes App — Smart AI Assistant', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=90' },
    { id: 30, title: 'AI Voice Chat Assistant App', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=90' },
    { id: 31, title: 'Fitness App UI Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=90' },
    { id: 32, title: 'Music App Interface', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=90' },
    { id: 33, title: 'Social Media App Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=90' },
    { id: 34, title: 'Travel App UI Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&q=90' },
    { id: 35, title: 'Weather App Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&h=600&fit=crop&q=90' },
    { id: 36, title: 'Shopping App UI Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=90' },
    { id: 49, title: 'Health Tracking App', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=90' },
    { id: 50, title: 'E-Learning Mobile App', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=90' },
    { id: 51, title: 'Task Manager App UI', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=90' },
    { id: 52, title: 'Photo Editor App Design', description: 'Mobile Design', category: 'mobile-apps', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&q=90' }
  ];

  // Filter projects by category
  const filteredProjects = currentCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === currentCategory);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when category changes
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className={`projects-grid ${isLoaded ? 'loaded' : ''}`}>
          {currentProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={handleProjectClick}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;

