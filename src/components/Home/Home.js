import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCompass, FaFileAlt, FaRocket } from 'react-icons/fa';
import { featuredPosts, featuredProjects, heroContent } from '../../content/siteContent';
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

          <div className="recruiter-note-card">
            {heroContent.recruiterNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="home-visual-column"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="sun-system">
            <div className="corona-ring" />
            <img src={`${process.env.PUBLIC_URL}/home.png`} alt="Ankur Verma" className="home-image" />
            <div className="orbit orbit-1">
              <span className="planet planet-go" title="Go">
                Go
              </span>
            </div>
            <div className="orbit orbit-2">
              <span className="planet planet-python" title="Python">
                Py
              </span>
            </div>
            <div className="orbit orbit-3">
              <span className="planet planet-react" title="React">
                UI
              </span>
            </div>
          </div>
          <div className="hero-side-card">
            <span className="section-label">Command brief</span>
            <h2>Case studies, field notes, and live demos in one place.</h2>
            <p>
              The portfolio is organized for fast signal: resume path, project deep dives, current focus, and
              interactive systems demos that explain how I think about software.
            </p>
            <Link to="/launchpad" className="hero-inline-link">
              <FaRocket /> Launch demos
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="impact-grid">
        {heroContent.impactStats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="impact-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.detail}</p>
          </motion.article>
        ))}
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="section-label">Featured case studies</span>
          <h2>Work that maps directly to platform, backend, and AI infrastructure roles.</h2>
        </div>
        <div className="feature-grid">
          {featuredProjects.map((project) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="feature-card">
              <span className="feature-eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="feature-tag-row">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="feature-link-row">
                Read case study <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <span className="section-label">Recent field notes</span>
          <h2>Writing focused on systems behavior, AI infrastructure, and implementation tradeoffs.</h2>
        </div>
        <div className="feature-grid notes-grid">
          {featuredPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="feature-card note-card">
              <span className="feature-eyebrow">{post.readTime}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="feature-tag-row">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="feature-link-row">
                Read note <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
