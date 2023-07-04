// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Container from '../../components/Container';
import ContactUsForm from 'src/sections/contact-us/ContactUsForm';
import ContactUsDescription from 'src/sections/contact-us/ContactUsDescription';
import Image from 'src/components/Image';

// sections
const cards = [
  {
    title: '1. Join Our Platform',
    content: `Sign up as a restaurant or home chef on Cookk. Create an attractive profile to showcase your food`,
  },
  {
    title: '2. Receive Orders',
    content: `Create your menu and pick the days and hours that fit your schedule. Customers order through our platform. We handle orders, payments, and delivery logistics`,
  },
  {
    title: '3. Grow Your Business',
    content: `Get marketing support, order tracking, and customer assistance. Expand your customer base`,
  },
];
// ----------------------------------------------------------------------

ContactUsPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <Page title="Cart" gutterTop>
      <Container>
        <Typography variant="h3" fontWeight={'500'} color={'secondary'} textAlign={'center'} mt={5}>
          How it works
        </Typography>
        <Grid container mt={2}>
          {cards.map((item, _i) => (
            <Grid
              item
              key={_i}
              md={4}
              xs={12}
              textAlign={'center'}
              p={6}
              sx={{
                borderRight: { md: _i < cards.length - 1 && '4px solid #DCDCDC' },
              }}
            >
              <Typography gutterBottom variant="h6" marginBottom={5}>
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight={'500'}>
                {item.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack
        sx={{ width: '100%' }}
        textAlign={'center'}
        position={'relative'}
        backgroundColor={(theme) => theme.palette.secondary.main}
        paddingBottom={4}
        paddingTop={4}
        my={3}
      >
        <Image
          src={'/assets/search-chef/Texture.png'}
          sx={{ position: 'absolute', width: '100%', height: '100%', top: -2 }}
        />
        <Typography color={'white'} fontSize={{ xs: 16, sm: 22 }} fontWeight={500}>
          Level up your food business today!
        </Typography>
      </Stack>
      <Container sx={{ py: 10 }}>
        <Grid container justifyContent={'space-between'}>
          <Grid item md={6} xs={12}>
            <ContactUsDescription />
          </Grid>
          <Grid item md={5} xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
              <ContactUsForm />
              {/* <Box>
                <Image src={'/assets/contact-us/vegetable.png'} alt={'vegetable'} width={'400px'} />
              </Box> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
