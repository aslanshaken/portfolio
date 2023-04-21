import PropTypes from 'prop-types';
import { Button, Dialog, Stack, Typography } from '@mui/material';

//
ChangeDeliveryDateDialgo.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};
ChangeDeliveryDateDialgo.defaultProps = {
  data: {},
};

export default function ChangeDeliveryDateDialgo({ onSubmit, onClose, ...other }) {
  return (
    <Dialog maxWidth={'sm'} {...other}>
      <Stack py={6} px={{ sm: 6, xs: 2 }} spacing={4}>
        <Typography variant="h3" fontWeight={500}>
          Change Delivery Date?
        </Typography>
        <Typography variant="body2">
          Selecting a new date will clear your cart. We can’t guarantee that all of your selected items will be
          available on the newly selected date
        </Typography>
        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          spacing={2}
          alignItems={'center'}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          pt={4}
        >
          <Button
            size="large"
            variant="contained"
            color={'secondary'}
            sx={{ px: 8, whiteSpace: 'nowrap', maxWidth: '300px', width: { xs: '100%', sm: 'auto' } }}
            onClick={onSubmit}
          >
            Yes ( clear cart)
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{ px: 8, color: 'black', background: '#A5ABB3', maxWidth: '300px', width: { xs: '100%', sm: 'auto' } }}
            onClick={onClose}
          >
            No
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
