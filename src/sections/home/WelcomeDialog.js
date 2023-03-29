import { Dialog, IconButton, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Iconify from 'src/components/Iconify';

WelcomeDialog.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default function WelcomeDialog({ isOpen, setIsOpen }) {
  return (
    <Dialog maxWidth={'sm'} fullWidth open={isOpen}>
      <IconButton
        onClick={() => {
          setIsOpen(false);
        }}
        width={'fit-content'}
        sx={{ position: 'absolute', right: '0' }}
      >
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack textAlign={'center'} p={6} color={'black'}>
        <Typography variant="h3" mt={8}>
          Welcome to Food App
        </Typography>
        <Typography variant="h4" fontWeight={'normal'} mt={4}>
          Free Delivery
        </Typography>
        <Typography variant="h4" fontWeight={'normal'}>
          -
        </Typography>
        <Typography variant="h4" fontWeight={'normal'}>
          No Service Fee
        </Typography>
        <Typography mt={8}>No code required. Limited time offer. Ends April 30, 2023 </Typography>
      </Stack>
    </Dialog>
  );
}
