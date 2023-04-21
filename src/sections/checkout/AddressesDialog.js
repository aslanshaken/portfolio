import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import useAuth from 'src/hooks/useAuth';
import useNotify from 'src/hooks/useNotify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getOrderDetail } from 'src/redux/slices/food';

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

export default function AddressesDialog({ ...other }) {
  const { updateAddress, addAddress } = useAuth();

  const { successAlert, errorAlert } = useNotify();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { orderId } = checkout;

  const { user } = useAuth();

  const address = user?.addresses?.find((item) => item.primary_address == true);

  // const { checkout } = useSelector(FOOD_SELECTOR);

  // const address = checkout?.orderDetail?.address;

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    apartment: Yup.string().required('Apartment is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.string().required('Zip is required'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      if (address) {
        data.id = address?.id;
        const response = await updateAddress(data);
        successAlert(response.data.success);
      } else {
        const response = await addAddress(data);
        successAlert(response.data.success);
      }
      dispatch(getOrderDetail(orderId));
      // dispatch(setDeliveryAddress(data));
    } catch (error) {
      errorAlert(error.message);
    }
    other.onClose();
  };

  useEffect(() => {
    reset({
      address: address?.line1 ?? '',
      apartment: address?.apartment ?? '',
      state: address?.state ?? '',
      city: address?.city ?? '',
      zip: address?.zip ?? '',
    });
  }, [address, reset]);

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <IconButton onClick={() => other.onClose()} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Typography variant="h3">{address ? 'Edit' : 'Add'} address</Typography>

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
