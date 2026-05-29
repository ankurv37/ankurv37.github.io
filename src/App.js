import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import RouteMetadata from './components/RouteMetadata';
import Starfield from './components/Starfield';
import './App.css';

function App() {
  useEffect(() => {
    // Handle GitHub Pages SPA routing
    // Check if we have a redirected path from 404.html
    const search = window.location.search;
    if (search.includes('/?/')) {
      const path = search.replace('/?/', '').replace(/&/g, '?').replace(/~and~/g, '&');
      window.history.replaceState(null, null, path + window.location.hash);
    }
  }, []);

  return (
    <Router>
      <RouteMetadata />
      <div className="app-container">
        <Starfield />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <MainContent />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
