import PropTypes from 'prop-types';
import { Divider, Stack, Typography } from '@mui/material';
import BackgroundIcon from '../BackgroundIcon';

//

CardHeader.propTypes = {
  icon: PropTypes.string || PropTypes.node,
  title: PropTypes.string,
  hideDivider: PropTypes.bool,
};

export default function CardHeader({ icon = '', title = '', hideDivider = false }) {
  return (
    <>
      <Stack direction={'row'} px={3} py={2} spacing={2}>
        <BackgroundIcon icon={icon} />
        <Typography variant="subtitle1" color={'black'}>
          {title}
        </Typography>
      </Stack>
      {!hideDivider && <Divider />}
    </>
  );
}
