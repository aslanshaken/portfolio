import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box } from '@mui/material';
import Image from './Image';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, type = '', sx }, ref) => {
  // OR
  // const logo = '/logo/logo_single.svg';

  const logo = (
    <Box
      ref={ref}
      sx={(theme) => ({
        height: 1,
        cursor: 'pointer',
        background: type == 'loading' && theme.palette.gradients.secondary,
        borderRadius: type == 'loading' && '50%',
        ...sx,
      })}
    >
      <Image
        disabledEffect
        alt="logo"
        src={type == 'loading' ? '/assets/logo-transperent.png' : '/assets/logo-transperent.png'}
        sx={{ height: 1 }}
        objectFit="contain"
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
  type: PropTypes.string,
};

export default Logo;
