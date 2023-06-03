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
            <h3>SOFTWARE ENGINEER</h3>
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
        <Grid textAlign='center' width='85%' className="mb-5 mt-5 g-p-font">
          <p>
          A self-driven entrepreneur with 5 years of software engineering experience, I have successfully launched my own start up called Cookk,
          designed software architecture, integrated third-party software, and optimized complex business applications. I have strong
          problem-solving skills, as well as the ability to collaborate effectively as a reliable, proactive team player. Passionate about my
          work, I consistently strive to learn and embrace new technologies and methodologies
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
