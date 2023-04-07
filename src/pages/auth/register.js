import NextLink from 'next/link';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import RegisterForm from '../../sections/auth/RegisterForm';
import { Container, Link, Typography } from '@mui/material';
import GradientText from '../../components/GradientText';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Register.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <Page title="Register" gutterTop>
      <Container maxWidth={'xs'} sx={{ pt: 3 }}>
        <NextLink href={'/'} passHref>
          <Link>
            <Typography mt={2} sx={{ position: 'absolute', top: 0, color: 'black' }} className="sign-up">
              Back to home page
            </Typography>
          </Link>
        </NextLink>
        <GradientText variant="h2" color="secondary" mb={6}>
          Sign Up!
        </GradientText>
        <RegisterForm />
      </Container>
    </Page>
  );
}
