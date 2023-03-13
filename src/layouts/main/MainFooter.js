// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, IconButton } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import GradientText from 'src/components/GradientText';
import SocialsButton from 'src/components/SocialsButton';
import { ArrowTopIcon } from 'src/assets';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

const LINKS = [
  { name: 'About us', href: PATH_PAGE.aboutUs },
  { name: 'Contact us', href: PATH_PAGE.contactUs },
  { name: 'Food', href: PATH_PAGE.contactUs },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.background.hero,
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth={'xl'} sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} md={4} sx={{ mb: 4, pr: { md: 5 } }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' }, width: { xs: 150, md: 245 } }} />

            <Box width={1} display={'flex'} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="body1" color={'text.secondary'} mt={3} maxWidth={350}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ mb: 4, ppr: { md: 5 } }}>
            <Typography variant="h5" mb={3}>
              {'Address'}
            </Typography>
            <Typography variant="body1" mb={3} lineHeight={2}>
              USA <br />
              3678 Summit Park Avenue <br />
              Southfield, MI 697 <br />
            </Typography>
            <GradientText variant="body1" fontWeight={'bold'}>
              +1 700 123 45 67
            </GradientText>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              mb: 4,
              pr: { md: 5 },
              position: 'relative',
              justifyContent: { xs: 'center', md: 'flex-start' },
              display: 'flex',
            }}
          >
            <Box maxWidth={100}>
              <Typography variant="h5" mb={3}>
                {'Links'}
              </Typography>

              {LINKS.map((link) => (
                <NextLink key={link.name} href={link.href} passHref>
                  <Link color={'inherit'} variant="body1" sx={{ display: 'block', mb: 3 }}>
                    {link.name}
                  </Link>
                </NextLink>
              ))}
            </Box>

            <IconButton sx={{ position: 'absolute', top: 0, right: { xs: 0, md: '25%' }, borderRadius: 30 }}>
              <ArrowTopIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={2} sx={{ mb: 4 }}>
            <Typography variant="h5" mb={3}>
              {'Get in touch'}
            </Typography>

            <SocialsButton />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
