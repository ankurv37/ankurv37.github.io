import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/ProjectList';
import LaunchPad from './LaunchPad';
import Resume from './Resume/Resume';
import Now from './Now/Now';

const ChaosDemo = React.lazy(() => import('./ChaosDemo'));
const GitHubActivity = React.lazy(() => import('./GitHubActivity'));
const PongGame = React.lazy(() => import('./PongGame/PongGame'));
const EventMeshLab = React.lazy(() => import('./EventMeshLab'));
const LogicGateVisualizer = React.lazy(() => import('./LogicGateVisualizer'));
const FullAdderVisualizer = React.lazy(() => import('./FullAdderVisualizer'));

const MainContainer = styled.main`
  margin-left: 240px;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 4rem 1rem 1rem 1rem;
    width: 100%;
    overflow-x: hidden;
  }
`;

const LoadingFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  color: rgba(184, 192, 212, 0.5);
  font-size: 0.9rem;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <Suspense fallback={<LoadingFallback>Loading…</LoadingFallback>}>
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
      </Suspense>
    </MainContainer>
  );
};

export default MainContent;
