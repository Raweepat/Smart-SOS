import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <div className="logo">
          <Activity className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-title">Smart SOS</span>
            <span className="logo-subtitle">Elderly Monitoring</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
          <li className="nav-item"><a href="#devices" className="nav-link">Smart Devices</a></li>
          <li className="nav-item"><a href="#dashboard" className="nav-link">Dashboard System</a></li>
          <li className="nav-item"><a href="#case-studies" className="nav-link">Case Studies</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact / Request Demo</a></li>
        </ul>

        {/* CTA Button */}
        <div className="nav-cta">
          <button className="btn btn-primary">Request Proposal</button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#devices" onClick={() => setIsMenuOpen(false)}>Smart Devices</a></li>
          <li><a href="#dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard System</a></li>
          <li><a href="#case-studies" onClick={() => setIsMenuOpen(false)}>Case Studies</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact / Request Demo</a></li>
          <li><button className="btn btn-primary full-width mt-4">Request Proposal</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
