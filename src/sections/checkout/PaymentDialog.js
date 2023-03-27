import PropTypes from 'prop-types';
import { Button, Dialog, FormControl, Grid, IconButton, Input, InputLabel, Stack, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';

//
PaymentDialog.propTypes = {
  data: PropTypes.object,
};
PaymentDialog.defaultProps = {
  data: {},
};

const inputs = [
  { type: 'text', label: 'Card number', placeholder: '1234 1234 1234 1234' },
  { type: 'text', label: 'Expiration', placeholder: 'MM / YY' },
  { type: 'text', label: 'CVC', placeholder: '123' },
  { type: 'text', label: 'ZIP', placeholder: '25897' },
];

export default function PaymentDialog({ data, ...other }) {
  const addPayment = () => {
    other.onClose();
  };

  return (
    <Dialog maxWidth={'sm'} {...other}>
      <IconButton onClick={() => other.onClose()} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={8} gap={6}>
        <Typography variant="h3">Add payment</Typography>
        <Grid container spacing={6}>
          {inputs.map((item, _i) => (
            <Grid item md={6} key={_i} xs={12}>
              <FormControl variant="standard" fullWidth>
                <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: 'black', fontWeight: 'bold' }}>
                  {item.label}
                </InputLabel>
                <Input placeholder={item.placeholder} type={item.type} />
              </FormControl>
            </Grid>
          ))}
        </Grid>
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          sx={{ padding: '20px 40px', width: 'fit-content' }}
          onClick={() => addPayment()}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
}
