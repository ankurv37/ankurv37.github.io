import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
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