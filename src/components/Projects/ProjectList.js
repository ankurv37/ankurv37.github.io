import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React",
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/ankurv37/ankurv37.github.io",
      liveLink: "https://yourwebsite.com"
    },
    {
      id: 2,
      title: "WallStreetBets",
      description: "Reddit APIs collect the submissions from r/wallstreetbets",
      technologies: ["Python", "Postgress", "APIs"],
      githubLink: "https://github.com/ankurv37/WallStreetBets",
      liveLink: "https://www.youtube.com/watch?v=UI2wU6jGtYY"
    },
    {
      id: 3,
      title: "Apple Pie",
      description: "A First attempt approach on anything and everything",
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubLink: "https://github.com/ankurv37/Apple-pie",
      liveLink: "https://github.com/ankurv37/Apple-pie/blob/main/BlockChainJava-1.JPG"
    },
    {
      id: 4,
      title: "Face-Off",
      description: "Face AI app to uncover skin and health issues",
      technologies: ["React"],
      githubLink: "https://github.com/ankurv37/Face-Off/tree/master/deepReact",
      liveLink: "https://yourwebsite.com"
    }
  ];

  return (
    <div className="projects-container">
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
    </div>
  );
};

export default ProjectList;