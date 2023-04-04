import PropTypes from 'prop-types';
// @mui
import { Box, Typography, Stack, colors } from '@mui/material';
// routes
// components
import Image from './Image';

// ----------------------------------------------------------------------

FoodCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  we_kc: PropTypes.string,
};

export default function FoodCard(props) {
  const { name, cover, price } = props;

  return (
    <Stack spacing={1}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          alt={name}
          src={cover}
          sx={{ borderRadius: '50%', minWidth: { lg: 130, xs: 100 }, height: { lg: 130, xs: 100 } }}
        />
      </Box>

      <Stack sx={{ textAlign: 'center', width: '100%' }}>
        <Box>
          <Typography variant="body2" fontWeight={600} color={'text.primary'}>
            {name}
          </Typography>
          <Typography color={'secondary'} variant="body2">
            {price}$
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
