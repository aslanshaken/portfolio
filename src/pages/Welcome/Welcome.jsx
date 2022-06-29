import React from "react";
import "./Welcome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slow from "../../assets/slow.mp4";

function Welcome() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={Slow} autoPlay loop muted />
      <div className="content">
        <Container fluid className="green-bg">
          <Row>
            <Col>I</Col>
          </Row>
          <Row>
            <Col>AM</Col>
          </Row>
          <Row>
            <Col>ASLAN</Col>
          </Row>
          <Row>
            <Col>SHAKEN</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
