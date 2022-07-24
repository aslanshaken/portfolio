import Ava from "../../assets/copy.jpg";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './About.css';
import { SocialIcon } from 'react-social-icons';


function About() {
  return (
    <Box sx={{ flexGrow: 1}} > 
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid 
         item
         container
         direction="row"
         justifyContent="space-around"
         alignItems="center"
         sm={12}
         md={12}
        >
          <Grid item sm={4} md={6}>
            <img 
              width='100%' 
              height='auto' 
              src={Ava} 
              alt="ava"  
              className="mb-5"
              />
          </Grid>
          <Grid item sm={8} md={6} className="text-center text-muted g-font" >
            <h2>SOFTWARE ENGINEER</h2>
            <h5>a creative, an innovator, a leader</h5>
            <br/>
            <Divider />
            <br/>
            <h6>Based in NYC but open to relocate</h6>
            <h6>aslanshaken@gmail.com</h6>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
             >
            <SocialIcon url="https://twitter.com/aslanshaken" className="m-1"/>
            <SocialIcon url="https://github.com/aslanshaken" className="m-1" />
            <SocialIcon url="https://www.facebook.com/aslanshaken" className="m-1" />
            <SocialIcon url="https://www.linkedin.com/in/aslanshaken/" className="m-1" />
            </Grid>
          </Grid>
        </Grid>
        <Grid textAlign='center' width='85%' className="mb-5 mt-5 g-p-font">
          <p>
            During 4+ years of my career I've worked on
            numerous complex business applications (mostly FinTech/AdTech
            related ones). I've gained vast experience with designing
            software architecture, integrating third-party software,
            optimization and migrating codebase to different technologies. I'm
            passionate about my work and always eager to learn and try
            something new. I deeply care about maintainability and
            aesthetics of software code I create, so I always tend to
            follow coding conventions, maintain code quality and introduce
            best practices. A fast learner with strong time management and 
            multi-tasking skills.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
