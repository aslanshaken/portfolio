import { useState } from 'react';
import { Box, Button, ButtonGroup, colors, Stack, styled, Typography } from '@mui/material';
import Image from 'src/components/Image';
import AddressesDialog from './AddressesDialog';

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  border: `solid 1px`,
  borderColor: colors.grey[300],
}));

PickDeliverSwitchCard.propTypes = {};

export default function PickDeliverSwitchCard({ isPickup, setIsPickup, address, onChangeAddress }) {
  const [isOpenAddressesDialog, setIsOpenAddressesDialog] = useState(false);

  return (
    <RootStyle>
      <AddressesDialog
        open={isOpenAddressesDialog}
        onClose={() => setIsOpenAddressesDialog(false)}
        onChangeAddress={onChangeAddress}
      />
      <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={2}>
        <Box>
          <ButtonGroup color="secondary">
            <Button
              variant={isPickup ? 'contained' : 'outlined'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={() => setIsPickup(true)}
            >
              {'Pickup'}
            </Button>
            <Button
              variant={isPickup ? 'outlined' : 'contained'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={() => setIsPickup(false)}
            >
              {'Delivery'}
            </Button>
          </ButtonGroup>
          <Stack>
            <Typography variant={'subtitle1'} mt={3} gutterBottom>
              {isPickup ? 'Pick up:' : 'Deliver to:'}
            </Typography>
            {isPickup ? (
              <Typography variant={'caption'} maxWidth={200}>
                {'3678 Summit Park Avenue Southfield, MI 69735, US'}
              </Typography>
            ) : address.address != '' ? (
              <Box display={'flex'} gap={4}>
                <Stack>
                  <Typography variant={'caption'} maxWidth={200}>
                    {address.zip + ' ' + address.address}
                  </Typography>
                  <Typography variant={'caption'} maxWidth={200}>
                    {address.apartment + ', ' + address.state + ', ' + address.city}
                  </Typography>
                </Stack>
                <Typography
                  variant={'caption'}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setIsOpenAddressesDialog(true);
                  }}
                >
                  {'edit'}
                </Typography>
              </Box>
            ) : (
              <Typography
                variant={'caption'}
                fontWeight={'600'}
                sx={{ cursor: 'pointer', mt: 2 }}
                onClick={() => {
                  setIsOpenAddressesDialog(true);
                }}
              >
                {'Add address'}
              </Typography>
            )}
          </Stack>
        </Box>
        <Image
          alt="Delivery Card Cover"
          src={'/assets/cart/map.png'}
          maxWidth={300}
          borderRadius={2}
          border={'1px solid #E3E3E3'}
          sx={{ height: 130 }}
        />
      </Box>
    </RootStyle>
  );
}
