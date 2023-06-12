import { Chip, Divider, IconButton, Stack, styled, Typography } from '@mui/material';
import Avatar from 'src/components/Avatar';
import Image from 'src/components/Image';
import { HEADER } from 'src/config';
import useAuth from 'src/hooks/useAuth';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';
import { parse, format } from 'date-fns';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import Label from 'src/components/Label';
import { STATUS_COLOR } from '../@dashboard/orders/OrderTableRow';
import Iconify from 'src/components/Iconify';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

export default function ConfirmInfo() {
  const { orderConfirmInfo } = useSelector(FOOD_SELECTOR);
  const {
    full_name,
    order_date,
    chef_details,
    status,
    is_pickup,
    order_address,
    order_num,
    schedule_time,
    pickup_date,
  } = orderConfirmInfo ?? {};
  const { primary_address } = chef_details ?? {};
  const orderDate = order_date ? format(parse(order_date, 'MM/dd/yyyy', new Date()), 'MMMM d, yyyy') : '';
  const pickupDate = pickup_date ? format(parse(pickup_date, 'MM/dd/yyyy', new Date()), 'MMMM d, yyyy') : '';

  const handleCall = () => {
    window.location.href = 'tel:+19299285292';
  };

  // const { user } = useAuth();
  // const { checkout } = useSelector(FOOD_SELECTOR);
  // const { deliveryDate } = checkout;
  // // const date = parse(deliveryDate, 'MM/dd/yy', new Date());
  // const { chef } = useSelector(CITYCUISINE_SELECTOR);
  // const chef_details = chef?.chef;

  return (
    <RootStyle>
      <Stack py={8} px={3} spacing={4}>
        <Typography variant="h3" display={{ xs: 'none', md: 'block' }}>
          Thank you for your order!
        </Typography>
        <Typography variant="h3" display={{ xs: 'block', md: 'none' }}>
          Order details
        </Typography>

        <Divider />

        <Stack whiteSpace={'nowrap'} direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} gap={6}>
          <Stack spacing={1} display={{ xs: 'none', md: 'block' }}>
            <Typography variant="subtitle1">Hello {full_name},</Typography>
            <Typography variant="body2" color={'text.secondary'}>
              Your order has been confirmed
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              Order date
            </Typography>
            <Typography variant="subtitle1">{orderDate}</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              {is_pickup ? 'Pick Up' : 'Delivery'} date
            </Typography>
            <Typography variant="subtitle1">{pickupDate}</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              {is_pickup ? 'Pick Up' : 'Delivery'} Time
            </Typography>
            <Typography variant="subtitle1">{schedule_time}</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              Order No
            </Typography>
            <Typography variant="subtitle1">#{order_num}</Typography>
          </Stack>
        </Stack>

        <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

        <Stack direction={{ md: 'row', xs: 'column' }} justifyContent={'space-between'} flex={'wrap'} gap={4}>
          <Divider sx={{ order: 2 }} />
          <Stack
            order={{ xs: 3, md: 1 }}
            whiteSpace={'nowrap'}
            direction={'row'}
            flexWrap={'nowrap'}
            justifyContent={{ xs: 'space-between', md: 'flex-start' }}
            gap={8}
            spacing={8}
          >
            <Stack spacing={1}>
              <Typography variant="subtitle1">Chef</Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Avatar
                  alt="Travis Howard"
                  src={chef_details?.image_url}
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Typography variant="body2" color={'text.secondary'} fontWeight={'600'}>
                  {chef_details?.first_name} {chef_details?.last_name}
                </Typography>
              </Stack>
            </Stack>
            {status && (
              <Stack spacing={3} textAlign={'center'}>
                <Typography variant="subtitle1">Status</Typography>
                <Label variant={'ghost'} color={STATUS_COLOR[status]} sx={{ textTransform: 'capitalize' }}>
                  {status}
                </Label>
              </Stack>
            )}
          </Stack>
          <Stack
            order={{ xs: 3, md: 1 }}
            whiteSpace={'nowrap'}
            direction={'row'}
            flexWrap={'nowrap'}
            justifyContent={{ xs: 'space-between', md: 'flex-start' }}
            gap={8}
          >
            <Stack spacing={2} textAlign={'center'} alignItems={'center'}>
              <Typography variant="subtitle1">Support</Typography>
              <IconButton
                sx={(theme) => ({ background: theme.palette.gradients.primary, width: 30, height: 30 })}
                onClick={handleCall}
                size="medium"
                variant="contained"
              >
                <Iconify color={'white'} icon={'material-symbols:phone-enabled'} />
              </IconButton>
            </Stack>
          </Stack>
          <Stack spacing={1} order={{ xs: 1, md: 3 }}>
            <Typography variant="body2" color={'text.secondary'}>
              {is_pickup ? 'Pick Up' : 'Delivery'} Address
            </Typography>
            <Typography variant="subtitle1">
              {is_pickup ? (
                primary_address != null ? (
                  `${primary_address?.line1}, ${primary_address?.apartment}, ${primary_address?.state}, ${primary_address?.city}, 
                ${primary_address?.zip}`
                ) : (
                  <Typography variant="body2" color={'gray'}>
                    There is no address
                  </Typography>
                )
              ) : primary_address != null ? (
                `${order_address?.line1}, ${order_address?.apartment}, ${order_address?.state}, ${order_address?.city}, 
                ${order_address?.zip}`
              ) : (
                <Typography variant="body2" color={'gray'}>
                  There is no address
                </Typography>
              )}
            </Typography>
          </Stack>
        </Stack>

        {/* <Stack
          pt={4}
          whiteSpace={'nowrap'}
          direction={'row'}
          display={{ xs: 'flex', md: 'none' }}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Stack spacing={1}>
            <Typography variant="subtitle1">Total items</Typography>
            <Typography variant="body2" color={'text.secondary'}>
              5
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Total price</Typography>
            <Typography variant="body2" color={'#8CCC67'}>
              $243
            </Typography>
          </Stack>
        </Stack> */}
      </Stack>
    </RootStyle>
  );
}
