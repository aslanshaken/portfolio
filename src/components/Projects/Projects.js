import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects__content">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Company
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Crypto Republic Wallet
            </Typography>
            <Typography variant="body2">
              Built a $50M crypto product from scratch with 4 engineers, managing the full development lifecycle.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/crypto-republic-wallet'><Button size="small">Learn More</Button></Link>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Company
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Migrated REST to GraphQL
            </Typography>
            <Typography variant="body2">
              Managed the switch from REST to GraphQL, handling schema design, testing, and client transition.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/rest-to-graphql'><Button size="small">Learn More</Button></Link>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Cookk
            </Typography>
            <Typography variant="body2">
              Homemade food marketplace connecting consumers with home chefs, managed the full development.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/cookk'><Button size="small">Learn More</Button></Link>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Realty Room
            </Typography>
            <Typography variant="body2">
              AI Tools for CRE Brokers: Generate documents and get instant answers with an AI chatbot.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/realtyroom'><Button size="small">Learn More</Button></Link>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Task Management System
            </Typography>
            <Typography variant="body2">
              Task management APIs with data integrity, RESTful design, and security.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/task-management' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Retail Management System
            </Typography>
            <Typography variant="body2">
              APIs for product management with PostgreSQL ensuring data integrity, security, and error handling.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/retail_application' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Student Loan Disbursements
            </Typography>
            <Typography variant="body2">
              Built a payout dashboard for Dunkin Donuts to handle student loan disbursements from XML files.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/method' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              InfoBox
            </Typography>
            <Typography variant="body2">
              Non-profit offers a digital hub for US information on immigration, housing, jobs, and events.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/KZImmigrantGuide' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              American Dumpling
            </Typography>
            <Typography variant="body2">
              Website for an online dumpling store where users can browse varieties, make purchases, and pay w Stripe.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/adal' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Cycle Shop
            </Typography>
            <Typography variant="body2">
              Built CycleShop, a MERN stack app for full CRUD motorcycle sales between consumers.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/cycleshop' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Go4Pets
            </Typography>
            <Typography variant="body2">
              An e-commerce platform for pet supplies with product browsing, ratings, descriptions, and user sales.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/go4pets' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Covid-19 Tracker
            </Typography>
            <Typography variant="body2">
              Developed a service for up-to-date US Covid-19 data by state, using the Disease Covid-19 Center API.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/covid-19' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Gym
            </Typography>
            <Typography variant="body2">
              Designed a landing page for a gym store, featuring info on the gym and membership options.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/gym' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Personal
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Ava Restaurant
            </Typography>
            <Typography variant="body2">
              Developed a restaurant website with pages for information and table reservations.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://whimsical-tartufo-1178e3.netlify.app' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Freelance
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Tax and Bookkeeping
            </Typography>
            <Typography variant="body2">
              A website for bookkeeping and tax services with info on services, pricing, and call scheduling.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/UIX' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Freelance
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Portfolio
            </Typography>
            <Typography variant="body2">
              Created a personalized portfolio website with essential links to profiles and projects.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/portfolio-ai' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Freelance
            </Typography>
            <Typography component="div" sx={{ mb: 1.5 }} >
              Q-Line Logistics
            </Typography>
            <Typography variant="body2">
              Developed a website for Q Line Logistics to showcase shipping services and enable easy inquiries.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/aslanshaken/q-line' target='_blank'>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Projects
