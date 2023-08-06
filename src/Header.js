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
      <ul className="social-links">
        <li>
          <img
            src="/facebook-logo.png"
            alt="Facebook"
            onClick={() => handleSocialMediaClick('https://www.facebook.com/')}
          />
        </li>
        <li>
          <img
            src="/linkedin-logo.png"
            alt="LinkedIn"
            onClick={() => handleSocialMediaClick('https://www.linkedin.com/')}
          />
        </li>
        <li>
          <img
            src="/twitter-logo.png"
            alt="Twitter"
            onClick={() => handleSocialMediaClick('https://www.twitter.com/')}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
