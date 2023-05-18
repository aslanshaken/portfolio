import { useEffect, useState } from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
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
import { HEADER } from 'src/config';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const dispatch = useDispatch();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const cuisineId = cart?.[0]?.cuisine?.id;

  const chefId = cart?.[0]?.chef?.id;

  const { orderId, orderDetail } = checkout;

  const router = useRouter();

  const [isPickup, setIsPickup] = useState(true);

  useEffect(() => {
    dispatch(getOrderDetail(orderId));
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderDetail) setIsPickup(orderDetail?.is_pickup);
  }, [orderDetail]);

  return (
    <Page title="Search Chef">
      <Container>
        <Box position={'relative'}>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 10,
              left: 0,
              top: { xs: HEADER.MOBILE_HEIGHT, md: HEADER.MAIN_DESKTOP_HEIGHT },
            }}
          >
            <NextLink
              href={PATH_PAGE.searchChef.cities({ cityId: '4', cuisineId: cuisineId, chefId: chefId })}
              passHref
            >
              <Link underline="none">
                <Typography mt={2} sx={{ color: 'black' }} className="sign-up">
                  Go back to chef
                </Typography>
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Container>
      <HeroHeader title={'Checkout'} bottomBorder={false} />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <PickDeliverSwitchCard isPickup={isPickup} setIsPickup={setIsPickup} />
              <DeliverySteps isPickup={isPickup} />
              <CartListCard />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderCard isPickup={isPickup} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
