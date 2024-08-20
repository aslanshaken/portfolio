import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import RestToGraphqlImage from './images/restgraphql.jpg';
import Divider from '@mui/material/Divider';

const RestToGraphql = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <Typography variant="h4">
        <a href='https://republic.com' target='_blank' rel='noopener noreferrer' className="project-title">GraphQL Migration</a>
      </Typography>
      <div className="project-image">
        <img src={RestToGraphqlImage} alt="GraphQL Migration at Republic" />
      </div>
      <Divider sx={{ mb: 3 }} />
      <div className="project-description">
        <Typography variant="body1">
          Republic's product was originally developed by a third-party software agency in 2015. Over the years, various engineering teams and contractors made numerous changes to the codebase, each introducing their own naming conventions, structures, and complexities. After 6-7 years, the product had become difficult to scale. The engineering team struggled with making updates, maintaining the old code, and managing our RESTful API, which had become overly complex with multiple outdated endpoints.
        </Typography>
        <Typography variant="body1">
          To improve our system's efficiency, we decided to rewrite most of the codebase, focusing mainly on the backend, and migrate from RESTful API to GraphQL using Domain-Driven Design. The goal was to create a codebase that was easy for new engineers to understand and work with, allowing for faster development, error resolution, streamlined data management, improved performance, and modernized code.
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Planning the Migration</Typography>
        <Typography variant="body1">
          Before starting the migration, our team of five engineers, including myself, held brainstorming sessions. We defined the scope and objectives, set requirements for both the frontend and backend, outlined the steps for migration, created timelines and resource plans, and identified dependencies and third-party integrations that might be affected.
        </Typography>
        <Typography variant="body1">
          Since I came from the product support team and had experience with the admin portal and tools, I was tasked with collaborating with the admin team to ensure a smooth transition. My role involved understanding their codebase, documenting the existing REST API endpoints and their usage, and planning the migration to GraphQL.
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Understanding the Current System</Typography>
        <Typography variant="body1">
          The first step involved deep diving with different admin team members into the current system to understand its architecture, dependencies, and functionalities. I documented everything thoroughly, including REST API endpoints and the data they handled. With this knowledge, I did brainstorming sessions with my team to plan the migration. We discussed naming conventions, folder structures, data migration strategies, integration issues, GraphQL schema design, testing, and more.
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Creating the Migration Plan</Typography>
        <Typography variant="body1">
          After gathering feedback from my team and the admin team, I drafted a migration plan. Key points included:
          <ul>
            <li>Setting up a parallel development environment to avoid disruptions to production.</li>
            <li>Designing an architecture for both frontend and backend that focused on scalability and maintainability.</li>
            <li>Developing a new backend with a comprehensive GraphQL schema covering all existing functionalities.</li>
            <li>Planning data migration to minimize downtime and data loss.</li>
            <li>Updating the frontend to use GraphQL queries and mutations.</li>
            <li>Creating test cases for new code, integration, and performance.</li>
            <li>Running the new system alongside the old system for validation (parallel run and beta testing).</li>
            <li>Developing a deployment plan with rollback procedures and removing old code and unused services.</li>
          </ul>
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Implementing the Migration</Typography>
        <Typography variant="body1">
          After creating the migration plan with my team and presenting it to the admin team, I spent some time on back-and-forth communication and adjusting the migration plan based on feedback from different engineering teams. After getting approval from all teams, I broke down the tasks into smaller parts, created backlog tickets, and started implementing the changes in small phases. In every PR, one member of my team and one member of their team were assigned to review and approve.
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Challenges</Typography>
        <Typography variant="body1">
          I faced several challenges during the migration:
          <ul>
            <li><strong>Learning GraphQL:</strong> I wasn't initially familiar with GraphQL, so I had to quickly learn its best practices and how it differed from REST. With the support of my team and some 1:1 sessions, I picked up the necessary skills.</li>
            <li><strong>Understanding Legacy Code:</strong> The old codebases lacked proper documentation, making it difficult to understand the existing architecture and logic. I spent significant time documenting it.</li>
            <li><strong>Communication Issues:</strong> Communication issues came up with my team and the admin team. Everyone in my team was responsible for their own area of the codebase and was always busy with their own migration tasks. The admin team was in different time zones, making it challenging to find convenient meeting times. Due to frequent changes to the migration plan and numerous calls, I had to adjust the plan many times, and communication was crucial. Sometimes, I had to stay late at night or wake up early in the morning to catch them.</li>
            <li><strong>Handling Integrations:</strong> I was unfamiliar with some integrations like Stripe, KYC, Okta, Carta, and Mailchimp. I had trouble understanding how they worked. I had many calls with different teams and educated myself through their integration API websites.</li>
          </ul>
        </Typography>
        <Typography fontWeight={600} sx={{ mt: 2 }}>Successful Completion</Typography>
        <Typography variant="body1">
          Despite the challenges, the migration project was successfully completed, although it took one month longer than planned. The new codebase was cleaner, well-structured, and easier to maintain and scale. The GraphQL implementation improved data fetching efficiency by 20% and reduced query response time by 25%, solving issues with over-fetching and under-fetching. The team experienced improved productivity and a more manageable codebase. Moreover, our collaboration with cross-functional teams improved significantly.
        </Typography>
      </div>
    </Container>
  );
}

export default RestToGraphql;
