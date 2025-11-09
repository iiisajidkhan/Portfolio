import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Home />} />
      <Route path="/websites" element={<Home />} />
      <Route path="/saas" element={<Home />} />
      <Route path="/landing-pages" element={<Home />} />
      <Route path="/mobile-apps" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

