import React from 'react';
import { Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';

const categroy_data = [
  {
    name: 'Cattle, calves & dairy',
    count: '23',
  },
  {
    name: 'Fish farm',
    count: '18',
  },
  {
    name: 'Poultry',
    count: '11',
  },
  {
    name: 'Agricultural products',
    count: '15',
  },
  {
    name: 'Crops farming',
    count: '9',
  },
];

export default function MenuCategoryForm() {
  return (
    <>
      <Typography variant="h4" color={'text.primary'} pt={7} pb={3}>
        Categories
      </Typography>
      <List>
        {categroy_data.map((item, index) => (
          <React.Fragment key={item.name}>
            {index === 0 && <Divider />}
            <ListItemButton className="listItemBtn">
              <ListItemText primary={item.name} />
              <ListItemText secondary={`(${item.count})`} sx={{ textAlign: 'right' }} />
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
