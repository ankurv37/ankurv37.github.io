import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: "University of Cincinnati",
      degree: "Master of Science in Information Systems",
      period: "December 2016",
      details: ["GPA: 3.9"]
    },
    {
      school: "National Institute of Technology Durgapur, India",
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      period: "June 2013",
      details: ["CGPA - 8.53 (out of 10) Distinction"]
    }
  ];

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div className="education-section" key={index}>
          <h3 className="school">{edu.school}</h3>
          <h4 className="degree">{edu.degree}</h4>
          <p className="period">{edu.period}</p>
          <ul>
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;