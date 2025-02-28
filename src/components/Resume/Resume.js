import React from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.section>
      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Experience />
      </motion.section>
      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Education />
      </motion.section>
    </div>
  );
};

export default Resume;