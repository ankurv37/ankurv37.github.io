import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/ProjectList';  // Update this line
import Resume from './Resume/Resume';

const MainContainer = styled.main`
  margin-left: 200px;
  padding: 2rem;
  min-height: 100vh;
`;

const MainContent = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </MainContainer>
  );
};

export default MainContent;