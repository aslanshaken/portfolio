import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { openDialog } from 'src/redux/slices/dialog';
import { useRouter } from 'next/router';

NavLinkHeader.propTypes = {
  city: PropTypes.string,
  cuisine: PropTypes.string,
  chef: PropTypes.string,
};

export default function NavLinkHeader({ cuisine = '', chef = '' }) {
  const cuisineId = useSelector(CITYCUISINE_SELECTOR)?.cuisine?.id;
  const dispatch = useDispatch();
  const router = useRouter();
  const { chefId } = router.query;

  return (
    <Breadcrumbs separator="->" sx={{ fontWeight: 600, mt: 5, py: 3 }}>
      {/* {city && (
        <Link href='#' color="inherit" onClick={() => dispatch(openDialog('choose_city_dialog'))}>
          {city}
        </Link>
      )} */}
      {cuisine && (
        <NextLink color="inherit" href={`/cities/4/${cuisineId}/`} passHref>
          <Link
            onClick={() => {
              if (!chefId) dispatch(openDialog('choose_cuisine_dialog'));
            }}
            color="inherit"
          >
            <Typography variant='h5' >{cuisine}</Typography>
          </Link>
        </NextLink>
      )}
      {chef && <Typography fontWeight={600}>{chef}</Typography>}
    </Breadcrumbs>
  );
}
