import PropTypes from 'prop-types';
import { Divider, Stack, Typography } from '@mui/material';
import BackgroundIcon from '../BackgroundIcon';

//

CardHeader.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  hideDivider: PropTypes.bool,
  variant: PropTypes.string,
};

export default function CardHeader({ icon = '', title = '', hideDivider = false, variant }) {
  return (
    <>
      <Stack
        direction={'row'}
        px={3}
        py={2}
        spacing={2}
        sx={(theme) => ({
          background: variant === 'contained' && theme.palette.gradients.secondary,
        })}
      >
        <BackgroundIcon variant={variant} icon={icon} />
        <Typography variant="subtitle1" color={`${variant === 'contained' ? 'white' : 'black'}`}>
          {title}
        </Typography>
      </Stack>
      {!hideDivider && <Divider />}
    </>
  );
}
