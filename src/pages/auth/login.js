// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import LoginForm from '../../sections/auth/LoginForm';
import { Container, Typography } from '@mui/material';
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
