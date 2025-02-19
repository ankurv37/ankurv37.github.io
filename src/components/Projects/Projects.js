import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  
  h3 {
    color: #00ff95;
    margin-bottom: 1rem;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  margin-right: 1rem;
  margin-top: 1rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React",
      technologies: ["React", "Styled Components", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourwebsite.com"
    },
    // Add more projects here
  ];

  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <LinkButton href={project.github} target="_blank">
                <FaGithub /> GitHub
              </LinkButton>
              <LinkButton href={project.live} target="_blank">
                <FaExternalLinkAlt /> Live Demo
              </LinkButton>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;