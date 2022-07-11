import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Covid from "../../assets/covid-19.png";
import Cycle from "../../assets/cycle.png";
import Go4Pets from "../../assets/go4pets.png";
import Go4Profit from "../../assets/go4profit.png";
import InfoBox from "../../assets/info-box.png";
import QLine from "../../assets/q-line.png";
import Gym from "../../assets/gym.png";
import Ava from "../../assets/ava.png";
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Project() {
  return (
    <Box sx={{ flexGrow: 1, padding:"10% 8% 10% 8%" }} >
      <h3 class="text-center">Projects</h3>
      <p class="text-center mb-5">
        Working for different projects, it helped me 
        to adapt to the changes quickly and made me a
         mature team worker
      </p>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={3}>
          <Link href="https://github.com/aslanshaken/KZImmigrantGuide">
          <img src={InfoBox} width="100%" height="auto" alt="ava" />
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://github.com/aslanshaken/covid-19">
              <img src={Covid} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://github.com/aslanshaken/go4profit-v2">
              <img src={Go4Profit} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://github.com/aslanshaken/go4pets">
              <img src={Go4Pets} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Link href="https://github.com/aslanshaken/q-line">
            <img src={QLine} width="100%" height="auto" alt="ava" />
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://github.com/aslanshaken/cycleshop">
              <img src={Cycle} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://github.com/aslanshaken/gym">
              <img src={Gym} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
            <Link href="https://whimsical-tartufo-1178e3.netlify.app/">
              <img src={Ava} width="100%" height="auto" alt="ava" />
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
