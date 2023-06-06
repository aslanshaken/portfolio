import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import CardHeader from 'src/components/card/CardHeader';
import { FOOD_SELECTOR, updateFoodCart } from 'src/redux/slices/food';
import { dispatch, useDispatch, useSelector } from 'src/redux/store';

export default function ConfirmNotes() {
  const { orderConfirmInfo } = useSelector(FOOD_SELECTOR);
  const notes = orderConfirmInfo?.notes ?? '';
  const { sub_total, delivery_fee, service_fee, order_total, discount, tips } = orderConfirmInfo ?? {};

  return (
    <Stack spacing={8}>
      <Card sx={{ display: { xs: 'none', md: 'block' } }}>
        <CardHeader icon="jam:pen-f" title={'Notes'} />

        <Box px={3} py={3}>
          <Typography color={'text.secondary'} variant={'body2'}>
            {notes}
          </Typography>
        </Box>
      </Card>
      <Stack
        px={3}
        direction={{ md: 'row', xs: 'column-reverse' }}
        justifyContent={{ md: 'space-between' }}
        flexWrap={'wrap'}
        alignItems={{ md: 'flex-end' }}
      >
        <Typography variant="h5" py={2}>
          Thank you for shopping with us !
        </Typography>
        <Stack spacing={2} width={{ md: 300, xs: '100%' }} py={2}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
              {'Subtotal'}
            </Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${sub_total}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
              {'Fee'}
            </Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${service_fee}
            </Typography>
          </Stack>
          {delivery_fee > 0 && (
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
                {'Delivery fee'}
              </Typography>
              <Typography fontWeight={'bold'} color={'secondary'}>
                ${delivery_fee}
              </Typography>
            </Stack>
          )}
          {tips > 0 && (
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
                {'Tips'}
              </Typography>
              <Typography fontWeight={'bold'} color={'secondary'}>
                ${tips}
              </Typography>
            </Stack>
          )}
          {discount > 0 && (
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
                {'Discount'}
              </Typography>
              <Typography fontWeight={'bold'} color={'#39BA7C'}>
                ${discount}
              </Typography>
            </Stack>
          )}
          <Divider sx={{ mb: 2 }} />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'subtitle1'} color={'black'} fontWeight={'bold'}>
              {'Total'}
            </Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              ${order_total}
            </Typography>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
}
