import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, FormHelperText } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
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
export default function PaymentForm({ data, onClose, ...other }) {
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
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
                postal_code: '12345',
              },
            },
          },
        },
      });

      if (result.error) {
        setCardError(result.error.message);
      } else {
        successAlert('Your paynment method has been added successfully.');
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
        onLoaderStart={() => {
          setIsInitialized(true);
        }}
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
