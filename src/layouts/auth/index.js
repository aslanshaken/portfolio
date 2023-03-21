import { Grid } from '@mui/material';
import AuthHeader from './AuthHeader';
import GuestGuard from '../../guards/GuestGuard';

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <Grid container>
        <Grid item md={6} xs={12} order={{ xs: 1, md: 0 }}>
          {children}
        </Grid>
        <Grid item md={6} xs={12} sx={{ height: { xs: 0, md: 'auto' }, overflow: 'hidden' }}>
          <AuthHeader />
        </Grid>
      </Grid>
    </GuestGuard>
  );
}
