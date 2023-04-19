import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import AuthHeader from './AuthHeader';
import GuestGuard from '../../guards/GuestGuard';
import BackToHomePage from 'src/sections/auth/BackToHomePage';

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <Grid container>
        <Grid item md={6} xs={12} order={{ xs: 1, md: 0 }} sx={{ mb: 5 }}>
          <BackToHomePage />
          <Box
            sx={{
              height: '100%',
              width: '100%',
              marginTop: -2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sx={{ height: { xs: 0, md: 'auto' }, overflow: 'hidden' }}>
          <AuthHeader />
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
