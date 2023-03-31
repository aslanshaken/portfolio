import { Button, Dialog, IconButton, Input, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import Iconify from 'src/components/Iconify';
import { closeDialog, openDialog } from 'src/redux/slices/dialog';

export default function ComingDialog({ isOpen }) {
  const dispatch = useDispatch();

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen}>
      <IconButton
        onClick={() => {
          dispatch(closeDialog());
          dispatch(openDialog('coming_dialog'));
        }}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={6} color={'black'}>
        <Typography variant="h3">Coming soon</Typography>
        <Typography variant="subtitle1" mt={2}>
          Get notified about our launch in your neighborhood!
        </Typography>
        <Stack mt={4} spacing={2}>
          <Typography variant="subtitle1" mt={2}>
            E-mail
          </Typography>
          <Input placeholder="Please provide your email address" />
        </Stack>
        <Stack mt={3} spacing={2}>
          <Typography variant="subtitle1" mt={2}>
            Postal Code
          </Typography>
          <Input placeholder="ex 78717" />
        </Stack>
        <Button
          onClick={() => {
            dispatch(closeDialog());
            dispatch(openDialog('choose_city_dialog'));
          }}
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ px: 6, mt: 2, width: 'fit-content' }}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
}
