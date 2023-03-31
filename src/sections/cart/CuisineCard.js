import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';
import Image from '../../components/Image';

//

CuisineCard.propTypes = {
  data: PropTypes.object,
};

export default function CuisineCard({ data = {} }) {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent="space-between" width={'100%'} spacing={{ xs: 2, md: 5, lg: 7 }}>
      <Image
        alt={'Cuisine Image'}
        src={'/assets/search-chef/foods/chilli_pepper.png'}
        sx={{ borderRadius: '50%', minWidth: 80, height: 80 }}
      />

      <Stack whiteSpace={'nowrap'}>
        <Typography variant="h6" color="black" fontWeight={600} gutterBottom>
          {'Chili pepper'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'440 cal'}
        </Typography>
      </Stack>

      <Typography color="text.secondary">{'2'}</Typography>

        <IconButtonAnimate color="error">
          <Iconify icon={'mdi:trash'} />
        </IconButtonAnimate>
    </Stack>
  );
}
