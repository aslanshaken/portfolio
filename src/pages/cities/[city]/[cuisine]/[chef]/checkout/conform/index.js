import { Stack } from '@mui/material';
import React from 'react';
import Container from 'src/components/Container';
import Page from 'src/components/Page';
import Layout from 'src/layouts';
import ConformCartItem from 'src/sections/conform/ConformCartItem';
import ConformInfo from 'src/sections/conform/ConformInfo';
import ConformNotes from 'src/sections/conform/ConformNotes';
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function CheckoutPage({ isPickup = true }) {
  return (
    <Page title="Search Chef">
      <Container>
        <Stack spacing={6}>
          <ConformInfo isPickup={isPickup} />
          <ConformCartItem />
          <ConformNotes />
        </Stack>
      </Container>
    </Page>
  );
}
