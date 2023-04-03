import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import Container from 'src/components/Container';
import Page from 'src/components/Page';
import Layout from 'src/layouts';
import ConfirmCartItem from 'src/sections/confirm/ConfirmCartItem';
import ConfirmInfo from 'src/sections/confirm/ConfirmInfo';
import ConfirmNotes from 'src/sections/confirm/ConfirmNotes';
// ----------------------------------------------------------------------

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

CheckoutPage.propTypes = {
  isPickup:PropTypes.string
}

export default function CheckoutPage({ isPickup = true }) {
  return (
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
