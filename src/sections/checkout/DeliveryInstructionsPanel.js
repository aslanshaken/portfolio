import PropTypes from 'prop-types';
import { Button, Card, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useState } from 'react';
import Iconify from '../../components/Iconify';

const selects = [
  {
    id: 'yes',
    label: 'Yes',
  },
  {
    id: 'no',
    label: 'No',
  },
];

//
DeliveryInstructionsPanel.propTypes = {
  data: PropTypes.object,
};
DeliveryInstructionsPanel.defaultProps = {
  data: {},
};

export default function DeliveryInstructionsPanel({ data, ...other }) {
  const [selectedAddress, setSelectedAddress] = useState('1');

  const saveData = () => {
    other.onClose();
  };

  return (
    <Card>
      <CardHeader variant="contained" icon="jam:pen-f" title="Delivery Instructions" />
      <Stack px={3} py={2} spacing={2}>
        <Stack sx={{ width: '100%', gap: 2 }}>
          <Typography>Leave order at door?</Typography>
          <Grid spacing={{ md: 12 }} container display={'flex'} alignItems={'flex-start'}>
            {selects.map((item) => (
              <Grid item md={6} key={item.id}>
                <Stack
                  direction={'row'}
                  justifyContent="space-between"
                  sx={{ width: '100%', cursor:'pointer' }}
                  onClick={() => {
                    setSelectedAddress(item.id);
                  }}
                >
                  <Typography pt={1}>
                    {item.label}
                  </Typography>
                  <IconButton
                    color="secondary"
                  >
                    <Iconify
                      icon={`${
                        selectedAddress == item.id
                          ? 'material-symbols:check-circle-rounded'
                          : 'material-symbols:circle-outline'
                      }`}
                    />
                  </IconButton>
                </Stack>
                <Divider sx={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>
          <TextField fullWidth placeholder="More instructions..." multiline rows={8} variant="standard" />
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            sx={{ padding: '20px 60px', width: 'fit-content' }}
            onClick={saveData}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
