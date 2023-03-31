import { Chip, Divider, Stack, styled, Typography } from '@mui/material';
import Avatar from 'src/components/Avatar';
import Image from 'src/components/Image';
import { HEADER } from 'src/config';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

export default function ConfirmInfo({ isPickup }) {
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
            <Typography variant="subtitle1">Hello Michael,</Typography>
            <Typography variant="body2" color={'text.secondary'}>
              Your order has been confirmed
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              Order date
            </Typography>
            <Typography variant="subtitle1">January 12, 2023</Typography>
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
              <Typography variant="subtitle1">12 Rd Avenue, San Antonio, TX, 13294, US</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Stack whiteSpace={'nowrap'} direction={'row'} flexWrap={'wrap'} gap={10} display={{ xs: 'none', md: 'flex' }}>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              {isPickup ? 'Pick Up' : 'Delivery'} Address
            </Typography>
            <Typography variant="subtitle1">12 Rd Avenue, San Antonio, TX, 13294, US</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body2" color={'text.secondary'}>
              {isPickup ? 'Pick Up' : 'Delivery'} Time
            </Typography>
            <Typography variant="subtitle1">9AM - 11 AM</Typography>
          </Stack>
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
                src={`/assets/search-chef/chefs/adam-sandler.png`}
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
              <Typography variant="body2" color={'text.secondary'} fontWeight={'600'}>
                Michael
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={3} textAlign={'center'}>
            <Typography variant="subtitle1">Status</Typography>
            <Chip label="Received" sx={{ color: '#1B6240', background: '#B6E2CC', fontWeight: '700' }} />
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
