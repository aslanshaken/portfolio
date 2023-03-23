import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Iconify from './Iconify';

//

BackgroundIcon.propTypes = {
  icon: PropTypes.string || PropTypes.node,
  sx: PropTypes.object,
  iconSx: PropTypes.object,
};

export default function BackgroundIcon({ icon = '', sx, iconSx, ...others }) {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.secondary.main,
        width: 25,
        height: 25,
        borderRadius: '50%',
        color: 'white',
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
