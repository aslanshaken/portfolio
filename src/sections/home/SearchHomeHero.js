// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Grid, Input, InputAdornment, TextField } from '@mui/material';
import Image from '../../components/Image';
import GradientText from '../../components/GradientText';
import { HEADER } from '../../config';
import { PATH_PAGE } from '../../routes/paths';
import Container from '../../components/Container';
import Iconify from 'src/components/Iconify';
import FruitsBottom from './fruits/FruitsBottom';
import FruitsTop from './fruits/FruitsTop';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  background: 'linear-gradient(106.35deg, #163E2B, #0B2619)',
  paddingTop: HEADER.MOBILE_HEIGHT,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    paddingBottom: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function SearchHomeHero() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={12}
          sx={{
            mx: 'auto',
            mt: 10,
            mb: {
              xs: 40,
              md: 'auto',
            },
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: 'md',
          }}
        >
          <Typography textAlign={'center'} variant="h3" fontWeight={'normal'} color={'#FFFFFF'}>
            Enjoy fresh HOMEMADE meals made by certified chefs, <br />
            with diverse cuisine options <br />
            delivered straight to your door - order now
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 0 }} position={'relative'}>
            <Box width={1}>
              <TextField
                placeholder="Enter delivery address"
                size="small"
                sx={{ background: 'white', borderRadius: 1, height: 40 }}
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={'ic:outline-location-on'} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box display="flex" justifyContent="center" >
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 10, px: 6, py: 1, minWidth: 230, ml: { xs: 'auto', sm: -5 }, mr: 'auto', height: 40 }}
              >
                fIND LOCAL cHEFS
              </Button>
            </Box>
          </Stack>
        </Stack>
        <GradientText
          fontFamily="Rockville"
          fontSize={{ xs: 40, md: 80 }}
          lineHeight={1.2}
          sx={{ position: 'absolute', bottom: 50, left: 50 }}
        >
          Delicious
        </GradientText>
        <Box sx={{ position: 'absolute', width: 1, height: 1, left: 0, top: '65%' }}>
          <FruitsTop />
        </Box>
      </Container>
    </RootStyle>
  );
}
