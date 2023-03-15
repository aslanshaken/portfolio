import PropTypes from 'prop-types';
import { Backdrop, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HEADER } from '../../config';
import Iconify from '../../components/Iconify';
import { IconButtonAnimate } from '../../components/animate';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative !important',
  boxShadow: 0,
  paddingTop: HEADER.MOBILE_HEIGHT,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: theme.palette.background.neutral,
  backgroundPositionX: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
  '& .overlay': {
    position: 'absolute',
    opacity: `0.2 !important`,
  },
  '& .overlay-body': {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 80,
    [theme.breakpoints.up('md')]: {
      paddingTop: 200,
      paddingBottom: 200,
    },
  },
}));

// ----------------------------------------------------------------------
MenuHero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

MenuHero.defaultProps = {
  image: '/assets/menu/hero_bg.png',
  title: '',
};

// ----------------------------------------------------------------------

export default function MenuHero({ image, title }) {
  const router = useRouter();

  const country = router.query?.country;
  const isMainMenuPage = country ? false : true;

  return (
    <Box>
      <RootStyle sx={{ backgroundImage: `url(${image})` }}>
        <Backdrop className="overlay" open />

        <Box className="overlay-body">
          {isMainMenuPage && <Typography variant="h2">Choose your cuisine</Typography>}

          {!isMainMenuPage && (
            <>
              <Typography variant="h2">{title}</Typography>

              <IconButtonAnimate sx={{ p: 0, color: 'inherit', width: 40, height: 40, fontSize: '5rem', mt: 1, ml: 3 }}>
                <Iconify icon={'material-symbols:keyboard-arrow-down-rounded'} />
              </IconButtonAnimate>
            </>
          )}
        </Box>
      </RootStyle>
    </Box>
  );
}
