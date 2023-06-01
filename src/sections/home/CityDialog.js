import { Button, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Iconify from 'src/components/Iconify';
import { CITYCUISINE_SELECTOR, getAllChefs, getCities, getCuisines } from 'src/redux/slices/city';
import { closeDialog, openDialog } from 'src/redux/slices/dialog';
import { useDispatch, useSelector } from 'src/redux/store';

export default function CityDialog({ isOpen }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cities } = useSelector(CITYCUISINE_SELECTOR);
  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen} onClose={() => dispatch(closeDialog())}>
      <IconButton
        onClick={() => {
          dispatch(closeDialog());
        }}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={6} color={'black'}>
        <Typography variant="h3">Select a city</Typography>
        <Typography mt={2} variant={'body2'}>
          Explore our selection of cities, each offering a unique culinary experience that caters to every taste
        </Typography>
        <Stack spacing={2} mt={8}>
          {cities.map((item) => (
            <Button
              key={item.id}
              onClick={async () => {
                const cuisineId = await dispatch(getCuisines(item.id));
                await router.push(`/cities/${item.id}/7/`);
                dispatch(closeDialog());
                // dispatch(openDialog('choose_cuisine_dialog'));
              }}
              sx={{ width: 'fit-content'}}
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
