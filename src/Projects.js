import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Projects.css';
import Image from 'react-bootstrap/Image';

function Projects(){
    return (
        <div id="projects">
        <h1>Projects</h1>
        <Container className="container">
          <Row>
            <Col className="catalog-cell">
              <Image src="p1.png" className="catalog-image" />
              <h4>NeoVision</h4>
              <p>A user centric VR Headset Website<br/>-HTML, CSS, Javascript</p>
            </Col>
            <Col className="catalog-cell">
                <Image src="p2.png" className="catalog-image" />
                <h4>Pros</h4>
                <p>An innovative educational website<br/>-HTML, CSS, Javascript</p>
            </Col>
            <Col className="catalog-cell">
              <Image src="p3.jpg" className="catalog-image" />
              <h4>SugarRush Bakery</h4>
              <p>A user-friendly bakery website<br/>-React, Bootstrap</p>
            </Col>
            <Col className="catalog-cell">
              <Image src="p4.png" className="catalog-image" />
              <h4>Youtube Clone</h4>
              <p>Go-to music streaming platform<br/>-React, Bootstrap</p>
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default Projects;