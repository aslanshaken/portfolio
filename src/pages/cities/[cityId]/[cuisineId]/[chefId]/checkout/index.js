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
import LoadingScreen from 'src/components/LoadingScreen';
import Image from 'src/components/Image';
import styled from '@emotion/styled';

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      router.push(PATH_PAGE.home);
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      await dispatch(getOrderDetail(orderId));
      setIsLoading(false);
    };

    fetch();
  }, [dispatch, orderId]);

  useEffect(() => {
    if (orderDetail) setIsPickup(orderDetail?.is_pickup);
  }, [orderDetail]);

  return isLoading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Search Chef">
      <Container>
        <RootStyle position={'relative'}>
          <NextLink href={PATH_PAGE.searchChef.cities({ cityId: '4', cuisineId: cuisineId, chefId: chefId })} passHref>
            <Link underline="none">
              <Typography mt={2} sx={{ color: 'black' }} className="sign-up">
                Go back to chef
              </Typography>
            </Link>
          </NextLink>
          <Typography variant="h3" my={3}>
            Checkout
          </Typography>
          <Stack
            sx={{ width: '100%' }}
            textAlign={'center'}
            position={'relative'}
            backgroundColor={(theme) => theme.palette.secondary.main}
            padding={2}
            my={3}
          >
            <Image
              src={'/assets/search-chef/Texture.png'}
              sx={{ position: 'absolute', width: '100%', height: '100%', top: -2 }}
            />
            <Typography color={'white'} fontSize={{ xs: 16, sm: 20 }} fontWeight={400}>
              Get free delivery on orders over $100
            </Typography>
          </Stack>
        </RootStyle>
      </Container>

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
