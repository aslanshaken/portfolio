import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFNumberField.propTypes = {
  name: PropTypes.string,
};

export default function RHFNumberField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field}  type="number" variant='filled' size={'small'} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
