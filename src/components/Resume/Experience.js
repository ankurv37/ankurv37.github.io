import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.div`
  margin-bottom: 2rem;
`;

const JobTitle = styled.h3`
  color: #00ff95;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Your Company",
      duration: "2020 - Present",
      responsibilities: [
        "Developed and maintained web applications using React",
        "Implemented responsive designs and modern UI components",
        "Collaborated with cross-functional teams"
      ]
    },
    // Add more experiences
  ];

  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceSection key={index}>
          <JobTitle>{exp.title}</JobTitle>
          <Company>{exp.company}</Company>
          <Duration>{exp.duration}</Duration>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </ExperienceSection>
      ))}
    </div>
  );
};

export default Experience;