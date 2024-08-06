import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import RestToGraphqlImage from './images/restgraphql.jpg';

const RestToGraphql = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <div className="project-image">
        <img src={RestToGraphqlImage} alt="GraphQL Migration at Republic" />
      </div>
      <Typography variant="h2">
        <a href='https://republic.com' target='_blank' rel='noopener noreferrer' className="project-title">Migration from RESTful API to GraphQL</a>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description1">
        <strong>Situation:</strong> At Republic, the development team faced challenges with scaling and maintaining the existing RESTful API. The complexity of managing multiple endpoints and the need for more efficient data fetching led to the decision to migrate to GraphQL. The goal was to improve performance, streamline data handling, and enhance the developer experience.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Task:</strong> As a Software Engineer, I was tasked with leading the migration from RESTful API to GraphQL. This involved evaluating the existing API, designing a new GraphQL schema, and ensuring a smooth transition for both the development team and the clients. The project required coordinating with various teams, testing extensively, and providing comprehensive documentation.
        <br /><br />
        The technologies we used included:
        <ul>
          <li><strong>Node.js:</strong> For implementing the GraphQL server and handling backend logic.</li>
          <li><strong>PostgreSQL:</strong> For robust data management and transactions.</li>
          <li><strong>GraphQL:</strong> For efficient and flexible API communication between the front end and back end.</li>
          <li><strong>React with TypeScript:</strong> For building a type-safe and maintainable front-end application.</li>
          <li><strong>Ruby on Rails:</strong> For additional backend support and integration.</li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Action:</strong> Our development process was collaborative and iterative, involving close coordination with various stakeholders and experts. Here’s a detailed breakdown:
        <ul>
          <li><strong>Assessment and Design:</strong>
            <ul>
              <li><strong>Evaluated Existing API:</strong> Conducted a thorough assessment of the current RESTful API structure and endpoints.</li>
              <li><strong>GraphQL Schema Design:</strong> Defined the schema with types, queries, mutations, and resolvers using Domain-Driven Design (DDD) principles.</li>
            </ul>
          </li>
          <li><strong>Back-End Development:</strong>
            <ul>
              <li><strong>GraphQL Server Implementation:</strong> Developed the GraphQL server using Node.js, integrated with PostgreSQL, and supported by Ruby on Rails.</li>
              <li><strong>API Testing:</strong> Conducted extensive testing to validate functionality and performance, ensuring robust and secure endpoints.</li>
            </ul>
          </li>
          <li><strong>Front-End Development:</strong>
            <ul>
              <li><strong>React Integration:</strong> Implemented the front-end application using React and TypeScript, ensuring a seamless connection to the new GraphQL API.</li>
              <li><strong>User Transition:</strong> Provided training and documentation to facilitate a smooth transition for the development team and clients.</li>
            </ul>
          </li>
          <li><strong>Documentation and Training:</strong>
            <ul>
              <li><strong>Documentation:</strong> Created comprehensive documentation for the new GraphQL API.</li>
              <li><strong>Training Sessions:</strong> Conducted sessions to help the team and clients adapt to the new system.</li>
            </ul>
          </li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Result:</strong> The migration to GraphQL was successfully completed, leading to several key outcomes:
        <ul>
          <li><strong>Improved Efficiency:</strong> The new GraphQL API enabled more precise data fetching and reduced over-fetching and under-fetching.</li>
          <li><strong>Enhanced Developer Productivity:</strong> The team experienced a more manageable codebase and improved productivity.</li>
          <li><strong>Client Satisfaction:</strong> Clients appreciated the enhanced flexibility and performance of the new system.</li>
          <li><strong>Successful Transition:</strong> The project was delivered on time and significantly improved the system's robustness and maintainability.</li>
        </ul>
      </Typography>
    </Container>
  );
}

export default RestToGraphql;
