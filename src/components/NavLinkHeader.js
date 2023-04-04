import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';

NavLinkHeader.propTypes = {
  city: PropTypes.string,
  cuisine: PropTypes.string,
  chef: PropTypes.string,
};

export default function NavLinkHeader({ cuisine = '', chef = '' }) {
  const cuisineId = useSelector(CITYCUISINE_SELECTOR)?.cuisine?.id;

  return (
    <Breadcrumbs separator="->" sx={{ fontWeight: 600, py: 2 }}>
      {/* {city && (
        <Link href='#' color="inherit" onClick={() => dispatch(openDialog('choose_city_dialog'))}>
          {city}
        </Link>
      )} */}
      {cuisine && (
        <NextLink color="inherit" href={`/cities/4/${cuisineId}/`} passHref>
          <Link color="inherit">{cuisine}</Link>
        </NextLink>
      )}
      {chef && <Typography fontWeight={600}>{chef}</Typography>}
    </Breadcrumbs>
  );
}
