import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import posts from '../../generated/posts.json';

const GalaxyHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;

  .galaxy-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(196, 181, 253, 0.6);
    margin-bottom: 0.5rem;
  }
`;

const BlogContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 50%, #fbbf24 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    text-align: center;
    animation: galaxyShimmer 4s ease-in-out infinite;
  }

  @keyframes galaxyShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const BlogTitle = styled(motion.div)`
  background: rgba(124, 155, 255, 0.04);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(124, 155, 255, 0.08);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(124, 155, 255, 0.2);
    box-shadow: 0 8px 30px rgba(124, 155, 255, 0.1);
  }

  h2 {
    background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 50%, #fbbf24 100%);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: rgba(205, 214, 244, 0.85);
  }

  small {
    color: rgba(205, 214, 244, 0.6);
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.25rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    border: 1px solid rgba(196, 181, 253, 0.3);
    background: rgba(196, 181, 253, 0.08);
    color: #c4b5fd;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(196, 181, 253, 0.15);
      box-shadow: 0 0 8px rgba(196, 181, 253, 0.2);
    }
  }
`;

const BlogContent = styled(motion.div)`
  margin-top: 1rem;
  background: rgba(124, 155, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(124, 155, 255, 0.06);

  .content {
    h2, h3 {
      background: linear-gradient(135deg, #7c9bff 0%, #c4b5fd 100%);
      background-size: 200% 200%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.8;
      margin-bottom: 1rem;
      color: rgba(205, 214, 244, 0.85);
    }

    ul, ol {
      margin-left: 2rem;
      margin-bottom: 1rem;
      color: rgba(205, 214, 244, 0.85);
    }

    li {
      margin-bottom: 0.5rem;
      color: rgba(205, 214, 244, 0.85);
    }

    pre {
      background: rgba(0, 0, 0, 0.3);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      overflow-x: auto;
      border: 1px solid rgba(124, 155, 255, 0.08);
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9em;
    }

    strong {
      color: #c4b5fd;
    }
  }
`;

const BackButton = styled.button`
  background: rgba(124, 155, 255, 0.1);
  border: 1px solid rgba(124, 155, 255, 0.3);
  color: #7c9bff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(124, 155, 255, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 0 15px rgba(124, 155, 255, 0.15);
  }
`;

const Blog = () => {
  const location = useLocation();
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Check URL hash to determine which blog to show
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const post = posts.find(p => p.slug === hash);
      if (post) {
        setSelectedBlog(post.slug);
      }
    } else {
      setSelectedBlog(null);
    }
  }, [location.hash]);

  // If a specific blog is selected, show only that blog
  const selectedPost = posts.find(p => p.slug === selectedBlog);

  if (selectedPost) {
    return (
      <BlogContainer>
        <BackButton onClick={() => window.history.pushState({}, '', '/blog')}>
          ← Back to All Posts
        </BackButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{selectedPost.title}</h1>
          <small style={{ color: 'rgba(205, 214, 244, 0.5)', display: 'block', marginBottom: '2rem' }}>
            {selectedPost.date} · {selectedPost.readTime}
          </small>
          <div className="tags" style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem' }}>
            {selectedPost.tags.map((tag, i) => (
              <span key={i} style={{ 
                background: 'rgba(196, 181, 253, 0.08)', 
                border: '1px solid rgba(196, 181, 253, 0.3)',
                padding: '0.25rem 0.8rem', 
                borderRadius: '20px', 
                fontSize: '0.75rem',
                color: '#c4b5fd'
              }}>{tag}</span>
            ))}
          </div>
          <BlogContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="content" 
              dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }}
            />
          </BlogContent>
        </motion.div>
      </BlogContainer>
    );
  }

  // Show all blog posts
  return (
    <BlogContainer>
      <GalaxyHeader>
        <div className="galaxy-label">Writing</div>
        <h1>Blog</h1>
      </GalaxyHeader>
      <BlogGrid>
        {posts.map((post, index) => (
          <BlogTitle
            key={post.slug}
            onClick={() => window.location.hash = post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <small>{post.date} · {post.readTime}</small>
            <div className="tags">
              {post.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </BlogTitle>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
