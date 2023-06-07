// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Box, Button, Grid } from '@mui/material';
import FoodCartCard from 'src/components/FoodCartCard';
import Pagination from 'src/components/Pagination';
import { useState } from 'react';
import FoodDialog from 'src/sections/@dashboard/foods/foodDialog';
// sections

// ----------------------------------------------------------------------

FoodsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FoodsPage() {
  const [foodDialogIsOpen, setFoodDialogIsOpen] = useState(false);

  return (
    <Page title="Personal Account : Dashboard">
      <FoodDialog open={foodDialogIsOpen} onClose={() => setFoodDialogIsOpen(false)} />
      <Button
        onClick={() => setFoodDialogIsOpen(true)}
        variant="outlined"
        color="secondary"
        sx={{ textTransform: 'none' }}
      >
        Create a food
      </Button>
    </Page>
  );
}
