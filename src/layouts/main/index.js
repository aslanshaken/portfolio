import PropTypes from 'prop-types';
// @mui
import { Box, Stack } from '@mui/material';
// 
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import DialgProvider from './DialogProvider';

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MainLayout({ children }) {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <DialgProvider />
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1, mt: 5 }} />

      <MainFooter />
    </Stack>
  );
}
