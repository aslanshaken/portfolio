import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
import getAppInfo from '../utils/getAppInfo';
import { HEADER } from '../config';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, gutterTop = false, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | ${getAppInfo('name')}`}</title>
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
    >
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  topGutter: PropTypes.bool,
  meta: PropTypes.node,
};

export default Page;
