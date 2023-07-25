import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <div className="right-panel">
        {/* Right Panel Content */}
        <h1>Welcome to My Landing Page</h1>
        <p>This is a simple landing page with four sections on the left panel.</p>
      </div>
    </div>
  );
}

export default App;
