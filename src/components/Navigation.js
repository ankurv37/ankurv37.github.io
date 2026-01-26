import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBlog, FaHome, FaProjectDiagram, FaFileAlt, FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
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
  background: #1a1a1a;
  border-right: 1px solid rgba(0, 255, 149, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  
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
  gap: 1.5rem;
`;

const Dropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  text-align: left;
  
  &:hover {
    color: #00ff95;
    background: rgba(0, 255, 149, 0.1);
  }
  
  svg:first-child {
    margin-right: 0.5rem;
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 200px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 149, 0.2);
  border-radius: 12px;
  padding: 0.5rem;
  margin-left: 1rem;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 100;
  
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    border-left: 2px solid rgba(0, 255, 149, 0.3);
    border-radius: 0;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
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
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };
  
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

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
          <Dropdown>
            <motion.div whileHover={{ scale: 1.02 }}>
              <DropdownButton onClick={() => toggleDropdown('blog')}>
                <span><FaBlog /> Blog {openDropdown === 'blog' ? <FiChevronUp /> : <FiChevronDown />}</span>
              </DropdownButton>
            </motion.div>
            <AnimatePresence>
              {openDropdown === 'blog' && (
                <DropdownContent
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/blog" onClick={closeMenu}>All Posts</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/blog#react" onClick={closeMenu}>React Guide</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/blog#kubernetes" onClick={closeMenu}>Kubernetes</StyledLink>
                  </motion.div>
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>
          <Dropdown>
            <motion.div whileHover={{ scale: 1.02 }}>
              <DropdownButton onClick={() => toggleDropdown('projects')}>
                <span><FaProjectDiagram /> Projects {openDropdown === 'projects' ? <FiChevronUp /> : <FiChevronDown />}</span>
              </DropdownButton>
            </motion.div>
            <AnimatePresence>
              {openDropdown === 'projects' && (
                <DropdownContent
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/projects" onClick={closeMenu}>All Projects</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/projects#portfolio" onClick={closeMenu}>Portfolio</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/projects#wallstreetbets" onClick={closeMenu}>WallStreetBets</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/projects#applepie" onClick={closeMenu}>Apple Pie</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/projects#faceoff" onClick={closeMenu}>Face-Off</StyledLink>
                  </motion.div>
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>
          <Dropdown>
            <motion.div whileHover={{ scale: 1.02 }}>
              <DropdownButton onClick={() => toggleDropdown('recipes')}>
                <span><FaCode /> Recipes {openDropdown === 'recipes' ? <FiChevronUp /> : <FiChevronDown />}</span>
              </DropdownButton>
            </motion.div>
            <AnimatePresence>
              {openDropdown === 'recipes' && (
                <DropdownContent
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/github" onClick={closeMenu}>GitHub</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/chaos" onClick={closeMenu}>Chaos</StyledLink>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <StyledLink to="/pongwars" onClick={closeMenu}>PongWars</StyledLink>
                  </motion.div>
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>
        </NavLinks>
        <GoogleLoginButton />
      </Nav>
    </>
  );
};

export default Navigation;