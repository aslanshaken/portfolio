import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from 'src/components/Iconify';

export default function NewCartDialog({ ...other }) {
  return (
    <Dialog maxWidth={'sm'} {...other}>
      <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={6} spacing={4}>
        <Typography variant="h3" fontWeight={500}>
          Would like to start a new cart?
        </Typography>
        <Typography variant="body2">
          You can only order food from one cook at a time, so if you want to order from a different cook, you need to
          start a new cart.
        </Typography>
        <Stack direction={'row'} justifyContent={'space-between'} pt={4} spacing={6}>
          <Button size="large" variant="contained" color={'secondary'} sx={{ px: 8 }} onClick={other.onSubmit}>
            Yes
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{ px: 8, color: 'black', background: '#A5ABB3' }}
            onClick={other.onClose}
          >
            No
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
