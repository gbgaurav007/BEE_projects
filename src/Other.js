import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Other.css';

function Other(){
    const frontendLanguages = ['HTML, CSS', 'Javascript', 'ReactJS'];
    const backendLanguages = ['NodeJS', 'ExpressJS'];
    const databaseLanguages = ['MySQL', 'MongoDB'];
  
    return (
      <div id="other">
        <h1>What I Know</h1>
      <div className="portfolio-section">
        <div className="knowledge-section">
          <h2>Frontend</h2>
          <ul>
            {frontendLanguages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
  
        <div className="knowledge-section">
          <h2>Backend</h2>
          <ul>
            {backendLanguages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
  
        <div className="knowledge-section">
          <h2>Database</h2>
          <ul>
            {databaseLanguages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
  
        <div className="other-projects">
          <h2>Other Projects</h2>
          <div className="project">
          <FontAwesomeIcon icon={faFontAwesome} size="lg" className='fa'/>
            <h4>&nbsp;&nbsp;Temperature Converter</h4>
            <p>-HTML, CSS, Javascript</p>
          </div>
  
          <div className="project">
          <FontAwesomeIcon icon={faGithub} size="lg" className='fa'/>
            <h4>&nbsp;&nbsp;Portfolio</h4>
            <p>-React, Bootstrap</p>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Other;