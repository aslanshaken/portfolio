import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Iconify from './Iconify';

//

BackgroundIcon.propTypes = {
  icon: PropTypes.any,
  sx: PropTypes.object,
  iconSx: PropTypes.object,
  variant: PropTypes.string,
};

export default function BackgroundIcon({ icon = '', sx, iconSx, variant, ...others }) {
  return (
    <Box
      sx={(theme) => ({
        background: variant === 'contained' ? 'white' : theme.palette.secondary.main,
        width: 25,
        height: 25,
        borderRadius: '50%',
        color: variant === 'contained' ? theme.palette.secondary.main : 'white',
        display: 'flex',
        ...sx,
      })}
      {...others}
    >
      {typeof icon === 'string' ? (
        <Iconify icon={icon} sx={{ width: '60%', height: '60%', margin: 'auto', ...iconSx }} />
      ) : (
        icon
      )}
    </Box>
  );
}
