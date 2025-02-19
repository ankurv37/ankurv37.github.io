import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBlog, FaHome, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';
import GoogleLoginButton from './GoogleLoginButton';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  
  &:hover {
    color: #00ff95;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLinks>
        <motion.div whileHover={{ scale: 1.1 }}>
          <StyledLink to="/"><FaHome /> Home</StyledLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <StyledLink to="/blog"><FaBlog /> Blog</StyledLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <StyledLink to="/projects"><FaProjectDiagram /> Projects</StyledLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <StyledLink to="/resume"><FaFileAlt /> Resume</StyledLink>
        </motion.div>
      </NavLinks>
      <GoogleLoginButton />
    </Nav>
  );
};

export default Navigation;