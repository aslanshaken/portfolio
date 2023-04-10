import PropTypes from 'prop-types';
import { Button, Card, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import { dispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, updateDeliveryInstructions } from 'src/redux/slices/food';
import useNotify from 'src/hooks/useNotify';

const selects = [
  {
    value: true,
    label: 'Yes',
  },
  {
    value: false,
    label: 'No',
  },
];

//
NotesPanel.propTypes = {
  data: PropTypes.object,
  isPickup: PropTypes.bool,
};
NotesPanel.defaultProps = {
  data: {},
};

export default function NotesPanel({ data, isPickup, ...other }) {
  const { checkout } = useSelector(FOOD_SELECTOR);
  const [note, setNote] = useState(checkout?.orderDetail?.delivery_instructions);
  const [selectedAddress, setSelectedAddress] = useState(true);

  const { successAlert, errorAlert } = useNotify();

  const updateNote = async () => {
    try {
      const response = await dispatch(
        updateDeliveryInstructions({
          orderId: checkout?.orderId,
          status: isPickup ? false : selectedAddress,
          note: note,
        })
      );
      successAlert(response?.success);
      other.onClose();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  return (
    <Card>
      <CardHeader variant="contained" icon="jam:pen-f" title="Notes" />
      <Stack px={3} py={2} spacing={2}>
        <Stack sx={{ width: '100%', gap: 2 }}>
          {!isPickup && (
            <>
              <Typography variant="subtitle1">Leave order at door?</Typography>
              <Grid spacing={{ md: 12 }} container display={'flex'} alignItems={'flex-start'}>
                {selects.map((item) => (
                  <Grid item md={6} key={item.value}>
                    <Stack
                      direction={'row'}
                      justifyContent="space-between"
                      sx={{ width: '100%', cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedAddress(item.value);
                      }}
                    >
                      <Typography pt={1} fontWeight={'bold'}>
                        {item.label}
                      </Typography>
                      <IconButton color="secondary">
                        <Iconify
                          icon={`${
                            selectedAddress == item.value
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
            </>
          )}
          <TextField
            defaultValue={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            fullWidth
            placeholder="Is there anything else you'd like us to know about?"
            multiline
            rows={8}
            variant="standard"
          />
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            sx={{ padding: '20px 60px', width: 'fit-content' }}
            onClick={updateNote}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
