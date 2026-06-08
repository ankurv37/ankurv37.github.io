import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCompass, FaFileAlt } from 'react-icons/fa';
import { heroContent } from '../../content/siteContent';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <motion.div
          className="home-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="section-label">{heroContent.eyebrow}</span>
          <h1 className="home-title">{heroContent.headline}</h1>
          <p className="home-description">{heroContent.summary}</p>

          <div className="proof-chip-row">
            {heroContent.proofChips.map((chip) => (
              <span key={chip} className="proof-chip">
                {chip}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link to="/resume" className="hero-primary-action">
              <FaFileAlt /> Resume
            </Link>
            <Link to="/projects" className="hero-secondary-action">
              Featured work <FaArrowRight />
            </Link>
            <Link to="/now" className="hero-tertiary-action">
              <FaCompass /> Now
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="home-visual-column"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="photo-wrapper">
            <img src={`${process.env.PUBLIC_URL}/home.png`} alt="Ankur Verma" className="home-image" />
          </div>
          <div className="hero-side-card">
            <h2>Projects, writing, and demos — all in one place.</h2>
            <p>
              The site is organized for quick browsing: resume, project deep-dives,
              what I'm working on now, and interactive demos.
            </p>
            <Link to="/launchpad" className="hero-inline-link">
              Browse demos
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
