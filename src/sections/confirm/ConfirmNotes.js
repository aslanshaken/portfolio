import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import CardHeader from 'src/components/card/CardHeader';

export default function ConfirmNotes() {
  return (
    <Stack spacing={8}>
      <Card sx={{ display: { xs: 'none', md: 'block' } }}>
        <CardHeader icon="jam:pen-f" title={'Notes'} />

        <Box px={3} py={3}>
          <Typography color={'text.secondary'} variant={'body2'}>
            Is there anything else you'd like us to know about your order?
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
              {'$66.96'}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
              {'Fee'}
            </Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              {'$9.99'}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'body2'} color={'text.secondary'} fontWeight={'600'}>
              {'Discount'}
            </Typography>
            <Typography fontWeight={'bold'} color={'#39BA7C'}>
              {'-$15'}
            </Typography>
          </Stack>
          <Divider sx={{ mb: 2 }} />
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'subtitle1'} color={'black'} fontWeight={'bold'}>
              {'Total'}
            </Typography>
            <Typography fontWeight={'bold'} color={'secondary'}>
              {'$115'}
            </Typography>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Stack>
  );
}
