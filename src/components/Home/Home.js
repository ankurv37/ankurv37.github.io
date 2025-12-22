import React from 'react';
import GitHubActivity from '../GitHubActivity';
import ChaosDemo from '../ChaosDemo';
import PongGame from '../PongGame/PongGame';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">
        Hey, I'm Ankur
      </h1>
      <p className="description">
        A software engineer passionate about creating meaningful digital experiences.
        Welcome to my corner of the internet where I share my thoughts, projects, and journey.
      </p>
      
      <GitHubActivity username="ankurv37" />
      
      <ChaosDemo />
      <PongGame />
    </div>
  );
};

export default Home;