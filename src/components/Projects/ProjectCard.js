import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  color: #00ff95;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Title>{project.title}</Title>
      <p>{project.description}</p>
      <Links>
        <LinkButton href={project.githubLink} target="_blank">
          <FaGithub /> GitHub
        </LinkButton>
        <LinkButton href={project.liveLink} target="_blank">
          <FaExternalLinkAlt /> Live Demo
        </LinkButton>
      </Links>
    </Card>
  );
};

export default ProjectCard;