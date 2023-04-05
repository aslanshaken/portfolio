import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';
import CuisineCard from './CuisineCard';

//
export default function CuisineList() {
  const {
    checkout: { cart },
  } = useSelector(FOOD_SELECTOR);

  const outputArray = cart.reduce((acc, curr) => {
    // Find the object in acc array with same id and name
    const foundObj = acc.find((obj) => obj.id === curr.id);

    // If object is present increment the count else add the current object into accumulator array
    if (foundObj) {
      foundObj.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }

    return acc;
  }, []);

  return (
    <List sx={{ mt: 5, mb: 3, overflowX: 'auto', px: { md: 6 } }}>
      <Typography ml={2} variant={'subtitle1'} color={'black'}>
        Items in your cart
      </Typography>
      {outputArray.map((data, _i) => (
        <ListItem key={'cart-cousine-' + _i} disableGutters>
          <ListItemButton>
            <CuisineCard cuisine={data} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
