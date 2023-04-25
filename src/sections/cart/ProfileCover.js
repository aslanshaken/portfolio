import PropTypes from 'prop-types';
import { Box, Stack, styled, Typography } from '@mui/material';
import Avatar from '../../components/Avatar';
import Iconify from '../../components/Iconify';
import GradientText from 'src/components/GradientText';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

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
  certified: PropTypes.bool,
  cuisineNames: PropTypes.array,
};

export default function ProfileCover({ certified = true, cuisineNames = [] }) {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { chef } = checkout?.cart[0] ?? {};

  return (
    <RootStyle>
      <Stack textAlign={'center'} mb={6} color={'black'}>
        <Typography variant="h2" mb={4} fontWeight={500}>
          Cart
        </Typography>
        <Typography>
          Your cart currently contains delicious food items that are just waiting to be enjoyed. Take a moment to review
          your selections before proceeding to checkout.
        </Typography>
      </Stack>
      <InfoStyle>
        <Stack direction={'row'} px={{ md: 6 }}>
          <Box position={'relative'} sx={{ width: 120, height: 120 }}>
            <Avatar
              alt={'Cheff profile avatar'}
              src={chef?.image_url}
              sx={{ width: { xs: 100, md: 120 }, height: { xs: 100, md: 120 } }}
            />
            <Iconify
              icon={'material-symbols:verified'}
              sx={{ color: '#0ED3CF', position: 'absolute', top: 10, right: 0 }}
            />
          </Box>
          <Stack ml={4} my={'auto'}>
            <Typography variant="h4" color="black" gutterBottom>
              {chef?.company_name}
            </Typography>
            <Typography color={'black'} variant={'subtitle1'}>
              by {chef?.first_name} {chef?.last_name}
            </Typography>
            <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 2 }}>
              <Typography variant="body1" color="black" flex={1}>
                {cuisineNames?.join(' / ')}
              </Typography>
              <GradientText variant="body1">{certified && 'Certified chef'}</GradientText>
            </Stack>
          </Stack>
        </Stack>
      </InfoStyle>
    </RootStyle>
  );
}
