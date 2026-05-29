import React, { useState } from 'react';
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
  FaRocket,
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
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(124, 155, 255, 0.25);
  border-radius: 10px;
  padding: 0.8rem;
  color: #dbe6ff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: rgba(124, 155, 255, 0.16);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 1.6rem 1.1rem;
  background: rgba(5, 6, 15, 0.95);
  border-right: 1px solid rgba(124, 155, 255, 0.12);
  box-shadow: 14px 0 45px rgba(0, 0, 0, 0.28);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 290px;
    padding-top: 4.2rem;
  }
`;

const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavHeader = styled.div`
  padding: 0.2rem 0.6rem 1rem;
  border-bottom: 1px solid rgba(124, 155, 255, 0.1);
`;

const BrandLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(124, 155, 255, 0.72);
  margin-bottom: 0.7rem;

  svg {
    color: #fbbf24;
  }
`;

const BrandTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f8fbff;
`;

const BrandSubtext = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.84rem;
  line-height: 1.5;
  color: rgba(205, 214, 244, 0.68);
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const baseLinkStyles = `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 0.8rem 0.95rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.98rem;
  color: rgba(205, 214, 244, 0.82);
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateX(4px);
    color: #ffffff;
    background: rgba(124, 155, 255, 0.08);
    border-color: rgba(124, 155, 255, 0.12);
  }
`;

const StyledNavLink = styled(NavLink)`
  ${baseLinkStyles}

  &.active {
    color: #ffffff;
    background: linear-gradient(135deg, rgba(124, 155, 255, 0.16), rgba(196, 181, 253, 0.08));
    border-color: rgba(124, 155, 255, 0.2);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
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
  gap: 0.8rem;
`;

const DropdownContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-left: 0.85rem;
  padding-left: 0.85rem;
  border-left: 1px solid rgba(124, 155, 255, 0.18);
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  color: rgba(205, 214, 244, 0.74);
  font-size: 0.86rem;
  padding: 0.45rem 0.2rem;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(3px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(124, 155, 255, 0), rgba(124, 155, 255, 0.18), rgba(124, 155, 255, 0));
  margin: 0.45rem 0;
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
  gap: 0.7rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  color: rgba(205, 214, 244, 0.65);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(124, 155, 255, 0.1);
  transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    color: #ffffff;
    background: rgba(124, 155, 255, 0.12);
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
          x: isOpen || window.innerWidth > 768 ? 0 : -310,
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
                <FaRocket />
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
            <SocialLink
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href={profileLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </SocialLink>
          </SocialLinks>
        </NavFooter>
      </Nav>
    </>
  );
};

export default Navigation;
