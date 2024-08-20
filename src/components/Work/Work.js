import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Republic from './images/republic.png';
import Datadog from './images/datadog.jpg';
import GA from './images/ga.png';
import './Work.css';

const workData = [
  {
    image: Republic,
    title: 'Software Engineer',
    location: 'NYC, USA',
    date: 'Aug 2021 - Jul 2024',
  },
  {
    image: Datadog,
    title: 'Software Engineer',
    location: 'NYC, USA',
    date: 'Jan 2020 - Jun 2021',
  },
  {
    image: GA,
    title: 'Software Engineer Fellow',
    location: 'NYC, USA',
    date: 'May 2019 - Sep 2019',
  },
];

const Work = () => {
  return (
    <Box className="work__container">
      <h3 className="work__title">Work Experience</h3>
      <p className="work__description">
        Executed full-stack development projects with a focus on scalable solutions and efficient deployment
      </p>
      <Grid container justifyContent="space-around" alignItems="stretch" spacing={3}>
        {workData.map((work, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Paper className="work__item">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <img className="Img" alt="company logo" src={work.image} height={80} />
                </Grid>
                <Grid item>
                  <Typography variant="body1" gutterBottom>
                    {work.title}
                  </Typography>
                  <Typography variant="body2">{work.location}</Typography>
                  {/* <Typography variant="subtitle1" component="div">
                    {work.date}
                  </Typography> */}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
