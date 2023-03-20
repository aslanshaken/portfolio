import { Backdrop, Box, Typography } from '@mui/material';
import { HEADER } from '../../config';
import { styled } from '@mui/material/styles';
import Iconify from '../../components/Iconify';
import { IconButtonAnimate } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  paddingTop: HEADER.MOBILE_HEIGHT,
  backgroundImage: 'url(/assets/search-chef/hero_bg.png)',
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: 530,
    position: 'fixed',
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    backgroundRepeat: 'no-repeat',
  },
}));

export default function HeroSection() {
  return (
    <Box>
      <RootStyle>
        <Backdrop open sx={{ position: 'absolute', opacity: `0.2 !important` }} />
        <Box sx={{ position: 'relative', alignItems: 'center', display: 'flex' }}>
          <Typography className="hero_text" variant="h2">
            Japan cuisine
          </Typography>
          <IconButtonAnimate sx={{ p: 0, color: 'inherit', width: 40, height: 40, fontSize: '5rem', mt: 1, ml: 3 }}>
            <Iconify icon={'material-symbols:keyboard-arrow-down-rounded'} />
          </IconButtonAnimate>
        </Box>
      </RootStyle>
    </Box>
  );
}
