import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import Container from 'src/components/Container';
import Page from 'src/components/Page';
import Layout from 'src/layouts';
import ConfirmCartItem from 'src/sections/confirm/ConfirmCartItem';
import ConfirmInfo from 'src/sections/confirm/ConfirmInfo';
import ConfirmNotes from 'src/sections/confirm/ConfirmNotes';
import { useDispatch } from 'react-redux';
import { FOOD_SELECTOR, getOrderConfirmInfo } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';
import LoadingScreen from 'src/components/LoadingScreen';
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

CheckoutPage.propTypes = {
  isPickup: PropTypes.bool,
};

export default function CheckoutPage({ isPickup = true }) {
  const { checkout, loading } = useSelector(FOOD_SELECTOR);
  const { orderId } = checkout;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderConfirmInfo(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Search Chef">
      <Container>
        <Stack spacing={6}>
          <ConfirmInfo isPickup={isPickup} />
          <ConfirmCartItem />
          <ConfirmNotes />
        </Stack>
      </Container>
    </Page>
  );
}
