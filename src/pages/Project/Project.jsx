import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default function Project() {

  const projects = [
    {
      title: 'Ava Restaurant',
      link: 'https://whimsical-tartufo-1178e3.netlify.app/',
      description: 'Developed a restaurant website featuring \
      essential pages for users to learn about the establishment \
      and easily reserve a table."',
      imageSrc: require("../../assets/ava.png"),
      stacks: "HTML, CSS and JavaScript"
    },
    {
      title: 'Gym',
      link: 'https://github.com/aslanshaken/gym',
      description: 'Designed a straightforward landing page for a gym store,\
      offering users the option to explore information about the gym and various membership types.',
      imageSrc: require("../../assets/gym.png"),
      stacks: "HTML, CSS and JavaScript"
    },
    {
      title: 'Q-Line',
      link: 'https://github.com/aslanshaken/q-line',
      description: 'Developed a website for Q Line Logistics, \
      showcasing their top-notch services in Reefer and DryVan \
      shipping. The simple yet functional website allows users to \
      explore information about the company and easily send messages \
      to inquire further.',
      imageSrc: require("../../assets/q-line.png"),
      stacks: "JavaScript, React and CSS"
    },
    {
      title: 'Covid-19',
      link: 'https://github.com/aslanshaken/covid-19',
      description: 'Developed a service where users can \
      access the latest information on Covid-19 confirmed \
      cases, deaths, and recoveries in the US, sorted by \
      states. Utilized the Public API from the Disease \
      Covid-19 Center government for accurate data retrieval.',
      imageSrc: require("../../assets/covid-19.png"),
      stacks: "HTML, CSS, JavaScript and API"
    },
    {
      title: 'Go4Profit',
      link: 'https://github.com/aslanshaken/go4profit-v2',
      description: 'Built a website for Go4Profit, a bookkeeping \
      company helping businesses understand financial data. The \
      site introduces users to Go4Profit, outlines services, and \
      allows scheduling a call.',
      imageSrc: require("../../assets/go4profit.png"),
      stacks: "JavaScript and React "
    },
    {
      title: 'Go4Pets',
      link: 'https://github.com/aslanshaken/go4pets',
      description: 'Constructed Go4Pets, an e-commerce \
      platform for pet suppliers. This platform offers \
      services to pet owners, allowing them to browse \
      through a variety of products, view ratings, and \
      read detailed descriptions. Each item on the \
      homepage links to a corresponding page with \
      additional information. Furthermore, users \
      have the capability to add their own items for sale.',
      imageSrc: require("../../assets/go4pets.png"),
      stacks: "JavaScript, React and AirTable DB"
    },
    {
      title: 'Cycle Shop',
      link: 'https://github.com/aslanshaken/cycleshop',
      description: 'Built CycleShop, a full CRUD motorcycle exchange \
      app using the MERN stack. CycleShop enables consumer-to-consumer \
      sales of motorcycles through its website',
      imageSrc: require("../../assets/cycle.png"),
      stacks: "React, Node.js, Express, MongoDB"
    },
    {
      title: 'Bookkeeping Landing Page',
      link: 'https://github.com/aslanshaken/go4profit-v3',
      description: 'Created a website for Go4Profit, a bookkeeping \
      company dedicated to assisting businesses in understanding \
      their financial data. The website features basic pages \
      introducing users to Go4Profit, outlining the services offered,\
      and providing the option to schedule a call. Additionally, \
      implemented a messaging system using API to send messages \
      to the server, which in turn notifies the admin via email.',
      imageSrc: require("../../assets/go4ProfitNew.png"),
      stacks: "JavaScript, React and MUI"
    },
    {
      title: 'American Dumpling',
      link: 'https://github.com/aslanshaken/adal',
      description: 'I developed a website for an online dumpling store,\
      allowing users to browse available dumpling varieties, make online \
      purchases, and proceed with payments. For secure transactions, a dedicated \
      Stripe integration was implemented. Users are seamlessly redirected to the \
      payment flow after clicking on the payment link.',
      imageSrc: require("../../assets/dumpling.png"),
      stacks: "JavaScript, React, Stripe and MUI"
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/aslanshaken/portfolio-ai',
      description: 'Created a portfolio website providing users \
       with information about the individual, including essential \
       links to various online profiles and projects.',
      imageSrc: require("../../assets/portfolio.png"),
      stacks: "JavaScript, TypeScript, React, Redux and MUI "
    },
    {
      title: 'InfoBox',
      link: 'https://github.com/aslanshaken/KZImmigrantGuide',
      description: 'Creating a digital hub for everyone in the US, \
      our non-profit project aims to provide accurate and up-to-date \
      information on various topics like immigration, housing, job \
      opportunities, and cultural events.',
      imageSrc: require("../../assets/info-box.png"),
      stacks: "Ruby on Rails, JavaScript and React"
    },
    {
      title: 'Tax and Bookkeeping',
      link: 'https://github.com/aslanshaken/UIX',
      description: 'A basic website for a company offering bookkeeping \
       and tax services to clients. On this website, clients can learn \
       more about the company services, pricing, and schedule a call.',
      imageSrc: require("../../assets/go4profitUp.png"),
      stacks: "JavaScript, TypeScript, React and MUI"
    },
    {
      title: 'Student Loan Disbursements',
      link: 'https://github.com/aslanshaken/method',
      description: 'Created a payout dashboard for student loan disbursements. The dashboard \
       will allow the client, Dunkin Donuts, to upload an XML file\
       that contains all the necessary information to make a one-time payout to a student loan.',
      imageSrc: require("../../assets/method.png"),
      stacks: "JavaScript, TypeScript, Next.js, MUI, and Prisma"
    },
    {
      title: 'Retail Management System',
      link: 'https://github.com/aslanshaken/retail_application',
      description: 'It offers a comprehensive platform \
      for product management in retail settings. It features APIs for listing active products, \
      searching, creating, updating, and deleting products. With PostgreSQL as its database, \
      the system ensures data integrity, RESTful API design, error handling, and robust security \
      measures.',
      imageSrc: require("../../assets/Retail.png"),
      stacks: "Ruby on Rails, API and PostgreSQL"
    },
     {
      title: 'Task Management System',
      link: 'https://github.com/aslanshaken/task-management',
      description: 'This application delivers a suite of APIs for seamless task management, including \
      creation, updating, assignment, progress tracking, and statistics retrieval.\
      The system maintains data integrity, adopts RESTful API design principles, implements robust \
      error handling, and enforces rigorous security measures.',
      imageSrc: require("../../assets/task.png"),
      stacks: "Ruby on Rails, API and PostgreSQL"
    },
    {
      title: 'Cookk',
      link: 'https://cookk.co',
      description: "I started Cookk to connect local consumers with home chefs, addressing \
      problems like the need for healthy, customized meals and a platform for chefs to showcase \
      their skills. Our mission is to provide a user-friendly app, allowing customers to find nearby \
      chefs and explore a variety of meal options. In terms of technology, I managed the entire \
      development lifecycle, from application design to testing and deployment.",
      imageSrc: require("../../assets/cookkimg.png"),
      stacks: "Ruby on Rails, React, AWS, Stripe, SendGrid, Sentry, and CloudFlare"
    },
    {
      title: 'Migrating from RESTful API to GraphQL',
      link: 'https://republic.com',
      description: "While working at Republic, I played a key role in the team, \
      leading the switch from a RESTful API to GraphQL using DDD \
      principles. We took steps like evaluating the existing RESTful API, focusing \
      on one part at a time, and creating a structured schema with types, queries, \
      mutations, and resolvers. Testing was thorough, we worked on multiple parts \
      simultaneously, helped clients transition smoothly, and documented everything. \
      I was involved in tasks covering the database, back end, and front end.",
      imageSrc: require("../../assets/graphql.jpg"),
      stacks: "React, JavaScript, Typescript, Node.js, Mob X, Ruby on Rails, PostgreSQL and GraphQL"
    },
    {
      title: 'Republic Wallet / Republic Note',
      link: 'https://republic.com/note',
      description: "During my time at Republic, I was part of the Republic\
       Crypto X-team. Our team made significant contributions to crucial \
       projects, including the Republic Wallet and Republic Note. Both \
       projects were publicly launched on December 6, 2023, achieving a \
       market cap of 60M. We were involved in the entire process, from \
       planning and design to coding, testing, release, and continuous \
       maintenance, ensuring the projects' smooth operation.",
      imageSrc: require("../../assets/republicNote.png"),
      stacks: "React, JavaScript, Typescript, Node.js, Mob X, Ruby on Rails, PostgreSQL and GraphQL"
    },
    
  ];


  return (
  <Box sx={{ flexGrow: 1, padding: "10% 8% 10% 8%",  }}>
  <h3 className="text-center mb-4">Projects</h3>
  <p className="text-center mb-5">
    Working on different projects helped me adapt to changes quickly and made me a mature team worker
  </p>
  <Grid container spacing={{ xs: 2, md: 3 }}>
    {projects.slice().reverse().map((project, index) => (
      <React.Fragment key={index}>
        <Grid container item xs={12} md={12} sx={{ justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #ccc'}}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Link href={project.link} sx={{ '&:hover': { opacity: [0.9, 0.8, 0.7] } }}>
              <img src={project.imageSrc} width="70%" height="auto" alt={project.title} style={{ borderRadius: '10%' }}  />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center', marginTop: '20px' }}>
            <h4>{project.title}</h4>
            <Link href={project.link} target="_blank" fontSize="15px" rel="noopener noreferrer">
              {project.link}
              <br/>
            </Link>
            <br/>
            <p><b>Description</b>: {project.description}</p>
            <p><b>Tech Stack</b>: {project.stacks}</p>
          </Grid>
        </Grid>
      </React.Fragment>
    ))}
  </Grid>
</Box>

  );
}


