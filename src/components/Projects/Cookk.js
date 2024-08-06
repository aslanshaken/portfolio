import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import CookkImage from './images/cookk.png';
import Button from '@mui/material/Button';

const Cookk = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <div className="project-image">
        <img src={CookkImage} alt="Cookk Project" />
      </div>
      <Typography variant="h2">
        <a href='https://github.com/UnitedFood/front-end' target='_blank' rel='noopener noreferrer' className="project-title">Cookk</a>
      </Typography>

      <div className='project-buttons'>
        <Button size="small" variant='outlined' href='https://www.figma.com/board/lChJW00ET353gmxC69Rxrd/Cookk-Diagram?node-id=0-1&t=MMROurDNtqlEurGD-1' target='_blank'>Whiteboard</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/6iDcJUwdqlc9lVLt6tkbEC/Cookk?node-id=0-1&t=bMPUnBs7kSD7zzVr-1' target='_blank'>MVP Design</Button>
        <Button size="small" variant='outlined' href='https://youtu.be/DfgF7he-5tY?si=Grgrz2V00ZbaCCL8' target='_blank'>Video Demo</Button>
      </div>


      <Typography variant="body1" sx={{ mb: 2 }} className="project-description1">
        Founded Cookk to bridge the gap between local consumers and home chefs, addressing the demand for healthy, personalized meals and providing chefs a platform to showcase their culinary talents.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description1">
        <strong>Situation:</strong> I started Cookk to connect local consumers with home chefs, aiming to address the need for healthy, customized meals and provide a platform for chefs to showcase their skills. Despite a strong vision and technological execution, Cookk faced significant challenges including logistical issues, insufficient market research, and limited networking, which ultimately hindered its success.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Task:</strong> As the founder and lead developer of Cookk, my role was to independently develop a full-stack MVP within a month and manage the entire software development lifecycle. This involved creating a user-friendly app, integrating payment solutions, and ensuring a seamless connection between front-end and back-end components. I also had to navigate challenges related to market fit and operational efficiency.
        <ul>
          <li><strong>Development:</strong> Independently developed the full-stack MVP, overseeing the entire software development lifecycle.</li>
          <li><strong>Market Research:</strong> Conducted initial market research and created a prototype based on competitor analysis.</li>
          <li><strong>Technologies Used:</strong> Utilized Ruby on Rails for back-end, PostgreSQL for the database, React for front-end, and integrated Stripe for payments.</li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Action:</strong>
        <ul>
          <li><strong>Prototyping and Design:</strong>
            <ul>
              <li><strong>Application Design:</strong> Developed a user-friendly prototype and gathered feedback from stakeholders.</li>
            </ul>
          </li>
          <li><strong>Back-End Development:</strong>
            <ul>
              <li><strong>Database Design:</strong> Led the design of the PostgreSQL database schema, including tables for users, meals, and orders.</li>
              <li><strong>API Development:</strong> Implemented APIs in Ruby on Rails for user management, meal listings, and order processing.</li>
              <li><strong>Infrastructure:</strong> Set up AWS infrastructure from scratch and deployed server code.</li>
            </ul>
          </li>
          <li><strong>Front-End Development:</strong>
            <ul>
              <li><strong>React Development:</strong> Built the front end using React, connecting it with server APIs.</li>
              <li><strong>UI/UX:</strong> Used Material-UI and other libraries to enhance the user experience and ensure seamless interactions.</li>
            </ul>
          </li>
          <li><strong>Payment Integration:</strong>
            <ul>
              <li><strong>Stripe Integration:</strong> Implemented Stripe for secure and efficient payment processing.</li>
            </ul>
          </li>
          <li><strong>Networking and Partnerships:</strong>
            <ul>
              <li><strong>Investor Pitching:</strong> Created pitch decks to attract potential investors and engage in educational initiatives.</li>
              <li><strong>Logistics:</strong> Integrated DoorDash’s White-Label Delivery service to manage delivery operations.</li>
            </ul>
          </li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Result:</strong> Despite the comprehensive development and strategic efforts, Cookk encountered several challenges:
        <ul>
          <li><strong>Logistical Issues:</strong> Difficulty in managing and scaling delivery logistics affected service reliability.</li>
          <li><strong>Market Fit:</strong> Insufficient market research led to a mismatch between product features and customer needs.</li>
          <li><strong>Networking Constraints:</strong> Limited networking and partnership opportunities restricted growth and investment prospects.</li>
        </ul>
        The experience provided valuable lessons in market research, logistical planning, and networking, highlighting the importance of these factors for startup success.
      </Typography>
    </Container>
  );
}

export default Cookk;
