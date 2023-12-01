import React from 'react';
import './Navbar.css';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <div className="navbar-logo">
        <Image src="user.png" alt="Logo" className="img"/>
        <h5 className="h5">Gaurav Bansal</h5>
        <p className="p">Developer & Programmer</p>
      </div>
      <div className="navbar-links">
        <button>
            <FontAwesomeIcon icon={faLinkedin} size="xl" className="linkedin" />
            <a href="https://www.linkedin.com/in/gauravbansal007">Connect with me on Linkedin</a>
        </button>
      </div>
    </div>

  );
}

export default Navbar;