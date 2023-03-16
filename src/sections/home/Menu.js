import { Backdrop, Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GradientText from 'src/components/GradientText';
import Image from 'src/components/Image';

// ----------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  background: 'linear-gradient(106.35deg, #163E2B, #0B2619)',
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
export default function Menu() {
  return (
    <RootStyle>
      <Container maxWidth="xl">
        <Backdrop
          open={true}
          sx={{
            position: 'absolute',
            background: 'url(/assets/Texture.png)',
            visibility: 'visible !important',
            opacity: 'unset !important',
          }}
        />
        <Grid container>
          <Grid item md={6} xs={12} py={{ md: 20, sm: 10, xs: 5 }}>
            <Box pr={3}>
              <Box sx={{ position: 'relative' }}>
                <RockvilleText
                  variant="h1"
                  sx={{
                    fontSize: { md: '150px !important', xs: '100px !important' },
                    paddingLeft: 3,
                  }}
                >
                  Menu
                </RockvilleText>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'common.white',
                    mt: '-3rem',
                    maxWidth: 400,
                    mb: 3,
                  }}
                >
                  Welcome to our menu
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'common.white',
                  fontWeight: 100,
                  fontSize: '18px !important',
                  lineHeight: 2,
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Typography>
              <Button variant="contained" size="large" sx={{ px: 10, mt: 6 }}>
                GO TO MENU
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: { md: '100px' } }}>
            <Box sx={{ position: { md: 'absolute', sm: 'block' }, bottom: { xl: '45px', md: '80px', sm: '100px' } }}>
              <Image src={'/assets/home/menu.png'} alt="menu" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
