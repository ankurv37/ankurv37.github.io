// App.js
import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import Header from './Header';
import GoogleLoginButton from './components/GoogleLoginButton'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Resume from './components/Resume';
import OAuth2Callback from './components/OAuth2Callback';

function App() {
  return (
    <Router>
      <div className="App">
        <LeftPanel />
        <div className="main-container">
          <Header />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/oauth2callback" element={<OAuth2Callback />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
