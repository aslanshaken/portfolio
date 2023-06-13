// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';

RHFDropdown.propTypes = {
  name: PropTypes.string,
};

export default function RHFDropdown({ name, ...other }) {
    
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <Select
            {...field}
            variant='filled'
            size={'small'}
            fullWidth
            error={!!error}
            {...other}
          >
            <MenuItem value=''>
              <em>Select Measurement</em>
            </MenuItem>
            <MenuItem value={'Kg'}>Kg</MenuItem>
            <MenuItem value={'Lbs'}>Lbs</MenuItem>
            <MenuItem value={'pcs'}>pcs</MenuItem>
            <MenuItem value={'pc'}>pc</MenuItem>
            <MenuItem value={'Inch'}>Inch</MenuItem>
            <MenuItem value={'Oz'}>Oz</MenuItem>
            <MenuItem value={'Plate'}>Plate</MenuItem>
            <MenuItem value={'Half tray'}>Half tray</MenuItem>
            <MenuItem value={'Full tray'}>Full tray</MenuItem>
          </Select>
        </FormControl>
        // <TextField {...field} multiline variant='filled' size={'small'} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}