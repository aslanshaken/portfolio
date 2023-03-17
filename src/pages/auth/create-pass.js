// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import { Box, Container, Typography, styled } from '@mui/material';
import GradientText from 'src/components/GradientText';
import CreatePassForm from 'src/sections/auth/CreatePassForm';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

CreatePass.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(25),
  marginBottom: theme.spacing(3),
  '& .content': {
    maxWidth: '520px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0,
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  '& .forgot-title': {
    letterSpacing: '0 !important',
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(0),
    },
  },
  '& .forgot-description': {
    maxWidth: 720,
    fontSize: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1),
      paddingLeft: theme.spacing(1),
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

// ----------------------------------------------------------------------

export default function CreatePass() {
  return (
    <Page title="Auth">
      <RootStyle>
        <Container maxWidth={'xl'}>
          <GradientText variant="h1" color="secondary" mb={2} className="forgot-title">
            Create new password
          </GradientText>
          <Typography color={'text.secondary'} mb={7.5} className="forgot-description">
            Please enter your mobile number or email address associated with your account
          </Typography>
          <Box className="content">
            <CreatePassForm />
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
