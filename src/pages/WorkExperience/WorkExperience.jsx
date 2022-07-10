import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Republic from '../../assets/republic.png';
import Datadog from '../../assets/datadog.jpg'
import GA from '../../assets/ga.png'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function WorkExperience() {
  return (
    <Container className="m-5">
      <h3 class="text-center">Work Experience</h3>
      <p class="text-center">Problem solver with strong analytical skills </p>
      <CardGroup>
        <Card className="m-3 border">
          <Card.Img variant="top" height="250px" src={Republic} />
          <Card.Body>
            <Card.Title>Republic - NYC</Card.Title>
            <Card.Subtitle className="m-3">August, 2021 - Present</Card.Subtitle>
            <Card.Subtitle className="m-3">Software Engineer</Card.Subtitle>
            <Card.Text className="text-muted">
              <ul>
                <li>
                  Built full-stack applications from scratch, as well as
                  supported existing products used by over 1.5 million active
                  users
                </li>
                <li>
                  Improved back-end by moving to Domain Driven Design that uses
                  GraphQL instead of REST APIs
                </li>
                <li>
                  Designed and created Crypto back-end from scratch. Features
                  include: capability invest with crypto and having its own
                  non-custodial Republic crypto wallet to store and move
                  crypto-assets with additional security measures
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3 border">
          <Card.Img variant="top" height="250px" src={Datadog} />
          <Card.Body>
            <Card.Title>Datadog - NYC</Card.Title>
            <Card.Subtitle className="m-3">November, 2020 - July, 2021</Card.Subtitle>
            <Card.Subtitle className="m-3">Software Engineer</Card.Subtitle>
            <Card.Text className="text-muted">
              <ul>
                <li>
                  Built front-end applications to improve the overall enterprise
                  and onboarding experience for customers
                </li>
                <li>
                  Fixed bugs and dived into the 400+ integrations that Datadog
                  works with
                </li>
                <li>
                  Part of the Web Reliability Engineering team that supports the
                  Datadog API layer
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3 border">
          <Card.Img variant="top" height="250px" src={GA} />
          <Card.Body>
            <Card.Title>General Assembly - NYC</Card.Title>
            <Card.Subtitle className="m-3">December, 2018 - October, 2020</Card.Subtitle>
            <Card.Subtitle className="m-3">Software Engineer</Card.Subtitle>
            <Card.Text className="text-muted">
              <ul>
                <li>
                  Created full-stack applications using React, Javascript,
                  PostgreSQL, and Ruby on Rails
                </li>
                <li>
                  Improved company-wide JavaScript Precourse Fundamentals pilot
                  online program for incoming students
                </li>
                <li>
                  Worked with the QA team on bug triage and resolving the issues
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default WorkExperience;
