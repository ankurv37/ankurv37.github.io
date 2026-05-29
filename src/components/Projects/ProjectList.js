import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const GalaxyHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  .galaxy-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(251, 191, 36, 0.6);
    margin-bottom: 0.5rem;
  }

  h1 {
    background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 50%, #fbbf24 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: galaxyShimmer 4s ease-in-out infinite;
  }

  @keyframes galaxyShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const BackButton = styled.button`
  background: rgba(124, 155, 255, 0.1);
  border: 1px solid rgba(124, 155, 255, 0.3);
  color: #7c9bff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(124, 155, 255, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 0 15px rgba(124, 155, 255, 0.15);
  }
`;

const ProjectDetail = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 50%, #fbbf24 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
  }
  
  .description {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: rgba(205, 214, 244, 0.85);
  }
  
  .tech-stack {
    margin-bottom: 2rem;
    
    h3 {
      background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 100%);
      background-size: 200% 200%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    
    .tech-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .tech-tag {
      background: rgba(196, 181, 253, 0.1);
      border: 1px solid rgba(196, 181, 253, 0.25);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      color: #c4b5fd;
    }
  }
  
  .links {
    display: flex;
    gap: 1rem;
    
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: rgba(124, 155, 255, 0.1);
      border: 1px solid rgba(124, 155, 255, 0.3);
      border-radius: 8px;
      color: #7c9bff;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(124, 155, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(124, 155, 255, 0.15);
      }
    }
  }
`;

const ProjectList = () => {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      slug: "portfolio",
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React",
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/ankurv37/ankurv37.github.io",
      liveLink: "https://yourwebsite.com"
    },
    {
      id: 2,
      slug: "wallstreetbets",
      title: "WallStreetBets",
      description: "Reddit APIs collect the submissions from r/wallstreetbets",
      technologies: ["Python", "Postgress", "APIs"],
      githubLink: "https://github.com/ankurv37/WallStreetBets",
      liveLink: "https://www.youtube.com/watch?v=UI2wU6jGtYY"
    },
    {
      id: 3,
      slug: "applepie",
      title: "Apple Pie",
      description: "A First attempt approach on anything and everything",
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/ankurv37/Apple-pie",
      liveLink: "https://github.com/ankurv37/Apple-pie/blob/main/BlockChainJava-1.JPG"
    },
    {
      id: 4,
      slug: "faceoff",
      title: "Face-Off",
      description: "Face AI app to uncover skin and health issues",
      technologies: ["React"],
      githubLink: "https://github.com/ankurv37/Face-Off/tree/master/deepReact",
      liveLink: "https://yourwebsite.com"
    }
  ];

  // Check URL hash to determine which project to show
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const project = projects.find(p => p.slug === hash);
      if (project) {
        setSelectedProject(project.id);
      }
    } else {
      setSelectedProject(null);
    }
  }, [location.hash]);

  // If a specific project is selected, show only that project
  const selectedProj = projects.find(p => p.id === selectedProject);

  if (selectedProj) {
    return (
      <ProjectDetail>
        <BackButton onClick={() => window.history.pushState({}, '', '/projects')}>
          ← Back to All Projects
        </BackButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{selectedProj.title}</h1>
          <p className="description">{selectedProj.description}</p>
          
          <div className="tech-stack">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {selectedProj.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="links">
            <a href={selectedProj.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
            <a href={selectedProj.liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </motion.div>
      </ProjectDetail>
    );
  }

  // Show all projects
  return (
    <div className="projects-container">
      <GalaxyHeader>
        <div className="galaxy-label">✦ Deep Space — Expeditions ✦</div>
        <h1>Deep Space</h1>
      </GalaxyHeader>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => window.location.hash = project.slug}
          style={{ cursor: 'pointer' }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;