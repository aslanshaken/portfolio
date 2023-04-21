import PropTypes from 'prop-types';
import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';

//
ChangeDeliveryDateDialgo.propTypes = {
  onSubmit: PropTypes.func,
};
ChangeDeliveryDateDialgo.defaultProps = {
  data: {},
};

export default function ChangeDeliveryDateDialgo({ onSubmit, ...other }) {
  return (
    <Dialog maxWidth={'sm'} {...other}>
      <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
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
            onClick={other.onClose}
          >
            No
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
