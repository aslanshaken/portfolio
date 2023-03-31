import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const allergy_data = [{ name: 'Nuts' }, { name: 'Eggs' }];

MenuAllerogyForm.propTypes = {
  isOpen: PropTypes.bool,
};

export default function MenuAllerogyForm({ isOpen = true, ...other }) {
  const [checked, setChecked] = useState([0]);

  const handleCheck = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Box {...other}>
      <Typography variant="h4" color={'text.primary'} py={2}>
        Allergies
      </Typography>
      <Collapse in={isOpen}>
        <List>
          {allergy_data.map((item, index) => {
            const labelId = `checkbox-list-label-${item.name}`;
            return (
              <React.Fragment key={item.name}>
                <ListItemButton className="listItemBtn" onClick={handleCheck(item.name)}>
                  <ListItemText primary={item.name} id={labelId} />
                  <ListItemSecondaryAction>
                    <FormControlLabel
                      edge="end"
                      labelPlacement="start"
                      control={<Checkbox checked={checked.indexOf(item.name) !== -1} disableRipple />}
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
                {index !== allergy_data.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
}
