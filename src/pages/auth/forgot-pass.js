// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import ForgotPassForm from '../../sections/auth/ForgotPassForm';
import { Box, Container, Typography, styled } from '@mui/material';
import GradientText from '../../components/GradientText';
import { useState } from 'react';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

ForgotPass.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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
      paddingRight: theme.spacing(1),
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
      paddingRight: theme.spacing(1),
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

export default function ForgotPass() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Page title="Forgot Password">
      <RootStyle>
        <Container maxWidth={'md'} sx={{ pt: 3 }}>
          {isSuccess ? (
            <Typography textAlign={'center'} width={'100%'} variant={'h5'} maxWidth={600} m={'auto'}>
              If your email address exists in our database, you will receive a password recovery link at your email
              address in a few minutes.
            </Typography>
          ) : (
            <>
              <GradientText variant="h2" color="secondary" mb={2} className="forgot-title">
                Forgot your password?
              </GradientText>
              <Typography color={'text.secondary'} mb={7.5} className="forgot-description">
                Please enter your email address associated with your account
              </Typography>
              <Box className="content">
                <ForgotPassForm setIsSuccess={setIsSuccess} />
              </Box>
            </>
          )}
        </Container>
      </RootStyle>
    </Page>
  );
}
