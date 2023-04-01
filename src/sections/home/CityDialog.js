import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { closeDialog, openDialog } from 'src/redux/slices/dialog';
import { useDispatch } from 'src/redux/store';

const cities = [
  { id: 'austin', name: 'Austin' },
  { id: 'new_york', name: 'New York' },
  { id: 'miami', name: 'Miami' },
];

export default function CityDialog({ isOpen }) {
  const dispatch = useDispatch();

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen}>
      <IconButton
        onClick={() => {
          dispatch(closeDialog());
          dispatch(openDialog('choose_cuisine_dialog'));
        }}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={6} color={'black'}>
        <Typography variant="h3">Select your city</Typography>
        <Typography mt={2} variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Stack spacing={2} mt={8} width={'fit-content'} mx={'auto'}>
          {cities.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                dispatch(closeDialog());
                dispatch(openDialog('choose_cuisine_dialog'));
              }}
              sx={{ width: '100%', px: 5 }}
            >
              <Typography variant="h4" fontWeight={'500'} color={'secondary'}>
                {item.name}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Stack>
    </Dialog>
  );
}
