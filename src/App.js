import React from 'react';
import './App.css';
import Signupform from './Signupform';
import Features from './Features';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="signuptext">
          <div>Build a landing page for your business or project and generate more leads!</div>
          <Signupform/>
        </div>
      </header>
      <Features />
    </div>
  );
}

export default App;
