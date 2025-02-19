import React, { useState, useRef } from 'react';
import './LeftPanel.css';

const LeftPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(250);
  const panelRef = useRef(null);

  const handleResize = (e) => {
    if (e.buttons === 1) {
      const newWidth = e.clientX;
      if (newWidth >= 50 && newWidth <= 500) {
        setWidth(newWidth);
      }
    }
  };

  const togglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      ref={panelRef}
      className={`left-panel ${isCollapsed ? 'collapsed' : ''}`}
      style={{ width: isCollapsed ? '50px' : `${width}px` }}
    >
      <button className="toggle-button" onClick={togglePanel}>
        {isCollapsed ? '→' : '←'}
      </button>
      <div 
        className="resize-handle"
        onMouseDown={() => document.addEventListener('mousemove', handleResize)}
        onMouseUp={() => document.removeEventListener('mousemove', handleResize)}
      />
      {!isCollapsed && (
        <>
          <div className="section">
            <h2>Resume</h2>
            <div className="content">Professional experience and skills</div>
          </div>
          <div className="section">
            <h2>Projects</h2>
            <div className="content">Portfolio of completed projects</div>
          </div>
          <div className="section">
            <h2>Blogs</h2>
            <div className="content">Technical articles and insights</div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftPanel;