import PropTypes from 'prop-types';
import { Divider, Stack, Typography } from '@mui/material';
import BackgroundIcon from '../BackgroundIcon';

//

CardHeader.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  hideDivider: PropTypes.bool,
  variant: PropTypes.string,
  subtitle: PropTypes.string,
};

export default function CardHeader({ icon = '', title = '', subtitle = '', hideDivider = false, variant }) {
  return (
    <>
      <Stack
        direction={'row'}
        px={3}
        py={2}
        sx={(theme) => ({
          background: variant === 'contained' && theme.palette.gradients.secondary,
        })}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        gap={1}
      >
        <Stack direction={'row'} spacing={2}>
          <BackgroundIcon variant={variant} icon={icon} />
          <Typography variant="subtitle1" color={`${variant === 'contained' ? 'white' : 'black'}`}>
            {title}
          </Typography>
        </Stack>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Stack>
      {!hideDivider && <Divider />}
    </>
  );
}
