// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(106.35deg, #163E2B 0%, #0B2619 100%)',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <>
      <RootStyle>

        <Box height={500} display={'flex'} alignItems={'center'} justifyContent={'center'} width={1}>
          <Typography sx={{ color: "white" }}>hero section</Typography>
        </Box>

      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
