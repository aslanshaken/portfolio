import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, FormHelperText, Stack, TextField, Typography } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'src/components/hook-form';
import useNotify from 'src/hooks/useNotify';
import { getSavedCards } from 'src/redux/slices/food';
import { useDispatch } from 'src/redux/store';

//
// ----------------------------------------------------------------------

/**
 * This component is for adding payment method
 *
 * @param {*} Props
 * @returns React.JSX
 */

PaymentForm.propTypes = {
  onClose: PropTypes.func,
};

export default function PaymentForm({ onClose }) {
  const stripe = useStripe();
  const elements = useElements();
  const [postalCode, setPostalCode] = useState();
  const [cardError, setCardError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [formIsShow, setFormIsShow] = useState(false);
  // const { savedCards } = useSelector(FOOD_SELECTOR);
  const dispatch = useDispatch();

  const { successAlert } = useNotify();

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      // if (savedCards.length > 0) {
      //   await dispatch(deleteCard());
      // }
      const result = await stripe.confirmSetup({
        elements,
        redirect: 'if_required',
        confirmParams: {
          payment_method_data: {
            billing_details: {
              address: {
                country: null,
                postal_code: postalCode,
              },
            },
          },
        },
      });

      if (result.error) {
        setCardError(result.error.message);
      } else {
        successAlert('Your payment method has been added successfully.');
        await setTimeout(() => {
          dispatch(getSavedCards());
        }, 1000);
        onClose();
      }
    } catch (error) {
      setCardError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!isInitialized && (
        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
          <CircularProgress />
        </Box>
      )}
      <PaymentElement
        id="paymentAdd"
        onLoaderStart={() => {
          setIsInitialized(true);
        }}
        onReady={() => setFormIsShow(true)}
        options={{
          fields: {
            billingDetails: {
              address: {
                country: 'never',
              },
            },
          },
        }}
      />
      {formIsShow && <Stack mt={-5} sx={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
        <Typography sx={{ fontSize: '0.93rem' }}>Zip code</Typography>
        <TextField size='small' placeholder='12345' sx={{ borderRadius: 1.5 }} fullWidth onChange={e => setPostalCode(e.target.value)} />
        {/* {!postalCode && <Typography color={`#df1b41`} sx={{ fontSize: '0.93rem' }}>Zip code's security code is incomplete.</Typography>} */}
        <Typography variant='caption' mt={1}>
          By providing your card information, you allow Cookk to charge your card for future payments in accordance with their terms.
        </Typography>
      </Stack>}

      {cardError && <FormHelperText error>{cardError}</FormHelperText>}

      <Box mt={6} />

      <LoadingButton
        loading={isLoading}
        type="submit"
        size="large"
        variant="outlined"
        color="secondary"
        disabled={!stripe}
      >
        Save
      </LoadingButton>
    </FormProvider>
  );
}
