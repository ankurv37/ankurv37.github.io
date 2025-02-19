import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.div`
  margin-bottom: 2rem;
`;

const School = styled.h3`
  color: #00ff95;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Education = () => {
  const education = [
    {
      school: "Your University",
      degree: "Bachelor of Technology in Computer Science",
      period: "2016 - 2020",
      details: [
        "Graduated with First Class Honours",
        "Specialized in Software Engineering",
        "Key courses: Data Structures, Algorithms, Web Development"
      ]
    }
  ];

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <EducationSection key={index}>
          <School>{edu.school}</School>
          <Degree>{edu.degree}</Degree>
          <Period>{edu.period}</Period>
          <ul>
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </EducationSection>
      ))}
    </div>
  );
};

export default Education;