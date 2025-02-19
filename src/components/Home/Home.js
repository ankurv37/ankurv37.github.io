import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  background: linear-gradient(45deg, #00ff95, #00ff95);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm Ankur
      </Title>
      <Description
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A software engineer passionate about creating meaningful digital experiences.
        Welcome to my corner of the internet where I share my thoughts, projects, and journey.
      </Description>
    </HomeContainer>
  );
};

export default Home;