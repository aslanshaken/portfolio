import { Backdrop, Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../components/Image';
import Container from '../../components/Container';
// next
import NextLink from 'next/link';
import { PATH_PAGE } from '../../routes/paths';

// ----------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    position: 'fixed',
  },
}));

const RockvilleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Rockville',
  color: theme.palette.grey[300_50],
}));

//-----------------------------------
export default function BringFood() {
  return (
    <RootStyle>
      <Container>
        <Box
          my={20}
          position={'relative'}
          sx={{
            background: 'linear-gradient(106.35deg, #163E2B, #0B2619)',
            p: 6,
            textAlign: {md:'center'},
          }}
        >
          <Backdrop
            open={true}
            sx={{
              position: 'absolute',
              background: 'url(/assets/Texture.png)',
              visibility: 'visible !important',
              opacity: 'unset !important',
            }}
          />
          <Typography variant="h2" fontWeight={'normal'} color={'white'}>
            We bring the food to home or office
          </Typography>
        </Box>
        <Grid container color={'black'}>
          <Typography variant="h2" fontWeight={'550'}>Making office catering</Typography>
          <Typography variant="h1" mb={2} fontWeight={'600'}>simple and convenient</Typography>
          <Grid item md={6} xs={12} p={4}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image src={'/assets/home/bring.png'} alt="menu" />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
