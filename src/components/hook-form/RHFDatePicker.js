import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';

RHFDatePicker.propTypes = {
  name: PropTypes.string,
};

export default function RHFDatePicker({ name, ...other }) {
  const { control } = useFormContext(); // or useForm() if not using FormProvider

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              size="small"
              fullWidth
              error={!!error}
              helperText={error?.message}
            />
          )}
          value={value}
          onChange={onChange}
          {...other}
        />
      )}
    />
  );
}
