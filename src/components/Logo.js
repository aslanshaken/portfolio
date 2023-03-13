import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box ref={ref} sx={{ width: 150, height: 50, cursor: 'pointer', ...sx }}>
      <Image
        disabledEffect
        alt="logo"
        src={'/assets/logo-white.png'}
      />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
