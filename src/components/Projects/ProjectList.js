import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React",
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourwebsite.com"
    },
    // Add more projects here
  ];

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectList;