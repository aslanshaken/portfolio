import PropTypes from 'prop-types';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import { useForm } from 'react-hook-form';
import PaymentForm from './PaymentForm';
import PaymentProvider from 'src/components/payment/PaymentProvider';
import { createCardIntent } from 'src/redux/service/payment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'src/redux/store';

//
PaymentDialog.propTypes = {
  data: PropTypes.object,
};
PaymentDialog.defaultProps = {
  data: {},
};

export default function PaymentDialog({ data, ...other }) {
  // redux
  const dispatch = useDispatch();

  // state
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [clientSecretKey, setClientSecretKey] = useState('');
  const [publicKey, setPublickey] = useState('');

  // effect
  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const response = await dispatch(createCardIntent());

      if (createCardIntent.fulfilled.match(response)) {
        const { client_secret, publishable_key } = response.payload;

        setClientSecretKey(client_secret);
        setPublickey(publishable_key);
        setIsInitialized(true);
        setIsLoading(false);
      }
    }

    fetch();
  }, [dispatch]);

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <IconButton onClick={() => other.onClose()} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={{ xs: 3, sm: 8 }} gap={6}>
        <Typography variant="h3">Add payment</Typography>

        {!isLoading && isInitialized ? (
          <PaymentProvider publicKey={publicKey} clientSecret={clientSecretKey}>
            <PaymentForm onClose={other.onClose} />
          </PaymentProvider>
        ) : (
          <Box display={'flex'} justifyContent={'center'} width={'100%'} pb={6}>
            <CircularProgress />
          </Box>
        )}

        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RHFTextField variant="standard" name="cardNumber" label="Card number" />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFTextField variant="standard" name="expiration" label="Expiration" />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFTextField variant="standard" name="cvc" label="CVC" />
          </Grid>
          <Grid item xs={12} md={6}>
            <RHFTextField variant="standard" name="zip" label="ZIP" />
          </Grid>
        </Grid>

        <Button
          size="large"
          variant="outlined"
          color="secondary"
          sx={{ padding: '20px 40px', width: 'fit-content' }}
          onClick={() => addPayment()}
        >
          Save
        </Button> */}
      </Stack>
    </Dialog>
  );
}
