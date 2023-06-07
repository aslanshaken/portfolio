// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Box, Grid } from '@mui/material';
import FoodCartCard from 'src/components/FoodCartCard';
import Pagination from 'src/components/Pagination';
// sections

// ----------------------------------------------------------------------

FoodsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FoodsPage() {
  return (
    <Page title="Personal Account : Dashboard">
      <Grid container spacing={3}>
        {[].map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <FoodCartCard
              chefavatar={item.chefavatar}
              chefname={item.chefname}
              sx={{ mt: -2 }}
              name={item.name}
              cover={`/assets/search-chef/foods/${item.filename}.png`}
              price={item.price}
              we_kc={`${item.weight} gr / ${item.kc} kc`}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={10} />
      <Pagination />
    </Page>
  );
}
