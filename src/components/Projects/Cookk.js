import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import CookkImage from './images/cookk.png';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

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

      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description1">
        I've always been curious about what it’s like to build a startup from scratch and sell it to customers. So, I decided to put my software engineering skills and entrepreneurial mindset to the test. As an immigrant in the USA, I often struggled to find familiar, healthy, homemade food. Many home chefs were selling food through social media platforms like Facebook and WhatsApp, but there was no dedicated platform for them to showcase their skills (except a couple of them which didn't sovled the entire problem). I saw an opportunity to solve this problem and founded Cookk, a platform designed to connect local consumers with home chefs, offering healthy and customizable meals.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description2">
        In researching startup cases, I discovered that every venture is unique. Some founders raised money at the idea stage, while others built an MVP, gained traction, and then sought funding. Initially, I didn’t fully grasp concepts like product-market fit, value proposition, or customer engagement. As a software engineer, I jumped straight into building the MVP without much dialogue with potential users or chefs.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description3">
        As a solo founder, I started by analyzing competitors and their user flows. I created a simple prototype in Figma based on this analysis. I struggled to find a designer within my budget who understood user needs, so I ended up designing the product myself.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description4">
        I developed a user-friendly prototype and laid out the system architecture, including functional and non-functional requirements, REST API endpoints, data schema design, and scalability considerations. My focus was on launching the MVP quickly, so I kept the functionalities simple. For the back end, I used Ruby on Rails due to its ease of use and my familiarity with it. I set up database tables, API endpoints for user management, meal listings, order processing, and integrated with PostgreSQL, SendGrid, and AWS (with help from a friend skilled in AWS infrastructure).
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description5">
        For the front end, I used React, Material-UI, and other libraries to enhance user experience and ensure seamless interactions. I built all user-facing features and made the site mobile-responsive. I integrated Stripe for secure payments and attempted to use DoorDash’s White-Label Delivery service, but it didn’t work out.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description6">
        After completing the full-stack app, I tested it with friends before launching publicly. After fixing some bugs and receiving a good number of orders (10-20 per day), I manually onboarded chefs and coordinated orders through calls, texts, and emails. Despite the traction, I wasn’t making any money, and I ran into challenges with delivery logistics, market research, and funding.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description7">
        I created pitch decks and applied to accelerators but faced rejections. Running out of budget and dealing with operational issues forced me to stop the project. Despite the setbacks, I gained valuable insights into the startup world. I learned that understanding market needs and conducting thorough research before diving into development are crucial. I realized I should have spent more time engaging with potential users and validating the product-market fit before building the MVP.
      </Typography>

    </Container>
  );
}

export default Cookk;
