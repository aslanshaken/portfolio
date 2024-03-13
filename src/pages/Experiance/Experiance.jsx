import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Republic from '../../assets/republic.png';
import Datadog from '../../assets/datadog.jpg';
import Cookk from '../../assets/cookkk.png';
import GA from '../../assets/GA.png'

const ExperienceContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(5,10),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  height: '50px',
});

const experienceData = [
  {
    image: Republic,
    title: 'Software Engineer',
    location: 'NYC, USA',
    date: 'Jul 2020 - Sept 2023',
  },
  {
    image: Datadog,
    title: 'Software Engineer',
    location: 'NYC, USA',
    date: 'Oct 2018 - Jun 2020',
  },
  {
    image: GA,
    title: 'Software Engineer Fellow',
    location: 'NYC, USA',
    date: 'May 2018 - Sep 2018',
  },
];

const Experience = () => {
  return (
    <ExperienceContainer>
        <h3 className="text-center mb-4">Work Experience</h3>
      <p className="text-center mb-5">
        Executed full-stack development projects with a focus on scalable solutions and efficient deployment
      </p>
      <Grid container justifyContent="space-around" alignItems="stretch" spacing={3}>
        {experienceData.map((experience, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Item>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Img alt="company logo" src={experience.image} height={80} />
                </Grid>
                <Grid item>
                  <Typography variant="body1" gutterBottom>
                    {experience.title}
                  </Typography>
                  <Typography variant="body2">{experience.location}</Typography>
                  <Typography variant="subtitle1" component="div">
                    {experience.date}
                  </Typography>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        ))}
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
