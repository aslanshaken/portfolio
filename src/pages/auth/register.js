// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import RegisterForm from '../../sections/auth/RegisterForm';
import { Container, styled } from '@mui/material';
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
        <GradientText variant="h2" color="secondary" mb={6}>
          Sign Up!
        </GradientText>
        <RegisterForm />
      </Container>
    </Page>
  );
}
