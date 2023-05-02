import PropTypes from 'prop-types';
import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// hooks
import useAuth from '../hooks/useAuth';
// routes

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const router = useRouter();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      // push(PATH_DASHBOARD.account);
      router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <>{children}</>;
}
