import NextLink from 'next/link';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import LoginForm from '../../sections/auth/LoginForm';
import { Container, Link, Typography } from '@mui/material';
import GradientText from '../../components/GradientText';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <Page title="Login" gutterTop>
      <Container maxWidth={'xs'} sx={{ pt: 3 }}>
        <NextLink href={'/'} passHref>
          <Link>
            <Typography mt={2} sx={{ position: 'absolute', top: 0, color: 'black' }} className="sign-up">
              Back to home page
            </Typography>
          </Link>
        </NextLink>
        <GradientText variant="h2" color="secondary" mb={2}>
          Log in
        </GradientText>
        <Typography color={'text.secondary'} mb={7.5}>
          Welcome back! Please enter your details...
        </Typography>
        <LoginForm />
      </Container>
    </Page>
  );
}
