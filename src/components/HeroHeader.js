import React from 'react';
import { Divider } from '@mui/material';
import { Box, styled } from '@mui/system';
import PropTypes from 'prop-types';
import Container from './Container';
import Image from './Image';
import NavLinkHeader from './NavLinkHeader';
//

const RootStyle = styled(Box)(({ theme }) => ({
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
        <NavLinkHeader city="Austin" cuisine="Central Asia cuisine" chef="Michael" />
        <Image src={'/assets/search-chef/chefs/hero-header.png'} alt={'hero-header'} />
        <Divider sx={{ mt: 4 }} />
        {/* {topBorder && <Divider mt={5} />}
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
        {bottomBorder && <Divider />} */}
      </Container>
    </RootStyle>
  );
}
