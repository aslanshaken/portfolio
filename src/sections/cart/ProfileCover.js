import PropTypes from 'prop-types';
import { Box, Stack, styled, Typography } from '@mui/material';
import Avatar from '../../components/Avatar';
import Iconify from '../../components/Iconify';
import Image from '../../components/Image';
import cssStyles from '../../utils/cssStyles';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  '&:before': {
    ...cssStyles().bgBlur({ blur: 1, opacity: 0.2 }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  position: 'relative',
  minHeight: 100,
  padding: theme.spacing(2),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

//

ProfileCover.propTypes = {
  cover: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  cuisineType: PropTypes.string,
};

export default function ProfileCover({
  cover = '/assets/cart/cheff-back.png',
  avatar = '/assets/search-chef/chefs/adam-sandler.png',
  name = 'Sheff Michael',
  cuisineType = 'Italian Cuisine',
}) {
  return (
    <RootStyle>
      <InfoStyle>
        <Box position={'relative'} sx={{ width: 120, height: 120 }}>
          <Avatar alt={'Cheff profile avatar'} src={avatar} sx={{ width: 1, height: 1 }} />
          <Iconify
            icon={'material-symbols:verified'}
            sx={{ color: '#0ED3CF', position: 'absolute', top: 10, right: 0 }}
          />
        </Box>
        <Stack>
          <Typography variant="h4" color="white" fontWeight={500} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" color="white">
            {cuisineType}
          </Typography>
        </Stack>
      </InfoStyle>
      <Image alt="Profile cover" src={cover} sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
    </RootStyle>
  );
}
