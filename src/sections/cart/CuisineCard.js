import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';
import Image from 'src/components/Image';
import { useDispatch } from 'src/redux/store';
import { removeFoodCart } from 'src/redux/slices/food';

//

CuisineCard.propTypes = {
  cuisine: PropTypes.object,
};

export default function CuisineCard({ cuisine = {} }) {
  const dispatch = useDispatch();

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent="space-between"
      width={'100%'}
      spacing={{ xs: 2, md: 5, lg: 7 }}
    >
      <Stack direction={'row'} alignItems={'center'} spacing={4} minWidth={300}>
        <Image
          alt={cuisine?.title}
          src={cuisine?.image_url}
          width={'80px'}
          height={'80px'}
          sx={{ borderRadius: '50%', minWidth: 80, minHeight: 80 }}
        />

        <Stack>
          <Typography variant="h6" color="black" fontWeight={600} gutterBottom>
            {cuisine?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'440 cal'}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={'row'} alignItems={'center'} spacing={4}>
        <Typography color="text.secondary">{cuisine?.count}</Typography>

        <IconButtonAnimate
          color="error"
          onClick={() => {
            dispatch(removeFoodCart({ food: cuisine, removeAll: false, removeOneItem: false }));
          }}
        >
          <Iconify icon={'mdi:trash'} />
        </IconButtonAnimate>
      </Stack>
    </Stack>
  );
}
