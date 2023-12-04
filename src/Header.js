// Header.js
import React from 'react';
import './Header.css'; // Create a separate CSS file for Header component styles

const Header = () => {
  // Event handler for clicking on social media links
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <header className="site-header">
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
