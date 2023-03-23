import PropTypes from 'prop-types';
// components
import MainLayout from './main';
import AuthLayout from './auth';
import DashboardLayout from './dashboard';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dashboard', 'main', 'auth']),
};

export default function Layout({ variant = 'dashboard', children }) {
  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }
  if (variant === 'auth') {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <DashboardLayout>{children}</DashboardLayout>
}
