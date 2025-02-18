// Header.js
import React from 'react';
import './Header.css';
import GoogleLoginButton from './components/GoogleLoginButton';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-left">
        <h1>Ankur Verma</h1>
        <p>Software Engineer</p>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <GoogleLoginButton />
      </div>
    </header>
  );
};

export default Header;
