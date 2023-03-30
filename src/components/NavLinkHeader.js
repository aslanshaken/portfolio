import PropTypes from 'prop-types';
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
        <Link color="inherit" href="#" onClick={() => dispatch(openDialog('choose_city_dialog'))}>
          {city}
        </Link>
      )}
      {cuisine && (
        <Link color="inherit" href="#" onClick={() => dispatch(openDialog('choose_cuisine_dialog'))}>
          {cuisine}
        </Link>
      )}
      {chef && <Typography fontWeight={600}>{chef}</Typography>}
    </Breadcrumbs>
  );
}
