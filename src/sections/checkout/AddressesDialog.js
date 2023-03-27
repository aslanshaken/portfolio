import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogContent, IconButton, Stack, TextField, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import { useEffect } from 'react';

//
AddressesDialog.propTypes = {
  data: PropTypes.object,
};
AddressesDialog.defaultProps = {
  data: {},
};

const inputs = [
  { type: '', name: 'address', label: 'Address' },
  { type: '', name: 'apartment', label: 'Apartment' },
  { type: '', name: 'state', label: 'State' },
  { type: '', name: 'city', label: 'City' },
  { type: '', name: 'zip', label: 'ZIP' },
];

export default function AddressesDialog({ data, onChangeAddress, ...other }) {
  const schema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    apartment: Yup.string().required('Apartment is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.string().required('Zip is required'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      address: '',
      apartment: '',
      state: '',
      city: '',
      zip: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    onChangeAddress(data);
    other.onClose();
  };

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <IconButton onClick={() => other.onClose()} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Typography variant="h3">Add address</Typography>

            {inputs.map((item, _i) => (
              <RHFTextField
                key={_i}
                type={item.type}
                name={item.name}
                label={item.label}
                variant="filled"
                size="small"
              />
            ))}

            <Button
              type="submit"
              size="large"
              variant="outlined"
              color="secondary"
              sx={{ padding: '20px 40px', width: 'fit-content' }}
            >
              Save
            </Button>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
