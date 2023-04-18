import { Chip, Divider, Stack, styled, Typography } from '@mui/material';
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

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

export default function ConfirmInfo({ isPickup }) {
  const { orderConfirmInfo } = useSelector(FOOD_SELECTOR);
  const { full_name, order_date, primary_address, chef_details, status } = orderConfirmInfo ?? {};
  const orderDate = format(new Date(order_date ?? new Date()), 'MMMM d, yyyy');
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
              Order No
            </Typography>
            <Typography variant="subtitle1">#314531315314</Typography>
          </Stack>
          <Stack
            width={{ xs: '100%', md: 'fit-content' }}
            direction={'row'}
            spacing={12}
            whiteSpace={'pre-wrap'}
            justifyContent={'space-between'}
          >
            <Stack spacing={1} alignItems={'center'}>
              <Typography variant="body2" color={'text.secondary'}>
                Payment
              </Typography>
              <Image alt={'master-card'} src={'/assets/search-chef/mastercard.png'} sx={{ width: 40 }} />
            </Stack>
            <Stack spacing={1} display={{ xs: 'block', md: 'none' }}>
              <Typography variant="body2" color={'text.secondary'}>
                Shopping Address
              </Typography>
              <Typography variant="subtitle1">
                {primary_address?.line1}, {primary_address?.apartment},{primary_address?.state},{primary_address?.city},
                {primary_address?.zip}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Stack display={{ xs: 'none', md: 'flex' }} spacing={1}>
          <Typography variant="body2" color={'text.secondary'}>
            {isPickup ? 'Pick Up' : 'Delivery'} Address
          </Typography>
          <Typography variant="subtitle1">12 Rd Avenue, San Antonio, TX, 13294, US</Typography>
        </Stack>

        <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

        <Stack
          whiteSpace={'nowrap'}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={{ xs: 'space-between', md: 'flex-start' }}
          gap={8}
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
          <Stack spacing={3} textAlign={'center'}>
            <Typography variant="subtitle1">Status</Typography>
            <Label variant={'ghost'} color={STATUS_COLOR[status]} sx={{ textTransform: 'capitalize' }}>
              {status}
            </Label>
          </Stack>
        </Stack>

        <Stack
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
        </Stack>
      </Stack>
    </RootStyle>
  );
}
