import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';

//
export default function CartChef() {

  return (
    <Stack>
      <Stack
        sx={{
          background: 'url(/assets/textures/cuisine-cart.png)',
        }}
      >
        <ProfileCover />
        <CuisineList />
      </Stack>

      <Box mt={5} />

      <NextLink href="/cities/chicago/ukrainian-cuisine/adam-sandler/checkout/" passHref>
        <LoadingButton variant="outlined">View More</LoadingButton>
      </NextLink>
    </Stack>
  );
}
