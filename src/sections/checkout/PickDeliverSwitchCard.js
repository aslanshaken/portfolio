import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, colors, Stack, styled, Typography } from '@mui/material';
import Image from 'src/components/Image';
import AddressesDialog from './AddressesDialog';
import { useDispatch, useSelector } from 'src/redux/store';
import useAuth from 'src/hooks/useAuth';
import { FOOD_SELECTOR, updateIsPickup } from 'src/redux/slices/food';
import useNotify from 'src/hooks/useNotify';

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  border: `solid 1px`,
  borderColor: colors.grey[300],
}));

PickDeliverSwitchCard.propTypes = {
  isPickup: PropTypes.bool,
  setIsPickup: PropTypes.func,
};

export default function PickDeliverSwitchCard({ isPickup = true, setIsPickup }) {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { successAlert } = useNotify();

  const { user } = useAuth();

  const deliveryAddress = user?.addresses?.find((item) => item.primary_address == true);

  const { orderDetail, orderId } = checkout;

  const pickupAddress = orderDetail?.pickup_address;

  // const deliveryAddress = orderDetail?.address;

  const [isOpenAddressesDialog, setIsOpenAddressesDialog] = useState(false);

  const dispatch = useDispatch();

  return (
    <RootStyle>
      <AddressesDialog open={isOpenAddressesDialog} onClose={() => setIsOpenAddressesDialog(false)} />
      <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={2}>
        <Box>
          <ButtonGroup color="secondary">
            <Button
              variant={isPickup ? 'contained' : 'outlined'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={() => {
                dispatch(updateIsPickup(true, orderId));
                setIsPickup(true);
              }}
            >
              {'Pickup'}
            </Button>
            <Button
              variant={isPickup ? 'outlined' : 'contained'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={() => {
                successAlert(
                  'At the moment, delivery services are not available, but we are actively working towards making it possible'
                );
                // dispatch(updateIsPickup(false, orderId));
                // setIsPickup(false);
              }}
            >
              {'Delivery'}
            </Button>
          </ButtonGroup>
          <Stack>
            <Typography variant={'subtitle1'} mt={3} gutterBottom>
              {isPickup ? 'Pick up:' : 'Deliver to:'}
            </Typography>
            {isPickup ? (
              pickupAddress ? (
                <Stack>
                  <Typography variant={'caption'} maxWidth={200}>
                    {pickupAddress?.zip + ' ' + pickupAddress?.line1}
                  </Typography>
                  <Typography variant={'caption'} maxWidth={200}>
                    {pickupAddress?.apartment + ' ' + pickupAddress?.state + ' ' + pickupAddress?.city}
                  </Typography>
                </Stack>
              ) : (
                <Typography variant="caption">There is no address</Typography>
              )
            ) : (
              <>
                {deliveryAddress ? (
                  <Box display={'flex'} gap={4}>
                    <Stack>
                      <Typography variant={'caption'} maxWidth={200}>
                        {deliveryAddress?.zip + ' ' + deliveryAddress?.line1}
                      </Typography>
                      <Typography variant={'caption'} maxWidth={200}>
                        {deliveryAddress?.apartment + ' ' + deliveryAddress?.state + ' ' + deliveryAddress?.city}
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
              </>
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
