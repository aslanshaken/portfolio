import PropTypes from 'prop-types';
// components
import MainLayout from './main';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['dashboard', 'main']),
};

export default function Layout({ variant = 'dashboard', children }) {
  if (variant === 'main') {
    return <MainLayout>{children}</MainLayout>;
  }

  return (<></>);
}
