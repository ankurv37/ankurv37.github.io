// Header.js
import React, { useState } from 'react';
import './Header.css';
import GoogleLoginButton from './components/GoogleLoginButton';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleHeader = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className={`site-header ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="header-toggle-button" onClick={toggleHeader}>
        {isCollapsed ? '▼' : '▲'}
      </button>
      <div className={`header-content ${isCollapsed ? 'hidden' : ''}`}>
        <div className="header-left">
          <h1>Ankur Verma</h1>
          <p>Software Engineer</p>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <GoogleLoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
