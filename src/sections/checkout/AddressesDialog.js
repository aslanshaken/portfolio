import PropTypes from 'prop-types';
import { Button, Dialog, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../components/Iconify';

//
AddressesDialog.propTypes = {
  data: PropTypes.object,
};
AddressesDialog.defaultProps = {
  data: {},
};

export default function AddressesDialog({ data, ...other }) {
  const [selectedAddress, setSelectedAddress] = useState('1');

  const addAddress = () => {
    other.onClose();
  }

  return (
    <Dialog maxWidth={'sm'} {...other}>
      <IconButton onClick={() => other.onClose()} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={8} gap={6}>
        <Typography variant="h3">Recent addressAes</Typography>
        <Grid container display={'flex'} alignItems={'flex-start'}>
          <Grid
            item
            xs={9}
            onClick={() => {
              setSelectedAddress('1');
            }}
            sx={{ cursor: 'pointer' }}
          >
            <Typography pt={1}>3678 Summit Park Avenue Southfield, MI 69735, US</Typography>
          </Grid>
          <Grid item xs={3} display={'flex'} justifyContent={'end'}>
            <IconButton
              color="secondary"
              onClick={() => {
                setSelectedAddress('1');
              }}
            >
              <Iconify
                icon={`${
                  selectedAddress == '1' ? 'material-symbols:check-circle-rounded' : 'material-symbols:circle-outline'
                }`}
              />
            </IconButton>
          </Grid>
          <Grid item xs={12} py={3}>
            <Divider />
          </Grid>
          <Grid
            item
            xs={9}
            onClick={() => {
              setSelectedAddress('2');
            }}
            sx={{ cursor: 'pointer' }}
          >
            <Typography pt={1}>3678 Summit Park Avenue Southfield, MI 69735, US</Typography>
          </Grid>
          <Grid item xs={3} display={'flex'} justifyContent={'end'}>
            <IconButton
              color="secondary"
              onClick={() => {
                setSelectedAddress('2');
              }}
            >
              <Iconify
                icon={`${
                  selectedAddress == '2' ? 'material-symbols:check-circle-rounded' : 'material-symbols:circle-outline'
                }`}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Button size="large" variant="outlined" color="secondary" sx={{ padding: '20px 40px', width: 'fit-content' }} onClick={addAddress}>
          Enter new address
        </Button>
      </Stack>
    </Dialog>
  );
}
