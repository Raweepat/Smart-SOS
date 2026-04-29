import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Order of sections from bottom to top
      const sections = ['contact', 'case-studies', 'dashboard', 'devices'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // 150px offset to trigger the active state slightly before the section hits the very top
          if (window.scrollY >= element.offsetTop - 150) {
            current = section;
            break;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

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
          <li className="nav-item"><a href="#" className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>หน้าหลัก</a></li>
          <li className="nav-item"><a href="#devices" className={`nav-link ${activeTab === 'devices' ? 'active' : ''}`} onClick={() => setActiveTab('devices')}>อุปกรณ์และเซนเซอร์</a></li>
          <li className="nav-item"><a href="#dashboard" className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>ระบบแดชบอร์ดสำหรับเจ้าหน้าที่</a></li>
          <li className="nav-item"><a href="#case-studies" className={`nav-link ${activeTab === 'case-studies' ? 'active' : ''}`} onClick={() => setActiveTab('case-studies')}>ขั้นตอนการทำงาน</a></li>
          <li className="nav-item"><a href="#contact" className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>ติดต่อขอสาธิตระบบ</a></li>
        </ul>

        {/* CTA Button */}
        <div className="nav-cta">
          <button className="btn btn-primary">ขอเอกสารโครงการ</button>
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
          <li><a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>หน้าหลัก</a></li>
          <li><a href="#devices" className={activeTab === 'devices' ? 'active' : ''} onClick={() => handleNavClick('devices')}>อุปกรณ์และเซนเซอร์</a></li>
          <li><a href="#dashboard" className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => handleNavClick('dashboard')}>ระบบแดชบอร์ดสำหรับเจ้าหน้าที่</a></li>
          <li><a href="#case-studies" className={activeTab === 'case-studies' ? 'active' : ''} onClick={() => handleNavClick('case-studies')}>ขั้นตอนการทำงาน</a></li>
          <li><a href="#contact" className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>ติดต่อขอสาธิตระบบ</a></li>
          <li><button className="btn btn-primary full-width mt-4">ขอเอกสารโครงการ</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
