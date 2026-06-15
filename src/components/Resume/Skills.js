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

  const categoryIllustrations = {
    "Programming Stack": `${process.env.PUBLIC_URL}/skill-programming.svg`,
    "Cloud & DevOps": `${process.env.PUBLIC_URL}/skill-cloud.svg`,
    "Databases & Messaging": `${process.env.PUBLIC_URL}/skill-database.svg`,
    "System Design": `${process.env.PUBLIC_URL}/skill-system-design.svg`,
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div className="skill-category" key={category}>
          {categoryIllustrations[category] && (
            <img src={categoryIllustrations[category]} alt={category} className="category-illustration" />
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