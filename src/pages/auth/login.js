// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import Register from '../../sections/auth/RegisterForm';
import LoginForm from '../../sections/auth/LoginForm';
import { Container, Typography, styled } from '@mui/material';
import GradientText from 'src/components/GradientText';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Login.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(25),
  marginBottom: theme.spacing(3),
  '& .MuiContainer-root': {
    maxWidth: 550,
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0,
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  '& .terms': {
    color: theme.palette.secondary.light,
    fontWeight: 500,
    textDecoration: 'underline',
  },
  '& .sign-up': {
    color: theme.palette.primary.light,
    textDecoration: 'underline',
  },
}));

export default function Login() {
  return (
    <Page title="Login">
      <RootStyle>
        <Container maxWidth={'xs'}>
          <GradientText variant="h2" color="secondary" mb={2}>
            Log in
          </GradientText>
          <Typography color={'text.secondary'} mb={7.5}>
            Welcome back! Please enter your details...
          </Typography>
          <LoginForm />
        </Container>
      </RootStyle>
    </Page>
  );
}
