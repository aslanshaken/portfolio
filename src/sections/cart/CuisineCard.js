import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';
import Image from 'src/components/Image';
import { useDispatch } from 'src/redux/store';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { updateFoodCart } from 'src/redux/slices/food';
=======
import { removeFoodCart } from 'src/redux/slices/food';
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
=======
import { removeFoodCart } from 'src/redux/slices/food';
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
=======
import { removeFoodCart } from 'src/redux/slices/food';
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
import GradientText from 'src/components/GradientText';

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
          <Typography variant="h6" color="black" fontWeight={600}>
            {cuisine?.title}
          </Typography>
          <GradientText color="primary" variant="subtitle1">
            {`$${cuisine?.current_price} / ${cuisine?.measurement || ''}`}
          </GradientText>
          <Typography variant="body2" fontWeight={600}>
            {cuisine?.notes}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={'row'} alignItems={'center'} spacing={4}>
        <Typography color="text.secondary">{cuisine?.count}</Typography>

        <IconButtonAnimate
          color="error"
          onClick={() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            dispatch(updateFoodCart({ data: cuisine, actionType:'delete' }));
=======
            dispatch(removeFoodCart({ food: cuisine, removeAll: false, removeOneItem: false }));
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
=======
            dispatch(removeFoodCart({ food: cuisine, removeAll: false, removeOneItem: false }));
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
=======
            dispatch(removeFoodCart({ food: cuisine, removeAll: false, removeOneItem: false }));
>>>>>>> 4b8b9b5d7f6cdd48e46334a37aff69c56fa71009
          }}
        >
          <Iconify icon={'mdi:trash'} />
        </IconButtonAnimate>
      </Stack>
    </Stack>
  );
}
