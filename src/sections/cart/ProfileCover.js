import PropTypes from 'prop-types';
import { Box, Stack, styled, Typography } from '@mui/material';
import Avatar from '../../components/Avatar';
import Iconify from '../../components/Iconify';
import GradientText from 'src/components/GradientText';

const RootStyle = styled('div')(() => ({
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    top: 0,
    zIndex: 9,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  position: 'relative',
  minHeight: 100,
  display: 'flex',
  alignItems: 'center',
}));

//

ProfileCover.propTypes = {
  cover: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  cuisineType: PropTypes.string,
  certified: PropTypes.bool
};

export default function ProfileCover({
  avatar = '/assets/search-chef/chefs/adam-sandler.png',
  name = 'Sheff Michael',
  cuisineType = 'Italian Cuisine',
  certified = true,
}) {
  return (
    <RootStyle>
      <Stack textAlign={'center'} mb={6} color={'black'}>
        <Typography variant="h2" mb={4} fontWeight={500}>Cart</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Stack>
      <InfoStyle>
        <Box position={'relative'} sx={{ width: 120, height: 120 }} ml={{md:6}}>
          <Avatar alt={'Cheff profile avatar'} src={avatar} sx={{ width: {xs:100,md:120}, height: {xs:100,md:120} }} />
          <Iconify
            icon={'material-symbols:verified'}
            sx={{ color: '#0ED3CF', position: 'absolute', top: 10, right: 0 }}
          />
        </Box>
        <Stack ml={4}>
          <Typography variant="h4" color="black" gutterBottom>
            {name}
          </Typography>
          <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 2 }}>
            <Typography variant="body1" color="black">
              {cuisineType}
            </Typography>
            <GradientText variant="body1">{certified && 'Certified chef'}</GradientText>
          </Stack>
        </Stack>
      </InfoStyle>
    </RootStyle>
  );
}
