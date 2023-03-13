// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Container, Button, Grid } from '@mui/material';
import Image from 'src/components/Image';
import GradientText from 'src/components/GradientText';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  background: 'linear-gradient(106.35deg, #163E2B 0%, #0B2619 100%)',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 88px)',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    marginTop: '88px'
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <RootStyle>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} display="flex">
            <Stack
              width={1}
              spacing={1}
              sx={{
                my: {
                  xs: 12,
                  md: 'auto',
                },
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
                maxWidth: '700px',
              }}
            >
              <GradientText variant="h1" fontFamily="Rockville">
                Delicious
              </GradientText>
              <Typography
                variant="h1"
                fontFamily="Poppins"
                color="white"
                sx={{
                  lineHeight: '164%',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                }}
              >
                Find out and taste delicious food in the world
              </Typography>

              <Box>
                <Button variant="contained" size="large" sx={{ px: 10 }}>
                  GO TO MENU
                  <Image src="/assets/home/arrow.png" sx={{ width: '85px', pl: 1 }} />
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box display={{ xs: 'flex', md: 'block' }} width={1} justifyContent={'center'}>
              <Image
                alt="Hero image"
                src="/assets/home/hero_img.png"
                disabledEffect
                sx={{ float: 'right', maxWidth: { md: 1, xs: 400 }, pt: { md: 0, xs: 10 } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
