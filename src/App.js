// App.js
import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import Header from './Header';
import GoogleLoginButton from './components/GoogleLoginButton'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import OAuth2Callback from './components/OAuth2Callback';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router> 
          <LeftPanel />
          <div className="right-panel">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/contact" component={Contact} />
              <Route path="/oauth2callback" component={OAuth2Callback} />
            </Routes>
            <div className="title">
              <h1>Welcome to Calculus</h1>
            </div>
            <p>This is a simple landing page with four sections on the left panel.</p>
            <main>
              <GoogleLoginButton />
            </main>
          </div>
        </Router>
      </div>
    </div>
  );
}


export default App;
