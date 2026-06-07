import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .page-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(160, 175, 210, 0.6);
    margin-bottom: 0.4rem;
  }

  h1 {
    color: #e8ecf4;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.02em;
    margin: 0;
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #b8c0d4;
  padding: 0.6rem 1.1rem;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.15s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.14);
    color: #dce1ed;
  }
`;

const ProjectDetail = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  
  h1 {
    color: #e8ecf4;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }
  
  .description {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: rgba(184, 192, 212, 0.8);
  }
  
  .tech-stack {
    margin-bottom: 2rem;
    
    h3 {
      color: #dce1ed;
      font-weight: 600;
      margin-bottom: 0.8rem;
    }
    
    .tech-tags {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    
    .tech-tag {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.82rem;
      color: rgba(184, 192, 212, 0.75);
    }
  }
  
  .links {
    display: flex;
    gap: 0.8rem;
    
    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.1rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 7px;
      color: #b8c0d4;
      text-decoration: none;
      font-size: 0.88rem;
      transition: border-color 0.15s ease;
      
      &:hover {
        border-color: rgba(255, 255, 255, 0.14);
        color: #dce1ed;
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

  const selectedProj = projects.find(p => p.id === selectedProject);

  if (selectedProj) {
    return (
      <ProjectDetail>
        <BackButton onClick={() => {
          setSelectedProject(null);
          window.history.pushState({}, '', '/projects');
        }}>
          Back to all projects
        </BackButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{selectedProj.title}</h1>
          <p className="description">{selectedProj.description}</p>
          <div className="tech-stack">
            <h3>Technologies</h3>
            <div className="tech-tags">
              {selectedProj.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="links">
            <a href={selectedProj.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={selectedProj.liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </motion.div>
      </ProjectDetail>
    );
  }

  return (
    <div>
      <PageHeader>
        <div className="page-label">Work</div>
        <h1>Projects</h1>
      </PageHeader>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
