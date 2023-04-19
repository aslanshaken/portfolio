// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { useEffect, useState } from 'react';
import { useDispatch } from 'src/redux/store';
import { FOOD_SELECTOR, deleteCard, getSavedCards } from 'src/redux/slices/food';
import { useSelector } from 'react-redux';
import LoadingScreen from 'src/components/LoadingScreen';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import PaymentDialog from 'src/sections/checkout/PaymentDialog';
import useNotify from 'src/hooks/useNotify';
// ----------------------------------------------------------------------

PaymentsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PaymentsPage() {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { successAlert, errorAlert } = useNotify();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await dispatch(getSavedCards());
      setLoading(false);
    };

    fetch();
  }, [dispatch]);

  const deletePayment = async () => {
    try {
      const response = await dispatch(deleteCard());
      dispatch(getSavedCards());
      successAlert(response.data.success);
    } catch (error) {
      errorAlert(error.message);
    }
  };

  const { savedCards } = useSelector(FOOD_SELECTOR);

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Payments : Dashboard">
      <PaymentDialog open={isOpenPaymentDialog} onClose={() => setIsOpenPaymentDialog(false)} />
      <Paper sx={{ padding: 6 }}>
        <Typography variant="h3">Active card</Typography>
        <Stack mt={4} direction={'row'} spacing={4}>
          {savedCards.length == 0 ? (
            <Button
              variant="outlined"
              size="large"
              sx={(theme) => ({ px: 6, color: theme.palette.grey[800] })}
              onClick={() => setIsOpenPaymentDialog(true)}
            >
              Add Card
            </Button>
          ) : (
            <>
              <Box flex={1} sx={(theme) => ({ background: theme.palette.grey[200], padding: 2 })}>
                **** **** **** {savedCards[0]?.last_four}
              </Box>
              <Button
                sx={(theme) => ({ background: theme.palette.grey[200], padding: 2 })}
                color="error"
                onClick={deletePayment}
              >
                <Iconify icon={'mdi:trash'} />
              </Button>
            </>
          )}
        </Stack>
      </Paper>
    </Page>
  );
}
