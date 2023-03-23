import { Button, ButtonGroup, colors, Stack, styled, Typography } from '@mui/material';

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  border: `solid 1px`,
  borderColor: colors.grey[300],
}));

//
export default function PickDeliverSwitchCard() {
  return (
    <RootStyle>
      <ButtonGroup color="secondary">
        <Button sx={{ px: 5, fontWeight: 500 }}>{'Pickup'}</Button>
        <Button variant="contained" sx={{ px: 5, fontWeight: 500 }}>
          {'Delivery'}
        </Button>
      </ButtonGroup>
      <Typography variant={'subtitle1'} mt={3} gutterBottom>
        {'Deliver to'}
      </Typography>
      <Typography variant={'caption'} maxWidth={200}>
        {'3678 Summit Park Avenue Southfield, MI 69735, US'}
      </Typography>
    </RootStyle>
  );
}
