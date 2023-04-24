import PropTypes from 'prop-types';
// @mui
import { Box, Typography, Stack } from '@mui/material';
// routes
// components
import Image from './Image';

// ----------------------------------------------------------------------

FoodCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  measurement: PropTypes.string,
  we_kc: PropTypes.string,
  quantity: PropTypes.number,
};

export default function FoodCard(props) {
  const { name, cover, price, quantity, measurement } = props;

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
          sx={{ borderRadius: '50%', width: { lg: 130, xs: 100 }, height: { lg: 130, xs: 100 } }}
        />
      </Box>

      <Stack sx={{ textAlign: 'center', width: '100%' }}>
        <Box>
          <Typography variant="body2" fontWeight={400} color={'text.primary'}>
            {name}
          </Typography>
          <Typography color={'secondary'} variant="body2" fontWeight={600}>
            {`$${price} /${quantity} ${measurement || ''}`}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
