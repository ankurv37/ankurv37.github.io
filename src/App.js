// App.js
import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LeftPanel />
        <div className="right-panel">
          <div className="title">
            <h1>Welcome to Calculus</h1>
          </div>
          <p>This is a simple landing page with four sections on the left panel.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
