import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  color: #00ff95;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(0, 255, 149, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <Title>{blog.title}</Title>
      <p>{blog.excerpt}</p>
      <Tags>
        {blog.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
    </Card>
  );
};

export default BlogCard;