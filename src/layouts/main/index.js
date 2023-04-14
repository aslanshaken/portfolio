import PropTypes from 'prop-types';
// @mui
import { Box, Stack } from '@mui/material';
// 
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import useAuth from 'src/hooks/useAuth';
import LoadingScreen from 'src/components/LoadingScreen';

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MainLayout({ children }) {
  const { isInitialized } = useAuth();

  if (!isInitialized) return <LoadingScreen />

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1, mt: 5 }} />

      <MainFooter />
    </Stack>
  );
}
