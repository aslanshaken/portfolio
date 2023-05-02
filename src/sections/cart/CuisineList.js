import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';
import CuisineCard from './CuisineCard';

//
export default function CuisineList() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  return (
    <List sx={{ mt: 5, mb: 3, overflowX: 'auto', px: { md: 6 } }}>
      <Typography ml={2} variant={'subtitle1'} color={'black'}>
        Items in your cart
      </Typography>
      {cart.map((data, _i) => (
        <ListItem key={'cart-cousine-' + _i} disableGutters>
          <ListItemButton>
            <CuisineCard cuisine={data} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
