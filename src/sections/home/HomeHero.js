// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import Image from '../../components/Image';
import GradientText from '../../components/GradientText';
import { HEADER } from '../../config';
import { PATH_PAGE } from '../../routes/paths';
import Container from '../../components/Container';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  background: 'linear-gradient(106.35deg, #163E2B, #0B2619)',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    paddingBottom: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <RootStyle>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 0 }}
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
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
              <GradientText variant="h1" fontFamily="Rockville" fontSize={'80px !important'} lineHeight={1.2}>
                Delicious
              </GradientText>
              <Typography
                variant="h2"
                color="white"
                sx={{
                  lineHeight: '164%',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  mb: '24px !important',
                }}
              >
                Find out and taste delicious food in the world
              </Typography>

              <Box>
                <NextLink href={PATH_PAGE.searchChef.root} passHref>
                  <Button variant="contained" size="large" sx={{ px: 10 }}>
                    GO TO MENU
                    <Image src="/assets/home/arrow.png" sx={{ width: '85px', pl: 1 }} alt='arrow' />
                  </Button>
                </NextLink>
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
