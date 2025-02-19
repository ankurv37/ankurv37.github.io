import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
`;

const Skills = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java"],
    "Frontend": ["React", "HTML5", "CSS3", "Redux"],
    "Backend": ["Node.js", "Express", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS"]
  };

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <SkillCategory key={category}>
          <h3>{category}</h3>
          <SkillGrid>
            {items.map((skill, index) => (
              <SkillItem
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillGrid>
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
};

export default Skills;