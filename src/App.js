import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
    <GoogleOAuthProvider clientId="32191415057-35gi9jqbrp086pkob8oorvh25hgjg8pf.apps.googleusercontent.com">
      <Router>
        <div className="app-container">
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
    </GoogleOAuthProvider>
  );
}

export default App;