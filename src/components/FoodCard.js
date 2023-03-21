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
  price: PropTypes.string,
  we_kc: PropTypes.string,
};

export default function FoodCard(props) {
  const { name, cover, price } = props;

  return (
    <Box>
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
          <Typography variant="subtitle2" color={'text.primary'}>
            {name}
          </Typography>
          <Typography color={colors.grey[600]} variant="subtitle2">
            {price}$
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
