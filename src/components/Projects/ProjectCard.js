import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="project-title">{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a className="project-link-button" href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a className="project-link-button" href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;