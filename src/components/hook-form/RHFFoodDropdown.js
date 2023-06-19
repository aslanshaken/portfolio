import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, Select, MenuItem } from '@mui/material';

RHFFoodDropdown.propTypes = {
  name: PropTypes.string,
  foodsArray: PropTypes.array,
};

export default function RHFFoodDropdown({ name, foodsarray, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl fullWidth>
          <Select
            value={value || ''} // Set the value to the selected value from field, defaulting to an empty string if it's undefined
            onChange={(e) => onChange(e.target.value)} // Set the onChange function to handle value changes
            variant="filled"
            size="small"
            fullWidth
            error={!!error}
            {...other}
          >
            <MenuItem value="">
              <em>Select Food</em>
            </MenuItem>
            {foodsarray.map((food, index) => (
              <MenuItem key={index} value={food.id}>
                {food.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
