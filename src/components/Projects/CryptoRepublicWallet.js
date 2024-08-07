import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import Republic from './images/Republic.png';

const CryptoRepublicWallet = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <div className="project-image">
        <img src={Republic} alt="Crypto Republic Wallet" />
      </div>
      <Typography variant="h2">
        <a href='https://republic.com/note' target='_blank' rel='noopener noreferrer' className="project-title">Crypto Republic Wallet</a>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description1">
        During my time at Republic, after completing a project that migrated from REST API to GraphQL, I was assigned to a new team to develop the Republic Crypto Wallet from scratch for millions of users. The purpose of this product was to help crypto startup companies raise money on Republic and give investors access to invest in these companies. Our team consisted of 4 full-time software engineers, including myself, and 1 part-time QA engineer. The product we built was similar to those on Robinhood or Coinbase, where users could create a crypto wallet and buy and transfer assets across the blockchain network.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        Our team was responsible for the entire software development lifecycle. Each team member was a full-stack engineer, and I played a significant role in every part of the process:

        <ul>
          <li><strong>Planning:</strong> I worked with stakeholders, product managers, and other teams to gather requirements and define the project's scope, timeline, and resources. My goal was to ensure our engineering team understood the problem we were solving, who our users were, and the solution we were providing so everyone stayed aligned.</li>
          <li><strong>Designing:</strong> Once the scope was finalized, our team created the system architecture designs. We all contributed to designing functional and non-functional requirements, scalability, schema design, RESTful API endpoints, GraphQL schema, system components, and data flow. The product manager, designer, and I worked on simple prototypes, which the designer used to create the user flow.</li>
          <li><strong>Implementation:</strong> We began building the product even though the designs were not fully finished. The product manager and I assigned roles and responsibilities based on each team member's strengths (e.g., frontend, backend, database, DevOps). We broke down the design into smaller tasks and user stories and prioritized tasks for the first sprint. We used React, TypeScript, GraphQL, REST API, Ruby on Rails, PostgreSQL, and AWS. I set up the development environment by creating a project repository on GitHub, establishing the basic server, routing, and middleware on the backend, and setting up the project structure, routing, and state management on the frontend. Using my experience on the GraphQL migration team, I created the basic types, resolvers, and mutations for the team to use as the code foundation. My tasks included backend work such as database creation, running migrations, implementing API endpoints, documenting everything, and writing unit tests. On the frontend, I created entire pages from scratch, connected frontend components to the backend API, handled API responses, and worked with a third-party team called Wallaby that managed the crypto wallet integration with the blockchain. When users created a crypto Republic wallet, we generated data on our backend and sent API requests to Wallaby’s backend to create the wallet on the blockchain network.</li>
          <li><strong>Challenges:</strong> We faced issues with blockchain integration APIs. Some integrations didn’t work correctly on our server, requiring multiple API rewrites, database structure changes, and updates to code dependencies and authorization protocols. Since we were not crypto experts and the Wallaby team was new, these challenges came up. However, good collaboration, teamwork, and sometimes working late and on weekends helped us solve these problems together.</li>
          <li><strong>Testing:</strong> After completing most of the product, we used a combination of automated and manual testing to identify bugs. The QA team and our team tested the entire product repeatedly to ensure everything functioned as expected and provided the best user experience. We prioritized our users, knowing that without them, there is no business.</li>
          <li><strong>Deployment:</strong> We first launched the product in a staging environment for internal teams to use and test, where we identified errors and gathered suggestions. Then, we launched in production for stakeholders to review and ensure it met customer requirements. While everything was good and met expectations, we had to add some small new features, requiring code rewrites.</li>
          <li><strong>Maintenance:</strong> After receiving stakeholder approval, we launched to the public on December 6th, 2023. In the maintenance phase, we fixed bugs and resolved customer issues. Additionally, we monitored system performance, security, and user experience to identify improvements.</li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        We used agile methodologies like Scrum for iterative development, with regular sprints and stand-up meetings. We tracked tasks, progress, and milestones using project management tools called Linear. We maintained clear and continuous communication with all stakeholders through meetings, reports, and collaboration tools. The project was valued at $50M. Republic became one of the first fintech companies to offer self-custodial wallets and digital token features, setting a new standard in the industry.
      </Typography>
    </Container>
  );
}

export default CryptoRepublicWallet;
