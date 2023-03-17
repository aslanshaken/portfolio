import { Grid } from '@mui/material';
import AuthHeader from './AuthHeader';

export default function AuthLayout({ children }) {
  return (
    <Grid container>
      <Grid item md={6} xs={12} order={{ xs: 1, md: 0 }}>
        {children}
      </Grid>
      <Grid item md={6} xs={12} sx={{ height: { xs: 0, md: 'auto' }, overflow: 'hidden' }}>
        <AuthHeader />
      </Grid>
    </Grid>
  );
}
