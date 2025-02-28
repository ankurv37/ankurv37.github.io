import React from 'react';
import { motion } from 'framer-motion';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="blog-card-title">{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <div className="blog-card-tags">
        {blog.tags.map((tag, index) => (
          <span key={index} className="blog-card-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogCard;