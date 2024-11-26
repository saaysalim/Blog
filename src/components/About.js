import React from 'react';
import './About.css';
import './Header'
import './Layout'
function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Salim Saay</h1>
      </header>
      <div className="about-content">
        <h2>About</h2>
        <p>
          Salim Saay is an associate professor at the University of Limerick, 
          and a researcher at the Lero - Science Foundation Ireland and R@ISE - Research for Immersive Software Engineering.
        </p>
      </div>
    </div>
  );
}

export default About;