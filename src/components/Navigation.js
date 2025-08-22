import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBlog, FaHome, FaProjectDiagram, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';
import GoogleLoginButton from './GoogleLoginButton';

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 149, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  color: #00ff95;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 149, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled(motion.nav)`
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
  
  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 280px;
    padding: 4rem 2rem 2rem;
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
  @media (max-width: 768px) {
    display: block;
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
      
      <Nav
        isOpen={isOpen}
        initial={false}
        animate={{
          x: isOpen ? 0 : window.innerWidth <= 768 ? -280 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <NavLinks>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/" onClick={closeMenu}><FaHome /> Home</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/blog" onClick={closeMenu}><FaBlog /> Blog</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/projects" onClick={closeMenu}><FaProjectDiagram /> Projects</StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <StyledLink to="/resume" onClick={closeMenu}><FaFileAlt /> Resume</StyledLink>
          </motion.div>
        </NavLinks>
        <GoogleLoginButton />
      </Nav>
    </>
  );
};

export default Navigation;