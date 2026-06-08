import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCompass, FaFileAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="photo-wrapper">
          <img src={`${process.env.PUBLIC_URL}/home.png`} alt="Ankur Verma" className="home-image" />
        </div>

        <h1 className="home-title">netineti.dev</h1>
        <p className="home-description">
          <em>Neti neti</em> — "not this, not this." A method of arriving at truth by discarding what it isn't.
        </p>

        <div className="hero-actions">
          <Link to="/resume" className="hero-primary-action">
            <FaFileAlt /> Resume
          </Link>
          <Link to="/projects" className="hero-secondary-action">
            Projects <FaArrowRight />
          </Link>
          <Link to="/now" className="hero-tertiary-action">
            <FaCompass /> Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
