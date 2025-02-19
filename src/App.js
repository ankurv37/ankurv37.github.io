import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import { GoogleOAuthProvider } from '@react-oauth/google';

const AppContainer = styled.div`
  background: linear-gradient(45deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  color: #ffffff;
`;

function App() {
  return (
    <GoogleOAuthProvider clientId="32191415057-35gi9jqbrp086pkob8oorvh25hgjg8pf.apps.googleusercontent.com">
      <Router>
        <AppContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <MainContent />
          </motion.div>
        </AppContainer>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;