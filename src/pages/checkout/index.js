// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import ChooseCity from '../../sections/search-chef/ChooseCity';
import HeroHeader from '../../components/HeroHeader';
import { Grid, Stack } from '@mui/material';
import PickDeliverSwitchCard from 'src/sections/checkout/PickDeliverSwitchCard';
import Container from 'src/components/Container';
import DeliveryLocation from 'src/sections/checkout/DeliveryLocation';
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
  return (
    <Page title="Search Chef">
      <HeroHeader title={'Checkout'} bottomBorder={false} />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <PickDeliverSwitchCard />
              <DeliveryLocation />
              <DeliverySteps />
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
