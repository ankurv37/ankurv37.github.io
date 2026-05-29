import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { nowStatus } from '../../content/siteContent';
import './Now.css';

const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};

const Now = () => {
  return (
    <div className="now-page">
      <motion.section
        className="now-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="now-hero-copy">
          <span className="now-eyebrow">Current signal</span>
          <h1>What I am building, optimizing for, and open to right now.</h1>
          <p>
            {nowStatus.availability} I am strongest where platform thinking, backend execution, and operational
            tradeoffs all matter.
          </p>
          <div className="now-meta-row">
            <span>
              <FaMapMarkerAlt /> Mason, Ohio
            </span>
            <span>US remote and hybrid friendly</span>
          </div>
          <div className="now-hero-actions">
            <Link to="/resume" className="now-primary-link">
              View resume <FaArrowRight />
            </Link>
            <Link to="/projects" className="now-secondary-link">
              Explore case studies
            </Link>
          </div>
        </div>
        <div className="now-focus-panel">
          <h2>Preferred work</h2>
          <ul>
            {nowStatus.preferredWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <section className="now-grid">
        <motion.article
          className="now-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2>Current focus</h2>
          <ul>
            {nowStatus.currentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="now-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <h2>Work preferences</h2>
          <ul>
            {nowStatus.workPreferences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      </section>

      <motion.section
        className="now-timeline"
        id="connect"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <div className="now-section-heading">
          <span className="now-eyebrow">Recently shipped</span>
          <h2>Recent work on the site and surrounding portfolio systems.</h2>
        </div>
        <div className="now-ship-list">
          {nowStatus.recentShips.map((item) => (
            <Link key={item.title} to={item.href} className="ship-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <span>
                Open <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="now-connect"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.26 }}
      >
        <div className="now-section-heading">
          <span className="now-eyebrow">Connect</span>
          <h2>Best paths to reach me.</h2>
        </div>
        <div className="now-contact-grid">
          {nowStatus.contactLinks.map((link) => {
            const Icon = iconMap[link.label];
            const isInternal = link.href.startsWith('/');

            if (isInternal) {
              return (
                <Link key={link.label} to={link.href} className="contact-card">
                  <div className="contact-card-icon">{Icon ? <Icon /> : null}</div>
                  <div>
                    <h3>{link.label}</h3>
                    <p>Open internal profile page</p>
                  </div>
                  <FaArrowRight className="contact-card-arrow" />
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon">{Icon ? <Icon /> : <FaExternalLinkAlt />}</div>
                <div>
                  <h3>{link.label}</h3>
                  <p>Open external profile</p>
                </div>
                <FaExternalLinkAlt className="contact-card-arrow" />
              </a>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Now;
