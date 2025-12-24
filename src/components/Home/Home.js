import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={process.env.PUBLIC_URL + '/home.png'} alt="Welcome" className="home-image" />
      <h1 className="title">
        Hey, I'm Ankur
      </h1>
      <p className="description">
        A software engineer passionate about creating meaningful digital experiences.
        Welcome to my corner of the internet where I share my thoughts, projects, and journey.
      </p>
    </div>
  );
};

export default Home;