import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// @mui
import { Box, Card, Typography, Stack, Avatar, Backdrop } from '@mui/material';
// routes
// components
import Image from './Image';
import NextLink from 'next/link';

// ----------------------------------------------------------------------

DisheCard.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------

export default function DisheCard({ data = {} }) {
  return (
    <>
      {data?.chef?.can_sell && (
        <NextLink href={`/cities/${data?.chef?.city_id}/${data?.cuisine_id}/${data?.chef?.id}`} passHref>
          <Card elevation={0} sx={{ m: 3, borderRadius: 1 }} square>
            <Box sx={{ position: 'relative' }}>
              <Image alt={data?.name} src={data?.image_url} ratio="1/1" minHeight="100%" />
            </Box>

            <Stack direction="column" px={3} my={5} spacing={3}>
              <Typography variant={'subtitle1'}>{data?.name}</Typography>

              <Typography
                variant="subtitle1"
                display={{
                  xs: 'none',
                  md: 'block',
                }}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  minHeight: '50px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2' /* number of lines to show */,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {data?.description}
              </Typography>

              <Stack className="feature-btn-box" direction="row" justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                  <Avatar src={data?.chef?.image_url} sx={{ height: 50, width: 50 }} />
                  <Stack>
                    <Typography variant="caption">
                      {data?.chef?.first_name} {data?.chef?.last_name}
                    </Typography>
                    <Typography variant="caption" display={{ xs: 'block', md: 'none' }}>
                      {data?.title}
                    </Typography>
                  </Stack>
                </Stack>
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
      )}
    </>
  );
}
