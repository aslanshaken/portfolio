import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack, colors } from '@mui/material';
// routes
// components
import Image from './Image';
import Iconify from './Iconify';
import { IconButtonAnimate } from './animate';
import GradientText from './GradientText';

// ----------------------------------------------------------------------

FoodCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.string,
  we_kc: PropTypes.string,
};

export default function FoodCard(props) {
  const { name, cover, price, we_kc } = props;

  return (
    <Card
      elevation={0}
      sx={{
        ml: { md: 5, sm: 1 },
        mr: { md: 0, sm: 1 },
        mb: 5,
        borderRadius: 1,
      }}
      square
    >
      <Box
        sx={{
          height: '198px',
          width: '198px',
          paddingTop: '1rem',
          margin: 'auto',
        }}
      >
        <Image alt={name} src={cover} sx={{ borderRadius: '50%' }} />
      </Box>

      <Stack
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ paddingTop: '2rem', paddingBottom: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}
      >
        <Box>
          <Typography variant="subtitle1" color={'text.primary'}>
            {name}
          </Typography>
          <GradientText color="primary" variant="subtitle1">
            ${price}
          </GradientText>
          
          <Typography variant="body1" color={colors.grey[400]} letterSpacing={1.5}>
            {we_kc}
          </Typography>
        </Box>
        <Box>
          <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }}>
            <Iconify icon={'ic:outline-plus'} sx={{ width: 33, height: 33, color: 'text.secondary' }} />
          </IconButtonAnimate>
        </Box>
      </Stack>
    </Card>
  );
}
