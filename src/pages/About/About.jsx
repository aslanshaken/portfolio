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
              className="mb-5 ab-img"
              />
          </Grid>
          <Grid item sm={8} md={6} className="text-center text-muted g-font" >
            <h2 className="header-color">Aslan Shaken</h2>
            <h3>Software Engineer</h3>
            <h5>a creative, an innovator, a leader</h5>
            <br/>
            <Divider />
            <br/>
            <h6>Based in Austin, TX but open to relocate</h6>
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
        <Grid textAlign='center' width='80%' className="mb-5 mt-5 g-p-font">
          <h3>About me</h3>
          <br/>
          <p>
          I am a results-driven software engineer with a proven track record in product support, development of scalable
          full stack applications and database optimization. My approach is characterized by a strong entrepreneurial
          mindset and strategic thinking, empowering me to identify innovative opportunities for business growth.
          Proficient in various programming languages and possessing a keen eye for user experience, I am dedicated to
          delivering impactful results in every project.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
