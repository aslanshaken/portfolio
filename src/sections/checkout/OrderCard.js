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
import { createOrders, FOOD_SELECTOR } from 'src/redux/slices/food';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';

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

export default function OrderCard() {
  const { chef } = useSelector(CITYCUISINE_SELECTOR);

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const dispatch = useDispatch();

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

  const handleClickCreateOrders = () => {
    dispatch(createOrders({ chefId: chef?.chef?.id, carts: cartArr }));
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

      {cartArr?.map((item) => (
        <Stack key={item?.id} direction={'row'} justifyContent={'space-between'} mb={2}>
          <Typography variant={'body2'} color={'text.secondary'}>
            {item?.title}
          </Typography>
          <Typography>${item?.current_price * item?.count}</Typography>
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
          {'$9.99'}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Total:'}</Typography>
        <Typography fontWeight={'bold'} color={'secondary'}>
          ${(totalPrice + 9.99).toFixed(3)}
        </Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Tips'}
      </Typography>
      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <TextField fullWidth label={'Fair enough'} variant={'filled'} size={'small'} />
        <TopBottomButtonStyle orientation={'vertical'} color={'inherit'}>
          <Button>
            <Iconify icon={'material-symbols:keyboard-arrow-up-rounded'} sx={{ height: 24 }} />
          </Button>
          <Button>
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

      <NextLink href="/cities/4/ukrainian-cuisine/adam-sandler/checkout/confirm" passHref>
        <Button size="large" variant={'contained'} sx={{ borderRadius: '30px' }} onClick={handleClickCreateOrders}>
          ORDER
        </Button>
      </NextLink>
    </Stack>
  );
}
