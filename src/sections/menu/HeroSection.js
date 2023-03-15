import { Backdrop, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { HEADER } from 'src/config';
import { styled } from '@mui/material/styles';
import Image from 'src/components/Image';
import Iconify from 'src/components/Iconify';
import { IconButtonAnimate } from 'src/components/animate';
import { DropDocumentIcon } from 'src/assets';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  paddingTop: HEADER.MOBILE_HEIGHT,
  backgroundImage: 'url(/assets/menu/hero_bg.png)',
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
