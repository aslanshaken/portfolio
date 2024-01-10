import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default function Project() {

  const projects = [
    {
      title: 'InfoBox',
      link: 'https://github.com/aslanshaken/KZImmigrantGuide',
      description: 'Description for InfoBox',
      imageSrc: require("../../assets/info-box.png"),
      stacks: ""
    },
    {
      title: 'Covid-19',
      link: 'https://github.com/aslanshaken/covid-19',
      description: 'Description for Covid-19',
      imageSrc: require("../../assets/covid-19.png"),
      stacks: ""
    },
    {
      title: 'Go4Profit',
      link: 'https://github.com/aslanshaken/go4profit-v2',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/go4profit.png"),
      stacks: ""
    },
    {
      title: 'Go4Pets',
      link: 'https://github.com/aslanshaken/go4pets',
      description: 'Description for Go4Pets',
      imageSrc: require("../../assets/go4pets.png"),
      stacks: ""
    },
    {
      title: 'Q-Line',
      link: 'https://github.com/aslanshaken/q-line',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/q-line.png"),
      stacks: ""
    },
    {
      title: 'Cycle Shop',
      link: 'https://github.com/aslanshaken/cycleshop',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/cycle.png"),
      stacks: ""
    },
    {
      title: 'Gym',
      link: 'https://github.com/aslanshaken/gym',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/gym.png"),
      stacks: ""
    },
    {
      title: 'Ava Restaurant',
      link: 'https://whimsical-tartufo-1178e3.netlify.app/',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/ava.png"),
      stacks: ""
    },
    {
      title: 'Bookkeeping Landing Page',
      link: 'https://github.com/aslanshaken/go4profit-v3',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/go4ProfitNew.png"),
      stacks: ""
    },
    {
      title: 'Gym',
      link: 'https://github.com/aslanshaken/gym',
      description: 'Description for Go4Profit',
      imageSrc: require("../../assets/gym.png"),
      stacks: ""
    },
    {
      title: 'American Dumpling',
      link: 'https://github.com/aslanshaken/adal',
      description: 'Description',
      imageSrc: require("../../assets/Dumpling.png"),
      stacks: ""
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/aslanshaken/portfolio-ai',
      description: 'Description for Go4Profit Project',
      imageSrc: require("../../assets/portfolio.png"),
      stacks: ""
    },
    {
      title: 'Tax and Bookkeeping',
      link: 'https://github.com/aslanshaken/UIX',
      description: 'Description',
      imageSrc: require("../../assets/go4profitUp.png"),
      stacks: ""
    },
    {
      title: 'Student Loan Disbursements',
      link: 'https://github.com/aslanshaken/method',
      description: 'Description',
      imageSrc: require("../../assets/method.png"),
      stacks: ""
    },
    {
      title: 'Cookk',
      link: 'https://cookk.co',
      description: "I started Cookk to connect local consumers with home chefs, addressing \
      problems like the need for healthy, customized meals and a platform for chefs to showcase \
      their skills. Our mission is to provide a user-friendly app, allowing customers to find nearby \
      chefs and explore a variety of meal options. In terms of technology, I managed the entire \
      development lifecycle, from application design to testing and deployment, I implemented \
      effective marketing strategies and employed a robust tech stack, completing the platform \
      in just two months",
      imageSrc: require("../../assets/cookkimg.png"),
      stacks: "Ruby on Rails, React, AWS, Stripe, SendGrid, Sentry, and CloudFlare"
    },
    
  ];


  return (
     <Box sx={{ flexGrow: 1, padding: "10% 8% 10% 8%" }}>
      <h3 className="text-center mb-4">Projects</h3>
      <p className="text-center mb-5">
        Working on different projects helped me adapt to changes quickly and made me a mature team worker.
      </p>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {projects.slice().reverse().map((project, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Link href={project.link} sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }} >
                <img src={project.imageSrc} width="70%" height="auto" alt={project.title} />
              </Link>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <h4>{project.title}</h4>
              <Link href={project.link} target="_blank" fontSize="13px" rel="noopener noreferrer">
                {project.link}
              </Link>
              <p><b>Description</b>: {project.description}</p>
              <p><b>Tech Stack</b>: {project.stacks} </p>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
