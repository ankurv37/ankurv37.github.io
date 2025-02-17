import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';

const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>Welcome to Calculus</h1>
      </div>
      <p>This is a simple landing page with four sections on the left panel.</p>
      <main>
        <GoogleLoginButton />
      </main>
    </div>
  );
}

export default Home;
