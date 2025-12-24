import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = {
    "Programming Stack": ["Go", "Gin", "Java", "SpringBoot", "Python", "Flask", "Goroutines", "Node.js", "Express"],
    "Cloud & DevOps": ["Kubernetes", "AWS EKS", "AKS", "OpenShift", "Docker Swarm", "Terraform", "AWS/GCP", "Istio", "ArgoCD", "Tekton"],
    "Databases & Messaging": ["MongoDB", "PostgreSQL", "Redis", "SQL", "AWS SQS", "SNS"],
    "System Design": ["Microservices", "Event-Driven Architecture", "Caching Strategy", "Multi-region distributed systems"]
  };

  const categoryImages = {
    "Programming Stack": process.env.PUBLIC_URL + '/code-lang.png',
    "Cloud & DevOps": process.env.PUBLIC_URL + '/tech-stack.png',
    "System Design": process.env.PUBLIC_URL + '/sys-design.png'
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div className="skill-category" key={category}>
          {categoryImages[category] && (
            <img src={categoryImages[category]} alt={category} className="category-image" />
          )}
          <h3>{category}</h3>
          <div className="skill-list">
            {items.map((skill, index) => (
              <motion.div
                className="skill-item"
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;