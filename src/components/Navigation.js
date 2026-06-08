import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaBars,
  FaBlog,
  FaCompass,
  FaFileAlt,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaProjectDiagram,
  FaTimes,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import MissionStatusCard from './MissionStatusCard';
import { launchMissions, posts, profileLinks, projects } from '../content/siteContent';

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.8rem;
  color: #b8c0d4;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  padding: 1.6rem 1rem;
  background: rgba(10, 12, 20, 0.97);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 280px;
    padding-top: 4.2rem;
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavHeader = styled.div`
  padding: 0.2rem 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const BrandTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #e8ecf4;
`;

const BrandSubtext = styled.p`
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(184, 192, 212, 0.6);
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const baseLinkStyles = `
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  color: rgba(184, 192, 212, 0.75);
  transition: background 0.15s ease, color 0.15s ease;
  border: 1px solid transparent;

  &:hover {
    color: #e8ecf4;
    background: rgba(255, 255, 255, 0.04);
  }
`;

const StyledNavLink = styled(NavLink)`
  ${baseLinkStyles}

  &.active {
    color: #e8ecf4;
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.08);
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const DropdownButton = styled.button`
  ${baseLinkStyles}
  justify-content: space-between;
  background: none;
  cursor: pointer;
  text-align: left;
`;

const ButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
`;

const DropdownContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: 0.8rem;
  padding-left: 0.8rem;
  border-left: 1px solid rgba(255, 255, 255, 0.06);
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: rgba(184, 192, 212, 0.65);
  font-size: 0.82rem;
  padding: 0.4rem 0.2rem;
  transition: color 0.15s ease;

  &:hover {
    color: #e8ecf4;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.04);
  margin: 0.4rem 0;
`;

const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  color: rgba(184, 192, 212, 0.5);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #e8ecf4;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectLinks = projects.slice(0, 4);
  const postLinks = posts.slice(0, 6);
  const missionLinks = launchMissions.slice(0, 5);

  const toggleMenu = () => setIsOpen((current) => !current);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      <MobileMenuButton onClick={toggleMenu} aria-label="Toggle navigation">
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
        initial={false}
        animate={{
          x: isOpen || isDesktop ? 0 : -310,
        }}
        transition={{ type: 'spring', stiffness: 330, damping: 34 }}
      >
        <NavHeader>
          <BrandTitle>Ankur Verma</BrandTitle>
          <BrandSubtext>
            Platform engineering, distributed systems, and AI infrastructure.
          </BrandSubtext>
        </NavHeader>

        <NavLinks>
          <StyledNavLink to="/" end onClick={closeMenu}>
            <FaHome />
            Home
          </StyledNavLink>

          <StyledNavLink to="/resume" onClick={closeMenu}>
            <FaFileAlt />
            Resume
          </StyledNavLink>

          <Dropdown>
            <DropdownButton type="button" onClick={() => toggleDropdown('projects')}>
              <ButtonLabel>
                <FaProjectDiagram />
                Projects
              </ButtonLabel>
              {openDropdown === 'projects' ? <FiChevronUp /> : <FiChevronDown />}
            </DropdownButton>
            <AnimatePresence initial={false}>
              {openDropdown === 'projects' && (
                <DropdownContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <DropdownLink to="/projects" onClick={closeMenu}>
                    All projects
                  </DropdownLink>
                  {projectLinks.map((project) => (
                    <DropdownLink key={project.slug} to={`/projects/${project.slug}`} onClick={closeMenu}>
                      {project.title}
                    </DropdownLink>
                  ))}
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>

          <Dropdown>
            <DropdownButton type="button" onClick={() => toggleDropdown('blog')}>
              <ButtonLabel>
                <FaBlog />
                Blog
              </ButtonLabel>
              {openDropdown === 'blog' ? <FiChevronUp /> : <FiChevronDown />}
            </DropdownButton>
            <AnimatePresence initial={false}>
              {openDropdown === 'blog' && (
                <DropdownContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <DropdownLink to="/blog" onClick={closeMenu}>
                    All posts
                  </DropdownLink>
                  {postLinks.map((post) => (
                    <DropdownLink key={post.slug} to={`/blog/${post.slug}`} onClick={closeMenu}>
                      {post.title}
                    </DropdownLink>
                  ))}
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>

          <StyledNavLink to="/now" onClick={closeMenu}>
            <FaCompass />
            Now
          </StyledNavLink>

          <Dropdown>
            <DropdownButton type="button" onClick={() => toggleDropdown('launchpad')}>
              <ButtonLabel>
                Demos
              </ButtonLabel>
              {openDropdown === 'launchpad' ? <FiChevronUp /> : <FiChevronDown />}
            </DropdownButton>
            <AnimatePresence initial={false}>
              {openDropdown === 'launchpad' && (
                <DropdownContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <DropdownLink to="/launchpad" onClick={closeMenu}>
                    All demos
                  </DropdownLink>
                  {missionLinks.map((mission) => (
                    <DropdownLink key={mission.path} to={mission.path} onClick={closeMenu}>
                      {mission.title}
                    </DropdownLink>
                  ))}
                </DropdownContent>
              )}
            </AnimatePresence>
          </Dropdown>
        </NavLinks>

        <Divider />

        <NavFooter>
          <MissionStatusCard />
          <SocialLinks>
            <SocialLink href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href={profileLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </SocialLink>
          </SocialLinks>
        </NavFooter>
      </Nav>
    </>
  );
};

export default Navigation;
