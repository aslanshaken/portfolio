import React from 'react';
import { Backdrop, Divider, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import PropTypes from 'prop-types';
import { HEADER } from '../config';
import Container from './Container';
//

const RootStyle = styled(Box)(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT + 50,
  },
  '& .background-image': {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  '& .overlay': {
    borderRadius: theme.shape.borderRadius * 2,
    position: 'absolute',
    opacity: `0.5 !important`,
  },
  '& .overlay-body': {
    width: '100%',
    position: 'relative',
  },
}));

//

HeroHeader.propTypes = {
  backgroundImage: PropTypes.string,
  topBorder: PropTypes.bool,
  bottomBorder: PropTypes.bool,
  title: PropTypes.string,
};

HeroHeader.defaultProps = {
  backgroundImage: '',
  topBorder: false,
  bottomBorder: true,
  title: '',
};

export default function HeroHeader(props) {
  const { backgroundImage, topBorder, bottomBorder, title } = props;

  return (
    <RootStyle>
      <Container>
        {topBorder && <Divider mt={5} />}
        <Box
          className="background-image"
          sx={{ backgroundImage: `url(${backgroundImage})`, my: backgroundImage ? 6 : 0, px: backgroundImage ? 4 : 0 }}
        >
          <Backdrop className="overlay" open={!!backgroundImage} />

          <Box className="overlay-body">
            <Typography variant="h3" py={6} sx={theme => ({ color: backgroundImage ? 'white' : theme.palette.grey[800], fontWeight: 600 })}>
              {title}
            </Typography>
          </Box>
        </Box>
        {bottomBorder && <Divider />}
      </Container>
    </RootStyle>
  );
}
