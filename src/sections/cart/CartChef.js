import { LoadingButton } from '@mui/lab';
import { Box, Stack } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';

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

      <LoadingButton variant="outlined">View More</LoadingButton>
    </Stack>
  );
}
