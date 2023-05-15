import { Box, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';
import CuisineCard from './CuisineCard';

//
export default function CuisineList() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  return (
    <Stack sx={{ mt: 5, mb: 3, px: { md: 6 } }} gap={3}>
      <Typography ml={2} variant={'subtitle1'} color={'black'}>
        Items in your cart
      </Typography>
      {cart.map((data, _i) => (
        <Box px={1} key={'cart-cousine-' + _i}>
          <CuisineCard cuisine={data} />
        </Box>
      ))}
    </Stack>
  );
}
