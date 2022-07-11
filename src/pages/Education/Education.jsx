import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


export default function Education() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
    <h3 class="text-center mb-5">Education</h3>
      <Grid 
        container 
        justifyContent="space-around"
        alignItems="center" 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={3} sm={5} md={4}>
          <Item>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    New York City College of Technology
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Bachelor's degree
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Computer Systems (Software Development)
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    New York City
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  2020-22
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3} sm={5} md={4}>
          <Item>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Borough of Manhattan Com. College
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Associate of Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  C.S. Networking and Telecommunications
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    New York City
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  2018-20
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={3} sm={5} md={4}>
          <Item>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    General Assembly
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Coding bootcamp
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Software Engineer
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    New York City
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  2018-20
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
