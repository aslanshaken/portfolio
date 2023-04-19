// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { useEffect, useState } from 'react';
import useTable from 'src/hooks/useTable';
import { useDispatch } from 'src/redux/store';
import { FOOD_SELECTOR, getSavedCards } from 'src/redux/slices/food';
import { useSelector } from 'react-redux';
import LoadingScreen from 'src/components/LoadingScreen';
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import PaymentDialog from 'src/sections/checkout/PaymentDialog';
// ----------------------------------------------------------------------

PaymentsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PaymentsPage() {
  const [isOpenPaymentDialog, setIsOpenPaymentDialog] = useState(false);
  const { page, order, orderBy, rowsPerPage } = useTable({
    defaultOrderBy: 'order_number',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedCards());
  }, [dispatch]);

  const { savedCards, loading } = useSelector(FOOD_SELECTOR);

  return loading ? (
    <LoadingScreen />
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
              <Button sx={(theme) => ({ background: theme.palette.grey[200], padding: 2 })} color="error">
                <Iconify icon={'mdi:trash'} />
              </Button>
            </>
          )}
        </Stack>
      </Paper>
    </Page>
  );
}
