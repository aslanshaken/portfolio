import PropTypes from 'prop-types';
import { alpha, Box, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import Iconify from 'src/components/Iconify';

export default function useNotify() {
  const _errorAlert = (message = 'An error occurred while processing data') => {
    toast.error(message, {
      icon: <SnackbarIcon icon={'eva:alert-circle-fill'} color="error" />,
    });
  };

  const _successAlert = (message = 'The current operation was successful', options = {}) => {
    toast.success(message, {
      icon: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} color="success" />,
    });
  };

  return {
    errorAlert: _errorAlert,
    successAlert: _successAlert,
  };
}

// ----------------------------------------------------------------------

SnackbarIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
};

export function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </Box>
  );
}
