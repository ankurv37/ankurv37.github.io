import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "A comprehensive guide to React fundamentals",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Web Development"]
    },
    // Add more blog posts here
  ];

  return (
    <BlogContainer>
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlogCard blog={blog} />
        </motion.div>
      ))}
    </BlogContainer>
  );
};

export default BlogList;