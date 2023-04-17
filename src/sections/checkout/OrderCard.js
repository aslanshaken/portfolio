import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/Iconify';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'src/redux/store';
import { addTips, FOOD_SELECTOR, updateScheduleTime } from 'src/redux/slices/food';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { placeOrder } from 'src/redux/service/payment';
import useNotify from 'src/hooks/useNotify';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';

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
  const { changeAddress } = useAuth();

  const { user } = useAuth();

  const address = user?.addresses?.find((item) => item.primary_address == true);
  // redux
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { orderDetail, orderId, cart, scheduleTime } = checkout;

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

  const totalPrice = cart?.reduce((accumulator, item) => accumulator + item.current_price, 0);

  const dispatch = useDispatch();

  const [tips, setTips] = useState(orderDetail?.tips ?? 0);

  const handleClickOrder = async () => {
    try {
      
    setIsLoading(true);
    await changeAddress(isPickup, address?.id, orderId);
    await dispatch(addTips({ orderId: orderId, tips: tips }));
    await dispatch(updateScheduleTime(orderId, scheduleTime));
    const response = await dispatch(placeOrder(orderId));

    if (placeOrder.fulfilled.match(response)) {
      successAlert('Your payment was successful.');
      setIsLoading(false);
      setTimeout(() => {
        push('/cities/4/ukrainian-cuisine/adam-sandler/checkout/confirm');
      }, 1000);
    } else if (placeOrder.rejected.match(response)) {
      const error = response.payload;
      errorAlert(error.message);
      setIsLoading(false);
    }
    } catch (error) {
      console.log('error: ', error);
      
    }
  };

  return (
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

      {cartArr?.map((item, _i) => (
        <Stack key={_i} direction={'row'} justifyContent={'space-between'} mb={2}>
          <Typography variant={'body2'} color={'text.secondary'}>
            {item?.title}
          </Typography>
          <Typography>${item?.current_price}</Typography>
        </Stack>
      ))}

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Subtotal:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${totalPrice}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Service Fee:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${totalPrice * 0.05}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Total:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${totalPrice * 1.05}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Tips'}
      </Typography>
      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <TextField
          fullWidth
          type={'number'}
          value={tips}
          label={'Fair enough'}
          variant={'filled'}
          size={'small'}
          onChange={(e) => setTips(parseFloat(e.target.value))}
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

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Enter your promocode here'}
      </Typography>

      <TextField fullWidth label={'Promocode'} variant={'filled'} size={'small'} />

      <Box mt={5} />

      <Typography variant={'body2'} color={'text.secondary'}>
        {
          'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'
        }
      </Typography>

      <Box mt={5} />

      <FormControlLabel
        control={<Checkbox sx={{ mr: 1 }} />}
        label={'I’ve read and agree to the website terms and conditions'}
        sx={{ alignItems: 'flex-start' }}
      />

      <Box mt={5} />

      <LoadingButton
        loading={isLoading}
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
