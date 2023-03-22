import { List, ListItem, ListItemButton } from '@mui/material';
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
    <List disablePadding sx={{ mt: 5, mb: 3, overflowX: 'auto' }}>
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
