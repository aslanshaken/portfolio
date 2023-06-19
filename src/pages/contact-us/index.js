// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Box, Grid, Stack } from '@mui/material';
import Container from '../../components/Container';
import ContactUsForm from 'src/sections/contact-us/ContactUsForm';
import Image from 'src/components/Image';
import ContactUsDescription from 'src/sections/contact-us/ContactUsDescription';
// sections

// ----------------------------------------------------------------------

ContactUsPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <Page title="Cart" gutterTop>
      <Container sx={{ py: 10 }}>
        <Grid container justifyContent={'space-between'}>
          <Grid item md={5} xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
              <ContactUsForm />
              {/* <Box>
                <Image src={'/assets/contact-us/vegetable.png'} alt={'vegetable'} width={'400px'} />
              </Box> */}
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <ContactUsDescription />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
