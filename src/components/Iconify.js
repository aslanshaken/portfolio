import PropTypes from 'prop-types';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
import { ICON } from '../config';

// ----------------------------------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default function Iconify({ icon, sx, ...other }) {
  return (
    <Box component={Icon} icon={icon} sx={{ width: ICON.NAVBAR_ITEM, height: ICON.NAVBAR_ITEM, ...sx }} {...other} />
  );
}
