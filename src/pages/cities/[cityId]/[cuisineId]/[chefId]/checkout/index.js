import { useState } from 'react';
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

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const initialState = {
    address: '',
    apartment: '',
    state: '',
    city: '',
    zip: '',
  };

  const [address, setAddress] = useState(initialState);
  const [isPickup, setIsPickup] = useState(true);

  const handleChangeAddress = (data) => {
    setAddress(data);
  };

  return (
    <Page title="Search Chef">
      <HeroHeader title={'Checkout'} bottomBorder={false} />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <PickDeliverSwitchCard
                address={address}
                onChangeAddress={handleChangeAddress}
                isPickup={isPickup}
                setIsPickup={setIsPickup}
              />
              <DeliverySteps address={address} isPickup={isPickup} />
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
