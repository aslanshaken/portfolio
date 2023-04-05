import { LoadingButton } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

//
export default function CartChef() {
  const {
    checkout: { cart },
  } = useSelector(FOOD_SELECTOR);

  return (
    <Stack>
      {cart.length == 0 ? (
        <Typography variant="h3">Cart is empty.</Typography>
      ) : (
        <>
          <ProfileCover />
          <CuisineList />

          <Box mt={5} />

          <Stack px={{ sm: 8 }}>
            <NextLink href="/cities/4/ukrainian-cuisine/adam-sandler/checkout/" passHref>
              <LoadingButton size="large" variant="outlined" sx={{ color: 'black' }}>
                Checkout (10)
              </LoadingButton>
            </NextLink>
          </Stack>
        </>
      )}
    </Stack>
  );
}
