import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/ProjectList';
import LogicGateVisualizer from './LogicGateVisualizer';
import FullAdderVisualizer from './FullAdderVisualizer';
import GitHubActivity from './GitHubActivity';
import ChaosDemo from './ChaosDemo';
import PongGame from './PongGame/PongGame';
import LaunchPad from './LaunchPad';
import Resume from './Resume/Resume';
import Now from './Now/Now';
import EventMeshLab from './EventMeshLab';

const MainContainer = styled.main`
  margin-left: 250px;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 4rem 1rem 1rem 1rem; /* Top padding for hamburger menu */
    width: 100%;
    overflow-x: hidden;
  }
`;

const MainContent = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/now" element={<Now />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="/logic-gates" element={<LogicGateVisualizer />} />
        <Route path="/adder" element={<FullAdderVisualizer />} />
        <Route path="/github" element={<GitHubActivity />} />
        <Route path="/chaos" element={<ChaosDemo />} />
        <Route path="/pongwars" element={<PongGame />} />
        <Route path="/event-mesh-lab" element={<EventMeshLab />} />
        <Route path="/launchpad" element={<LaunchPad />} />
      </Routes>
    </MainContainer>
  );
};

export default MainContent;
