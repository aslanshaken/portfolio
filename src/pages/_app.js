// scroll bar
import 'simplebar/src/simplebar.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

//
import '../../public/fonts/index.css';

import PropTypes from 'prop-types';
// next
import Head from 'next/head';
import App from 'next/app';
//
import { Provider as ReduxProvider } from 'react-redux';
// @mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// redux
import { store } from '../redux/store';
// theme
import ThemeProvider from '../theme';
import { AuthProvider } from '../contexts/JWTContext';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';
import DialogProvider from 'src/layouts/main/DialogProvider';

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MotionLazyContainer>
              <ThemeProvider>
                <DialogProvider>{getLayout(<Component {...pageProps} />)}</DialogProvider>
              </ThemeProvider>
            </MotionLazyContainer>
          </LocalizationProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  return {
    ...appProps,
  };
};
