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
        <strong>Situation:</strong> During my tenure at Republic,
        our team embarked on an ambitious project to create a
        self-custodial crypto wallet and introduce the digital
        Republic Note token. This initiative aimed to provide
        users with a secure and independent means to receive
        and manage digital assets directly, bypassing the need
        for third-party custodial services. The goal was to
        enhance security, user autonomy, and the overall user experience.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Task:</strong> As part of a dedicated team of four engineers, we were responsible for end-to-end delivery of the project. Our responsibilities spanned across:
        <ul>
          <li><strong>Planning and Design:</strong> Establishing the project requirements, creating architecture designs, and planning the development phases.</li>
          <li><strong>Development:</strong> Implementing both the front end and back end functionalities.</li>
          <li><strong>Testing:</strong> Ensuring the system was secure, reliable, and user-friendly through rigorous testing.</li>
          <li><strong>Deployment:</strong> Successfully launching the product to the market.</li>
        </ul>
        The technologies we used included:
        <ul>
          <li><strong>Ruby on Rails:</strong> For back-end development, leveraging its convention over configuration approach for rapid development.</li>
          <li><strong>PostgreSQL:</strong> As the database to ensure robust data management and transactions.</li>
          <li><strong>GraphQL:</strong> For efficient and flexible API communication between the front end and back end.</li>
          <li><strong>React with TypeScript:</strong> For building a robust, type-safe front-end application.</li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Action:</strong> Our development process was collaborative and iterative, involving close coordination with various stakeholders and experts. Here’s a detailed breakdown:
        <ul>
          <li><strong>Prototyping and Design:</strong>
            <ul>
              <li><strong>Collaboration with Designers:</strong> I worked closely with our designer to create a user-friendly prototype. We focused on intuitive navigation, security features, and seamless user experience.</li>
              <li><strong>Feedback Loop:</strong> We gathered feedback from stakeholders and potential users early in the design phase to refine the prototype.</li>
            </ul>
          </li>
          <li><strong>Back-End Development:</strong>
            <ul>
              <li><strong>Database Schema Design:</strong> I led the design of the database schema in PostgreSQL. This involved defining tables for users, wallets, transactions, and the Republic Note tokens. Ensuring data integrity and security was paramount.</li>
              <li><strong>GraphQL API Development:</strong> I developed GraphQL models, types, resolvers, and mutations. This included creating secure endpoints for wallet creation, asset transactions, and balance inquiries.</li>
              <li><strong>Blockchain Integration:</strong> We worked closely with Wallaby, a blockchain integration team, to ensure seamless and secure interactions with the blockchain for token transactions and asset management.</li>
            </ul>
          </li>
          <li><strong>Front-End Development:</strong>
            <ul>
              <li><strong>React with TypeScript:</strong> I implemented the front-end application using React and TypeScript, focusing on type safety and maintainability. This included developing components for user authentication, wallet management, transaction history, and secure asset transfers.</li>
              <li><strong>User Data Protection:</strong> We integrated advanced encryption techniques and secure storage solutions to protect user data and private keys.</li>
            </ul>
          </li>
          <li><strong>Cross-Functional Collaboration:</strong>
            <ul>
              <li><strong>Crypto Experts:</strong> Regular consultations with crypto experts ensured compliance with best practices in blockchain security and functionality.</li>
              <li><strong>DevOps Team:</strong> Collaborated with DevOps to set up continuous integration and continuous deployment (CI/CD) pipelines, ensuring smooth and reliable deployment processes.</li>
              <li><strong>Quality Assurance (QA):</strong> Worked closely with QA to develop comprehensive test cases, perform extensive testing (including unit, integration, and end-to-end tests), and address any identified issues promptly.</li>
            </ul>
          </li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Result:</strong> The project culminated in the successful launch of the Republic self-custodial crypto wallet and the Republic Note token on December 6, 2023. The key outcomes included:
        <ul>
          <li><strong>Valuation:</strong> The project was valued at $50M, reflecting its market potential and innovation.</li>
          <li><strong>Industry First:</strong> Republic became one of the first fintech companies to offer self-custodial wallets and digital token features, setting a new standard in the industry.</li>
          <li><strong>User Satisfaction:</strong> User satisfaction improved significantly due to the enhanced security, autonomy, and user-friendly interface. Feedback highlighted the ease of use and trust in the system.</li>
          <li><strong>Learning and Growth:</strong> This project was a profound learning experience, enhancing my skills in product development, blockchain integration, and cross-functional teamwork.</li>
        </ul>
      </Typography>
    </Container>
  );
}

export default CryptoRepublicWallet;
