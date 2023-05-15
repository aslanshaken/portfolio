import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from '../../components/animate';
import Iconify from '../../components/Iconify';
import Image from 'src/components/Image';
import { useDispatch } from 'src/redux/store';
import { updateFoodCart } from 'src/redux/slices/food';
import GradientText from 'src/components/GradientText';
import CountBox from 'src/components/countBox';

//

CuisineCard.propTypes = {
  cuisine: PropTypes.object,
};

export default function CuisineCard({ cuisine = {} }) {
  const dispatch = useDispatch();

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent="space-between" width={'100%'} spacing={2}>
      <Image
        alt={cuisine?.title}
        src={cuisine?.image_url}
        width={'100px'}
        height={'100px'}
        sx={{ borderRadius: '50%', minWidth: 100, minHeight: 100 }}
      />

      <Stack direction={'row'} width={1} justifyContent="space-between" flexWrap={'wrap'} gap={1}>
        <Stack maxWidth={180}>
          <Typography variant="subtitle1" color="black" fontWeight={600}>
            {cuisine?.title}
          </Typography>
          <GradientText color="primary" variant="subtitle2">
            {`$${cuisine?.current_price} / ${cuisine?.quantity} ${cuisine?.measurement || ''}`}
          </GradientText>
          {cuisine?.min_order > 1 && (
            <Typography variant="caption" color="text.secondary">
              min orders {`${cuisine?.min_order} ${cuisine?.measurement || ''}`}
            </Typography>
          )}
          {cuisine?.notes && (
            <Typography variant="body2" fontWeight={600}>
              {cuisine?.notes}
            </Typography>
          )}
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <Typography color="text.secondary">{cuisine?.count}</Typography>
          <CountBox data={cuisine} />
        </Stack>
      </Stack>

      {/* <IconButtonAnimate
          color="error"
          onClick={() => {
            dispatch(updateFoodCart({ data: cuisine, actionType: 'delete' }));
          }}
        >
          <Iconify icon={'mdi:trash'} />
        </IconButtonAnimate> */}
    </Stack>
  );
}
