import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import CuisineCard from './CuisineCard';

const datas = [
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
];

//
export default function CuisineList() {
  return (
    <List sx={{ px: 6, mt: 5, mb: 3, overflowX: 'auto' }}>
      <Typography ml={2} variant={'subtitle1'} color={'black'}>Items in your cart</Typography>
      {datas.map((data, _i) => (
        <ListItem key={'cart-cousine-' + _i} disableGutters>
          <ListItemButton>
            <CuisineCard />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
