import React from 'react';
import PropTypes from 'prop-types';
import { Container as MUIContainer } from '@mui/material';

Container.propTypes = {
  children: PropTypes.node,
};

export default function Container({ children }) {
  return <MUIContainer maxWidth={'lg'}>{children}</MUIContainer>;
}
