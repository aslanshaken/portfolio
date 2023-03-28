// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Grid } from '@mui/material';
import CartChef from '../../sections/cart/CartChef';
import Container from '../../components/Container';
// sections

// ----------------------------------------------------------------------

CitiesPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CitiesPage() {
  return (
    <Page title="Cart" gutterTop>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} md={4} mb={3}>
            <CartChef />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
