import React from 'react';
import './App.css';
import Signupform from './Signupform';
import Features from './Features';
import Showcase from './Showcase';
import Testimonials from './Testimonials';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="signuptext">
          <div className="signuptitle">
            Build a landing page for your business or project and generate more leads!
          </div>
          <Signupform/>
        </div>
      </header>
      <Features />
      <Showcase />
      <Testimonials />
    </div>
  );
}

export default App;
