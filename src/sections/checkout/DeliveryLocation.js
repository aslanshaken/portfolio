import { Box, Card, Stack, styled, Typography, useTheme } from '@mui/material';
import { IconButtonAnimate } from 'src/components/animate';
import BackgroundIcon from 'src/components/BackgroundIcon';
import CardHeader from 'src/components/card/CardHeader';
import Image from 'src/components/Image';
import cssStyles from 'src/utils/cssStyles';

//

const RootStyle = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  border: `solid 1px`,
  borderColor: theme.palette.grey[300],
  overflow: 'hidden',
  '&:before': {
    ...cssStyles().bgGradient({ direction: 'right', startColor: 'white', endColor: 'transparent' }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
}));

const InfoStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  position: 'relative',
  minHeight: 100,
  justifyContent: 'space-between',
}));

export default function DeliveryLocation() {
  const theme = useTheme();

  return (
    <RootStyle>
      <InfoStyle>
        <CardHeader icon="material-symbols:location-on-outline" title={'Delivery Location'} hideDivider />

        <Stack
          direction={'row'}
          px={3}
          py={2}
          spacing={2}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
          position={'relative'}
        >
          <Stack>
            <Box flexGrow={1} minHeight={100} />
            <Typography variant="subtitle2" color={'black'} gutterBottom>
              {'Home'}
            </Typography>
            <Typography variant={'caption'} maxWidth={200} color={'text.secondary'}>
              {'3678 Summit Park Avenue Southfield, MI 69735, US'}
            </Typography>
          </Stack>

          <IconButtonAnimate sx={{ p: 0, position: 'absolute', bottom: '20%', right: '30%' }}>
            <BackgroundIcon
              icon={'material-symbols:location-on-outline'}
              sx={{ width: 40, height: 40, background: theme.palette.secondary.lighter }}
            />
          </IconButtonAnimate>
        </Stack>
      </InfoStyle>

      <Image
        alt="Delivery Card Cover"
        src={'/assets/cart/map.png'}
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </RootStyle>
  );
}
