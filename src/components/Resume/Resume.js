import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: #00ff95;
    margin-bottom: 0.5rem;
  }
`;

const Resume = () => {
  const experience = [
    {
      title: "Software Engineer",
      company: "Your Company",
      period: "2020 - Present",
      responsibilities: [
        "Developed and maintained web applications using React",
        "Implemented responsive designs and modern UI components",
        "Collaborated with cross-functional teams"
      ]
    }
  ];

  return (
    <ResumeContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <ExperienceItem key={index}>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p>{job.period}</p>
            <ul>
              {job.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))}
      </Section>
    </ResumeContainer>
  );
};

export default Resume;