// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import RegisterForm from '../../sections/auth/RegisterForm';
import { Container, styled } from '@mui/material';
import GradientText from 'src/components/GradientText';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

Register.getLayout = function getLayout(page) {
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
    fontWeight: 600,
    textDecoration: 'underline',
  },
}));
// ----------------------------------------------------------------------

export default function Register() {
  return (
    <Page title="Auth">
      <RootStyle>
        <Container maxWidth={'xs'}>
          <GradientText variant="h1" color="secondary" mb={6}>
            Sign Up!
          </GradientText>
          <RegisterForm />
        </Container>
      </RootStyle>
    </Page>
  );
}