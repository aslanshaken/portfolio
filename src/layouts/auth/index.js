import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import AuthHeader from './AuthHeader';
import GuestGuard from '../../guards/GuestGuard';

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <Grid container>
        <Grid item md={6} xs={12} order={{ xs: 1, md: 0 }} sx={{ mb: 5 }}>
          {children}
        </Grid>
        <Grid item md={6} xs={12} sx={{ height: { xs: 0, md: 'auto' }, overflow: 'hidden' }}>
          <AuthHeader />
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
