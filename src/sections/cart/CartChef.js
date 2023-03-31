import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';

//
export default function CartChef() {

  return (
    <Stack>
      <ProfileCover />
      <CuisineList />

      <Box mt={5} />

      <Stack px={{sm:8}}>
        <NextLink href="/cities/chicago/ukrainian-cuisine/adam-sandler/checkout/" passHref>
          <LoadingButton size="large" variant="outlined" sx={{ color: 'black' }}>
            Checkout (10)
          </LoadingButton>
        </NextLink>
      </Stack>
    </Stack>
  );
}
