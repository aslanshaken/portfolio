import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1,  padding:"10% 8% 10% 8%" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={12}
      >
        <Grid item xs={6}>
          <Item>
          <h3 class="text-center">Contact me</h3>
          <p class="text-center mb-5">
          I’m interested in freelance opportunities 
          – especially ambitious or large projects.
           However, if you have other request or 
           question, don’t hesitate to use the form
          </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
