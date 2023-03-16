import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack } from '@mui/material';
// routes
// components
import Image from './Image';
import Iconify from './Iconify';
import { IconButtonAnimate } from './animate';

// ----------------------------------------------------------------------

DisheCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
};

export default function DisheCard(props) {
  const { name, cover, description } = props;

  return (
    <Card elevation={0} sx={{ m: 5, borderRadius: 1 }} square>
      <Box sx={{ position: 'relative' }}>
        <Image alt={name} src={cover} ratio="1/1" />
      </Box>

      <Stack direction="column" px={3} my={5} spacing={3}>
        <Typography variant={'subtitle1'}>{name}</Typography>
        <Typography variant={'body1'}>{description}</Typography>

        <Stack
          className="feature-btn-box"
          direction="row"
          justifyContent={'space-between'}
          sx={{
            display: 'none',
          }}
        >
          <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }}>
            <Iconify icon={'mdi:cards-heart-outline'} sx={{ width: 33, height: 33, color: 'error.main' }} />
          </IconButtonAnimate>
          <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }}>
            <Iconify
              icon={'material-symbols:shopping-bag-outline'}
              sx={{ width: 33, height: 33, color: 'text.secondary' }}
            />
          </IconButtonAnimate>
        </Stack>
      </Stack>
    </Card>
  );
}
