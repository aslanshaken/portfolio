import { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
// sections
import HeroHeader from 'src/components/HeroHeader';
import PickDeliverSwitchCard from 'src/sections/checkout/PickDeliverSwitchCard';
import Container from 'src/components/Container';
import DeliverySteps from 'src/sections/checkout/DeliverySteps';
import CartListCard from 'src/sections/checkout/CartListCard';
import OrderCard from 'src/sections/checkout/OrderCard';
import { useDispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getOrderDetail } from 'src/redux/slices/food';
import { PATH_PAGE } from 'src/routes/paths';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const dispatch = useDispatch();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const {cart} = checkout;

  const { orderId } = checkout;

  const router = useRouter();

  useEffect(() => {
    dispatch(getOrderDetail(orderId));
    if (cart.length == 0) {
      router.push(PATH_PAGE.home);
    }
  }, [cart]);

  const [isPickup, setIsPickup] = useState(checkout?.orderDetail?.is_pickup);

  return (
    <Page title="Search Chef">
      <HeroHeader title={'Checkout'} bottomBorder={false} />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <PickDeliverSwitchCard isPickup={isPickup} setIsPickup={setIsPickup} />
              <DeliverySteps isPickup={isPickup} />
              <CartListCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderCard />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
