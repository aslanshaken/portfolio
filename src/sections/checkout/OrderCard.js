import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/Iconify';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'src/redux/store';
import {
  addTips,
  applyCoupon,
  FOOD_SELECTOR,
  getOrderDetail,
  updateFoodCart,
  updateScheduleTime,
} from 'src/redux/slices/food';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { createCardIntent, placeOrder } from 'src/redux/service/payment';
import useNotify from 'src/hooks/useNotify';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';
import { PATH_PAGE } from 'src/routes/paths';
import LoadingScreen from 'src/components/LoadingScreen';

//

const TopBottomButtonStyle = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',
  '& .MuiButton-root': {
    padding: 0,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    minWidth: 0,
    minHeight: 0,
    border: 'none !important',
    color: theme.palette.text.primary,
  },
}));

export default function OrderCard({ isPickup }) {
  const [disabled, setDisabled] = useState(true);
  const [promocode, setPromocode] = useState();
  const { changeAddress } = useAuth();

  const { user } = useAuth();

  // const address = user?.addresses?.find((item) => item.primary_address == true);
  // redux
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { orderDetail, orderId, cart } = checkout;
  const address = orderDetail?.available_addresses?.find((item) => item.primary_address == true);

  // router
  const { push } = useRouter();

  // state
  const [isLoading, setIsLoading] = useState(false);

  //
  const { successAlert, errorAlert } = useNotify();

  //
  const cartArr = cart?.reduce((acc, curr) => {
    // Find the object in acc array with same id and name
    const foundObj = acc.find((obj) => obj.id === curr.id);

    // If object is present increment the count else add the current object into accumulator array
    if (foundObj) {
      foundObj.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }

    return acc;
  }, []);

  // const { sub_total, service_fee, items, order_total } = orderDetail;

  const { delivery_fee, sub_total, service_fee, items, order_total } = orderDetail ?? {};

  const dispatch = useDispatch();

  const [tips, setTips] = useState(orderDetail?.tips ?? 0);

  const sendPromocode = async () => {
    const response = await dispatch(applyCoupon(promocode, orderId));
    if (!response) {
      errorAlert('Promocode is not valid');
    } else {
      successAlert('Successfully applied promo code');
    }
    dispatch(getOrderDetail(orderId));
  };

  const handleClickOrder = async () => {
    setIsLoading(true);
    try {
      await dispatch(updateScheduleTime(orderId, checkout?.orderDetail?.items?.[0]?.selected_time));
      await changeAddress(isPickup, address?.id, orderId);
      await dispatch(addTips({ orderId: orderId, tips: tips }));
      const response = await dispatch(placeOrder(orderId));

      if (placeOrder.fulfilled.match(response)) {
        successAlert('Your payment was successful.');
        dispatch(updateFoodCart({ actionType: 'clear' }));
        setIsLoading(false);
        push(PATH_PAGE.orderConfirm.orders({ orderId }));
      } else if (placeOrder.rejected.match(response)) {
        const error = response.payload.message;
        errorAlert(error);
        setIsLoading(false);
      }
    } catch (error) {
      errorAlert(error?.message);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Stack
      sx={{
        borderRadius: 1,
        background: 'url(/assets/textures/cuisine-cart.png)',
        padding: 5,
      }}
    >
      <Typography variant={'h4'} fontWeight={500} gutterBottom>
        {'Your order'}
      </Typography>

      <Box mt={5} />

      {items?.map((item, _i) => (
        <Stack key={_i} direction={'row'} justifyContent={'space-between'} mb={2}>
          <Typography variant={'body2'} color={'text.secondary'}>
            {item?.title}
          </Typography>
          <Typography>${item?.total_cost}</Typography>
        </Stack>
      ))}

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Subtotal:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${sub_total}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Service Fee:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${service_fee}
        </Typography>
      </Stack>

      {delivery_fee > 0 && (
        <>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
            <Typography variant={'body2'}>{'Delivery Fee:'}</Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${delivery_fee}
            </Typography>
          </Stack>
        </>
      )}

      {!isPickup && tips && (
        <>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
            <Typography variant={'body2'}>{'Tip:'}</Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${tips == '' ? 0 : tips}
            </Typography>
          </Stack>
        </>
      )}

      {order_total && (
        <>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
            <Typography variant={'body2'}>{'Total:'}</Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${order_total + parseFloat(tips == '' ? 0 : tips)}
            </Typography>
          </Stack>
        </>
      )}

      <Divider sx={{ mb: 2 }} />

      <Box mt={5} />

      {!isPickup && (
        <>
          <Typography variant="subtitle1" gutterBottom>
            {'Tip your delivery person'}
          </Typography>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              type={'number'}
              value={tips}
              label={'Fair enough'}
              variant={'filled'}
              size={'small'}
              onChange={(e) => {
                setTips(e.target.value);
              }}
            />
            <TopBottomButtonStyle orientation={'vertical'} color={'inherit'}>
              <Button onClick={() => setTips(tips + 1)}>
                <Iconify icon={'material-symbols:keyboard-arrow-up-rounded'} sx={{ height: 24 }} />
              </Button>
              <Button
                onClick={() => {
                  if (tips > 0) setTips(tips - 1);
                }}
              >
                <Iconify icon={'material-symbols:keyboard-arrow-down-rounded'} sx={{ height: 24 }} />
              </Button>
            </TopBottomButtonStyle>
          </Stack>
        </>
      )}

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Enter your promocode here'}
      </Typography>

      <Stack direction={'row'}>
        <TextField
          fullWidth
          label={'Promocode'}
          variant={'filled'}
          size={'small'}
          onChange={(e) => setPromocode(e.target.value)}
        />

        <Button onClick={sendPromocode} variant="contained" color="secondary" sx={{ width: 'fit-content' }}>
          Add
        </Button>
      </Stack>

      <Box mt={5} />

      <Typography variant={'body2'} color={'text.secondary'}>
        {
          'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'
        }
      </Typography>

      <Box mt={5} />

      <FormControlLabel
        control={<Checkbox sx={{ mr: 1 }} onClick={(e) => setDisabled(!disabled)} />}
        label={'I’ve read and agree to the website terms and conditions'}
        sx={{ alignItems: 'flex-start' }}
      />

      <Box mt={5} />

      <LoadingButton
        disabled={disabled}
        size="large"
        variant={'contained'}
        sx={{ borderRadius: '30px' }}
        onClick={handleClickOrder}
      >
        ORDER
      </LoadingButton>
    </Stack>
  );
}
