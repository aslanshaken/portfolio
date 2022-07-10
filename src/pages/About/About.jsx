import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ava from "../../assets/copy.jpg";
import Image from "react-bootstrap/Image";
import "./About.css";
import Card from "react-bootstrap/Card";
import * as React from 'react';

function About() {
  return (
    <Container className="mt-5 bg-same">
      <h4 class="text-center mb-5 text-muted">SOFTWARE ENGINEERING / FULL STACK DEVELOPER</h4>
      <Row className="justify-content-md-center">
        <Col sm={4}>
          <img src={Ava} width="100%" height="auto" alt="ava" />
        </Col>
        <Col sm={8}>
          <Card className="text-center border border-white">
          <Card.Header>a creative, an innovator, a leader</Card.Header>
            <Card.Body>
              <Card.Title>Based in NYC but open to relocate.</Card.Title>
              <Card.Title></Card.Title>
              <Card.Text>
                <p>
                  During 4+ years of my career I've worked on
                  numerous complex business applications (mostly FinTech/AdTech
                  related ones). I've gained vast experience with designing
                  software architecture, integrating third-party software,
                  optimization and migrating codebase to different technologies. I'm
                  passionate about my work and always eager to learn and try
                  something new. I deeply care about maintainability and
                  aesthetics of software code I create, so I always tend to
                  follow coding conventions, maintain code quality and introduce
                  best practices. A fast learner with strong time management and 
                  multi-tasking skills.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
