import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openDialog } from 'src/redux/slices/dialog';

NavLinkHeader.propTypes = {
  city: PropTypes.string,
  cuisine: PropTypes.string,
  chef: PropTypes.string,
};

export default function NavLinkHeader({ city = '', cuisine = '', chef = '' }) {
  const dispatch = useDispatch();

  return (
    <Breadcrumbs separator="->" sx={{ fontWeight: 600, py: 2 }}>
      {city && (
        <Link href='#' color="inherit" onClick={() => dispatch(openDialog('choose_city_dialog'))}>
          {city}
        </Link>
      )}
      {cuisine && (
        <NextLink color="inherit" href="/cities/chicago/ukrainian-cuisine/" passHref>
          <Link color="inherit">{cuisine}</Link>
        </NextLink>
      )}
      {chef && <Typography fontWeight={600}>{chef}</Typography>}
    </Breadcrumbs>
  );
}
