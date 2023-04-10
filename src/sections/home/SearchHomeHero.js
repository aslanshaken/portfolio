// next
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import GradientText from '../../components/GradientText';
import { HEADER } from '../../config';
import Container from '../../components/Container';
import FruitsTop from './fruits/FruitsTop';
import SearchInput from 'src/components/SearchInput';

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
            mt: { xs: 10, md: 0 },
            mb: {
              xs: 40,
              md: 10,
            },
            justifyContent: 'center',
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: 'md',
          }}
        >
          <Typography textAlign={'center'} variant="h3" fontWeight={'normal'} color={'#FFFFFF'}>
            Enjoy fresh HOMEMADE foods made by certified chefs, <br />
            with diverse cuisine options <br />
            delivered straight to your door - order now
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 0 }} position={'relative'}>
            <SearchInput
              icon="ic:outline-location-on"
              placeholder="Enter delivery address"
              buttonLabel="Find Austin-based chefs"
            />
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
