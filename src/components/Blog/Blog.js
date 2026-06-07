import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import posts from '../../generated/posts.json';

const PageHeader = styled.div`
  margin-bottom: 2rem;

  .page-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(160, 175, 210, 0.6);
    margin-bottom: 0.4rem;
  }

  h1 {
    color: #e8ecf4;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -0.02em;
    margin: 0;
  }
`;

const BlogContainer = styled.div`
  padding: 1rem 2rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
`;

const BlogTitle = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 14px;
  padding: 1.5rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.06);

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }

  h2 {
    color: #dce1ed;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 0.8rem;
    color: rgba(184, 192, 212, 0.75);
    font-size: 0.9rem;
  }

  small {
    color: rgba(160, 175, 210, 0.5);
    font-size: 0.8rem;
  }

  .tags {
    display: flex;
    gap: 0.4rem;
    margin-top: 0.8rem;
    flex-wrap: wrap;
  }

  .tag {
    padding: 0.2rem 0.6rem;
    border-radius: 5px;
    font-size: 0.72rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: rgba(184, 192, 212, 0.7);
    font-weight: 500;
  }
`;

const BlogContent = styled(motion.div)`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.06);

  .content {
    h2, h3 {
      color: #dce1ed;
      font-weight: 600;
      margin: 1.5rem 0 0.8rem;
    }

    p {
      line-height: 1.7;
      margin-bottom: 0.8rem;
      color: rgba(184, 192, 212, 0.8);
    }

    ul, ol {
      margin-left: 1.5rem;
      margin-bottom: 1rem;
      color: rgba(184, 192, 212, 0.8);
    }

    li {
      margin-bottom: 0.4rem;
      color: rgba(184, 192, 212, 0.8);
    }

    pre {
      background: rgba(0, 0, 0, 0.25);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      overflow-x: auto;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.88em;
    }

    strong {
      color: #dce1ed;
    }
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #b8c0d4;
  padding: 0.6rem 1.1rem;
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.15s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.14);
    color: #dce1ed;
  }
`;

const Blog = () => {
  const location = useLocation();
  const [selectedBlog, setSelectedBlog] = useState(null);

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

  const selectedPost = posts.find(p => p.slug === selectedBlog);

  if (selectedPost) {
    return (
      <BlogContainer>
        <BackButton onClick={() => window.history.pushState({}, '', '/blog')}>
          Back to all posts
        </BackButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ color: '#e8ecf4', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{selectedPost.title}</h1>
          <small style={{ color: 'rgba(160, 175, 210, 0.5)', display: 'block', marginBottom: '1.5rem', fontSize: '0.82rem' }}>
            {selectedPost.date} · {selectedPost.readTime}
          </small>
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {selectedPost.tags.map((tag, i) => (
              <span key={i} style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.2rem 0.6rem', 
                borderRadius: '5px', 
                fontSize: '0.72rem',
                color: 'rgba(184, 192, 212, 0.7)',
                fontWeight: 500
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

  return (
    <BlogContainer>
      <PageHeader>
        <div className="page-label">Writing</div>
        <h1>Blog</h1>
      </PageHeader>
      <BlogGrid>
        {posts.map((post, index) => (
          <BlogTitle
            key={post.slug}
            onClick={() => window.location.hash = post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
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
