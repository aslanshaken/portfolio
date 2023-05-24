// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import GradientText from '../../components/GradientText';
import SocialsButton from '../../components/SocialsButton';
import { ArrowTopIcon } from '../../assets';
import { Box } from '@mui/system';
import getAppInfo from 'src/utils/getAppInfo';
import { useState } from 'react';
import PolicyDialog from 'src/sections/footer/policyDialog';
import ServiceDialog from 'src/sections/footer/serviceDialog';

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
  const [policyDialogIsOpen, setPolicyDialogIsOpen] = useState(false);
  const [serviceDialogIsOpen, setServiceDialogIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <RootStyle>
      <PolicyDialog open={policyDialogIsOpen} onClose={() => setPolicyDialogIsOpen(false)} />
      <ServiceDialog open={serviceDialogIsOpen} onClose={() => setServiceDialogIsOpen(false)} />
      <Container>
        <Stack pt={6} pb={{ xs: 10, md: 2 }}>
          <Stack direction={'row'}>
            <Stack mx={'auto'}>
              <Logo sx={{ mx: 'auto', width: 200 }} />
              <GradientText
                display={{ xs: 'none', md: 'block' }}
                mt={2}
                variant="body1"
                fontWeight={'bold'}
                textAlign={'center'}
              >
                support@cookk.co
              </GradientText>
            </Stack>

            <IconButton
              onClick={scrollToTop}
              sx={(theme) => ({
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: theme.spacing(8),
                right: { xs: 0, sm: '25%' },
                borderRadius: 30,
                p: 0.3,
              })}
            >
              <ArrowTopIcon />
            </IconButton>
          </Stack>
          <Stack
            py={4}
            spacing={3}
            display={{ xs: 'block', md: 'none' }}
            textAlign={'center'}
            maxWidth={400}
            mx={'auto'}
          >
            <GradientText variant="body1" fontWeight={'bold'} textAlign={'center'}>
              support@cookk.co
            </GradientText>
            {/* <Typography color={'text.secondary'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Typography>
            <Typography>3678 Summit Park Avenue Southfield, MI 697,US</Typography> */}
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={{ xs: 'center', md: 'space-between' }}>
            <Stack direction={'row'} spacing={3} display={{ xs: 'none', md: 'flex' }}>
              <Typography>{`© ${getAppInfo('name')} 2023`}</Typography>
              <Link onClick={() => setPolicyDialogIsOpen(true)} underline="none" sx={{ cursor: 'pointer' }}>
                <Typography color={'white'}>Privacy Policy</Typography>
              </Link>
              <Link onClick={() => setServiceDialogIsOpen(true)} underline="none" sx={{ cursor: 'pointer' }}>
                <Typography color={'white'}>Terms of Service</Typography>
              </Link>
            </Stack>
            <SocialsButton links={{ instagram: 'https://instagram.com/cookk.co' }} />
          </Stack>
          <Stack
            flexWrap={'wrap'}
            display={{ md: 'none', xs: 'flex' }}
            direction={'row'}
            marginTop={4}
            gap={4}
            justifyContent={{ xs: 'center', md: 'space-between' }}
          >
            <Typography>{`© ${getAppInfo('name')} 2023`}</Typography>
            <Link onClick={() => setPolicyDialogIsOpen(true)} underline="none" sx={{ cursor: 'pointer' }}>
              <Typography color={'white'}>Privacy Policy</Typography>
            </Link>
            <Link onClick={() => setServiceDialogIsOpen(true)} underline="none" sx={{ cursor: 'pointer' }}>
              <Typography color={'white'}>Terms of Service</Typography>
            </Link>
          </Stack>
        </Stack>
        <Box
          display={{ xs: 'block', md: 'none' }}
          textAlign={'center'}
          py={2}
          sx={{ background: 'white', position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        >
          <Typography color={'text.secondary'}>© 2023 Cookk, All rights reserved</Typography>
        </Box>
      </Container>
      {/* <Divider />
      <Container maxWidth={'xl'} sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          <Grid item xs={12} sm={6} md={4} sx={{ mb: 4, pr: { sm: 5 } }}>
            <Logo sx={{ mx: { xs: 'auto', sm: 'inherit' }, width: 245 }} />

            <Box width={1} display={'flex'} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <Typography variant="body1" color={'text.secondary'} mt={3} maxWidth={350}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ mb: 4, ppr: { sm: 5 } }}>
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
            sm={6}
            md={3}
            sx={{
              mb: 4,
              pr: { sm: 5 },
              position: 'relative',
              justifyContent: { xs: 'center', sm: 'flex-start' },
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

            <IconButton
              onClick={scrollToTop}
              sx={{ position: 'absolute', top: 0, right: { xs: 0, sm: '25%' }, borderRadius: 30, p: 0.3 }}
            >
              <ArrowTopIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={6} md={2} sx={{ mb: 4 }}>
            <Typography variant="h5" mb={3}>
              {'Get in touch'}
            </Typography>

            <SocialsButton />
          </Grid>
        </Grid>
      </Container> */}
    </RootStyle>
  );
}
