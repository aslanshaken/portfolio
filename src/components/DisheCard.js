import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack, Avatar } from '@mui/material';
// routes
// components
import Image from './Image';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

DisheCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
};

export default function DisheCard(props) {
  const { name, cover, description } = props;

  return (
    <NextLink href={'/cities/4/1/17/'} passHref>
      <Card elevation={0} sx={{ m: 3, borderRadius: 1 }} square>
        <Box sx={{ position: 'relative' }}>
          <Image alt={name} src={cover} ratio="1/1" />
        </Box>

        <Stack direction="column" px={3} my={5} spacing={3}>
          <Typography variant={'subtitle1'}>{name}</Typography>
          <Typography
            variant={'body1'}
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              '-webkit-line-clamp': '2' /* number of lines to show */,
              '-webkit-box-orient': 'vertical',
            }}
          >
            {description}
          </Typography>

          <Stack className="feature-btn-box" direction="row" justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Avatar src={'/assets/search-chef/chefs/adam-sandler.png'} sx={{ height: 50, width: 50 }} />
              <Stack>
                <Typography variant="caption">Michael</Typography>
                <Typography variant="caption" display={{ xs: 'block', md: 'none' }}>
                  Central Asia Cuisine
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="caption" display={{ xs: 'none', md: 'block' }}>
              Central Asia Cuisine
            </Typography>
            {/* <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }}>
            <Iconify icon={'mdi:cards-heart-outline'} sx={{ width: 33, height: 33, color: 'error.main' }} />
          </IconButtonAnimate>
          <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }}>
            <Iconify
              icon={'material-symbols:shopping-bag-outline'}
              sx={{ width: 33, height: 33, color: 'text.secondary' }}
            />
          </IconButtonAnimate> */}
          </Stack>
        </Stack>
      </Card>
    </NextLink>
  );
}
