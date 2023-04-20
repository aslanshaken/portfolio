import PropTypes from 'prop-types';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

PaymentProvider.propTypes = {
  publicKey: PropTypes.string,
  clientSecret: PropTypes.string,
  children: PropTypes.node,
};

const PaymentProvider = ({ publicKey, clientSecret, children }) => (
  <Elements stripe={loadStripe(publicKey || '')} options={{ clientSecret }}>
    {children}
  </Elements>
);

export default PaymentProvider;
