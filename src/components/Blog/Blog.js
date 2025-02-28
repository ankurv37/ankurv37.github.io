import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import './Blog.css';

const BlogContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: #00ff95;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const BlogTitle = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #00ff95;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  small {
    color: rgba(255, 255, 255, 0.7);
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .tag {
    background: rgba(0, 255, 149, 0.2);
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }
`;

const BlogContent = styled(motion.div)`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;

  .content {
    h3 {
      color: #00ff95;
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    ul, ol {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    pre {
      background: rgba(0, 0, 0, 0.2);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      overflow-x: auto;
    }
  }
`;

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "A comprehensive guide to React fundamentals and modern development practices",
      date: "2024-01-15",
      readTime: "5 min read",
      content: `
        React has revolutionized the way we build web applications. As a frontend library developed by Facebook, 
        it introduces a component-based architecture that makes UI development more intuitive and maintainable.

        Key Concepts to Understand:
        
        1. Components
        Components are the building blocks of React applications. They're like LEGO pieces that you can combine 
        to create complex UIs. Components can be either function-based or class-based, though modern React 
        favors function components with hooks.

        2. JSX
        JSX is React's syntax extension for JavaScript. It allows you to write HTML-like code directly in your 
        JavaScript files. For example:
        
        const Welcome = () => { return Hello, React! ;}

        3. State and Props
        State manages data within a component, while props pass data between components. The introduction of 
        hooks like useState has made state management more straightforward in function components.

        4. Virtual DOM
        React's Virtual DOM optimizes rendering by minimizing direct manipulation of the actual DOM, resulting 
        in better performance.

        Getting Started:
        1. Set up your development environment with Node.js
        2. Create a new React project using Create React App:
           npx create-react-app my-app
        3. Start exploring components and JSX
        4. Learn about hooks (useState, useEffect)
        5. Practice by building small projects

        Best Practices:
        - Keep components small and focused
        - Use meaningful component names
        - Implement proper state management
        - Follow the React component lifecycle
        - Use functional components with hooks
        
        React's ecosystem is vast, but starting with these fundamentals will set you on the right path for 
        modern web development.
      `,
      tags: ["React", "JavaScript", "Web Development", "Frontend"]
    },
    {
        id: 2,
        title: "Kubernetes Fundamentals",
        excerpt: "Understanding the concepts of container orchestration with Kubernetes",
        date: "2024-02-01",
        readTime: "8 min read",
        content: `
          Kubernetes has become the de facto standard for container orchestration. Let's explore its fundamental concepts 
          and architecture that make it so powerful for modern cloud-native applications.
  
          Core Concepts:
  
          1. Pods
          The smallest deployable unit in Kubernetes. A pod can contain one or more containers that share the same network 
          namespace and storage. Think of it as a logical host for your containers.
  
          2. Deployments
          Manages the desired state of your pods. It ensures a specified number of pod replicas are running at any time, 
          enabling zero-downtime updates and rollbacks.
  
          3. Services
          Provides stable networking for pods. Types include:
          - ClusterIP: Internal access only
          - NodePort: Exposes port on each node
          - LoadBalancer: Uses cloud provider's load balancer
          - ExternalName: DNS CNAME record
  
          4. ConfigMaps & Secrets
          Store configuration and sensitive data separately from your application code:
          - ConfigMaps for general configuration
          - Secrets for sensitive data (encrypted at rest)
  
          Key Components:
  
          1. Control Plane
          - API Server: Central management point
          - etcd: Distributed key-value store
          - Scheduler: Places pods on nodes
          - Controller Manager: Maintains desired state
  
          2. Worker Nodes
          - kubelet: Node agent
          - kube-proxy: Network proxy
          - Container Runtime: Docker/containerd
  
          Best Practices:
          - Use namespace for resource isolation
          - Implement resource limits
          - Configure health checks
          - Use labels and selectors effectively
          - Implement proper security policies
  
          Getting Started:
          1. Install kubectl and minikube
          2. Create your first deployment
          3. Expose services
          4. Learn about scaling and updates
          5. Explore monitoring and logging
  
          Understanding these fundamentals is crucial for building resilient, scalable applications in Kubernetes.
        `,
        tags: ["Kubernetes", "DevOps", "Container Orchestration", "Cloud Native"]
      }
    // Add more blog posts here
];

// Update the BlogCard styling to accommodate the full content
const BlogCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  h2 {
    color: #00ff95;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  pre {
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    overflow-x: auto;
  }

  .content {
    white-space: pre-line;
    margin-top: 1.5rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    background: rgba(0, 255, 149, 0.2);
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }
`;

// Update the return section to include the full content
return (
    <BlogContainer>
      <h1>Blog Posts</h1>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <div key={post.id}>
            <BlogTitle
              onClick={() => setSelectedBlog(selectedBlog === post.id ? null : post.id)}
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
            
            {selectedBlog === post.id && (
              <BlogContent
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="content" 
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .split('\n')
                      .map(line => line.trim())
                      .filter(line => line)
                      .map(line => {
                        if (line.startsWith('const') || line.startsWith('function')) {
                          return `<pre><code>${line}</code></pre>`;
                        }
                        if (line.startsWith('-')) {
                          return `<ul><li>${line.substring(1).trim()}</li></ul>`;
                        }
                        if (line.match(/^\d+\./)) {
                          return `<ol><li>${line.substring(line.indexOf('.') + 1).trim()}</li></ol>`;
                        }
                        if (line.endsWith(':')) {
                          return `<h3>${line}</h3>`;
                        }
                        return `<p>${line}</p>`;
                      })
                      .join('')
                  }}
                />
              </BlogContent>
            )}
          </div>
        ))}
      </BlogGrid>
    </BlogContainer>
);
};

export default Blog;