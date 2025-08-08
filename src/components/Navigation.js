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
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(0, 255, 149, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 149, 0.05) 0%, transparent 50%, rgba(0, 212, 255, 0.05) 100%);
    pointer-events: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 149, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: #00ff95;
    background: rgba(0, 255, 149, 0.1);
    transform: translateX(8px);
    box-shadow: 0 4px 15px rgba(0, 255, 149, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2) rotate(5deg);
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