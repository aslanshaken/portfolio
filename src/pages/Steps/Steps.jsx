import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 200,
    },
  },
});
theme = responsiveFontSizes(theme);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Steps() {
  return (
    <Box sx={{ width: '100%', outline:'none'}} className="p-5">
      <Grid  container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
          <Typography variant="h5" className='mb-2'>Requirements</Typography>
            <Typography>
                Ask first. Before jumping into designing 
                I always make sure that we’re asking the 
                right questions and trying to accomplish 
                the right challenges. This stage includes
                market research, competitive analyses, 
                consulting and exploring possible solutions.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5" className='mb-2'>Design</Typography>
            <Typography>
              Problem solving. At the end of 
              this phase you’ll have a pixel 
              perfect design for your app or 
              website. During the transition 
              from wireframes into the final 
              design I create prototypes 
              simulating final end results 
              before development.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5" className='mb-2'>Development</Typography>
            <Typography>
            Bringing designs to life. Since I’m 
            a designer who can code too, I can 
            easily work in close collaboration 
            with developers up until the finish 
            line and beyond. In case of web 
            projects I also do front-end development.
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={6}>
          <ThemeProvider theme={theme}>
            <Typography variant="h5" className='mb-2'>Quality assurance</Typography>
            <Typography>
            Transparent process. Complete overview
             of my design process through regular 
             meetings. After the initial design 
             versions I’m happy to do user testing 
             with your customers to ensure the best 
             possible solutions for their needs.
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
