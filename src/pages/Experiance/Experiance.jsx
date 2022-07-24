import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Republic from '../../assets/republic.png';
import Datadog from '../../assets/datadog.jpg'
import GA from '../../assets/ga.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function Experience() {
  return (
    <Box sx={{ flexGrow: 1, padding:"10% 5% 10% 5%" }} > 
      <h3 className="text-center">Work Experience</h3>
      <p className="text-center">Problem solver with strong analytical skills </p>
      <Grid 
        container 
        justifyContent="space-around"
        alignItems="stretch" 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        textAlign='center'
         >
        <Grid item xs={3} sm={5} md={4}>
          <Item >
            <Grid item xs={12} sm container direction="column" height={80}>
              <Grid item>
                <Img alt="complex" src={Republic} height={75}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Software Engineer
                </Typography>
                <Typography variant="body2">
                   New York City
                </Typography>
                <Typography variant="subtitle1" component="div">
                  08/2021 - Present
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3} sm={5} md={4}>
          <Item >
            <Grid item xs={12} sm container direction="column" height={80}>
              <Grid item>
                <Img alt="complex" src={Datadog} height={80}/>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Software Engineer
                </Typography>
                <Typography variant="body2">
                   New York City
                </Typography>
                <Typography variant="subtitle1" component="div">
                  11/2020-07/2021
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3} sm={5} md={4}>
          <Item >
            <Grid item xs={12} sm container direction="column" height={80}>
              <Grid item>
                <Img alt="complex" src={GA} height={80} />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Software Engineer
                </Typography>
                <Typography variant="body2">
                   New York City
                </Typography>
                <Typography variant="subtitle1" component="div">
                  12/2018-10/2020
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
