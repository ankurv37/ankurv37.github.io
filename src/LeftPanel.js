import React from 'react';
import './LeftPanel.css';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="section">
        <h2>Resume</h2>
        <div className="content">This is the content of the Resume section.</div>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <div className="content">This is the content of the Projects section.</div>
      </div>
      <div className="section">
        <h2>Blogs</h2>
        <div className="content">This is the content of the Blogs section.</div>
      </div>
      <div className="section">
        <h2>Contact</h2>
        <div className="content">This is the content of the Contact section.</div>
      </div>
    </div>
  );
};

export default LeftPanel;

/* 
// LeftPanel.js
import React from 'react';
import './LeftPanel.css';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="section">
        <h3>Resume</h3>
        <div className="content">
          <p>Content for Resume</p>
        </div>
      </div>
      <div className="section">
        <h3>Projects</h3>
        <div className="content">
          <p>Content for Projects</p>
        </div>
      </div>
      <div className="section">
        <h3>Blogs</h3>
        <div className="content">
          <p>Content for Blogs</p>
        </div>
      </div>
      <div className="section">
        <h3>Contact</h3>
        <div className="content">
          <p>Content for Contact</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
 */
