import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
import getAppInfo from '../utils/getAppInfo';
import { HEADER } from '../config';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, meta, gutterTop = false, ...other }, ref) => (
  <>
    <Head>
      <title>{getAppInfo('name')}</title>
      <link rel="shortcut icon" href="/assets/web-logo.png" />
      {meta}
    </Head>

    <Box
      ref={ref}
      {...(gutterTop && {
        sx: (theme) => ({
          marginTop: `${HEADER.MOBILE_HEIGHT}px`,
          [theme.breakpoints.up('md')]: {
            marginTop: `${HEADER.MAIN_DESKTOP_HEIGHT}px`,
          },
        }),
      })}
      {...other}
      width={'100%'}
    >
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  gutterTop: PropTypes.bool,
  meta: PropTypes.node,
};

export default Page;
