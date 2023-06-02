import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, colors, Stack, styled, Typography } from '@mui/material';
import Image from 'src/components/Image';
import AddressesDialog from './AddressesDialog';
import { useDispatch, useSelector } from 'src/redux/store';
import useAuth from 'src/hooks/useAuth';
import { FOOD_SELECTOR, getOrderDetail, updateIsPickup } from 'src/redux/slices/food';
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
  const { errorAlert } = useNotify();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { orderDetail, orderId } = checkout;

  const deliveryAddress = orderDetail?.available_addresses?.[0];

  const pickupAddress = orderDetail?.pickup_address;

  const [loading, setIsloading] = useState(false);

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
              disabled={loading}
              variant={isPickup ? 'contained' : 'outlined'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={async () => {
                if (!isPickup) {
                  setIsloading(true);
                  await dispatch(updateIsPickup(true, orderId));
                  await dispatch(getOrderDetail(orderId));
                  setIsloading(false);
                }
              }}
            >
              {'Pickup'}
            </Button>
            <Button
              disabled={loading}
              variant={isPickup ? 'outlined' : 'contained'}
              sx={{ px: 5, fontWeight: 500 }}
              onClick={async () => {
                // successAlert(
                //   'At the moment, delivery services are not available, but we are actively working towards making it possible'
                // );
                if (isPickup && orderDetail?.chef?.delivery_available) {
                  setIsloading(true);
                  await dispatch(updateIsPickup(false, orderId));
                  await dispatch(getOrderDetail(orderId));
                  setIsloading(false);
                } else {
                  errorAlert(`A user can't place an order for delivery`);
                }
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
                    {pickupAddress?.line1 + ' ' + pickupAddress?.apartment}
                  </Typography>
                  <Typography variant={'caption'} maxWidth={200}>
                    {pickupAddress?.city + ' ' + pickupAddress?.state + ' ' + pickupAddress?.zip}
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
                        {deliveryAddress?.line1 + ' ' + deliveryAddress?.apartment}
                      </Typography>
                      <Typography variant={'caption'} maxWidth={200}>
                        {deliveryAddress?.city + ' ' + deliveryAddress?.state + ' ' + deliveryAddress?.zip}
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
