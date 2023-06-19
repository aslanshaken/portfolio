import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextArea.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextArea({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} multiline variant='filled' size={'small'} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
