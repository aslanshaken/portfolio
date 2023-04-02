import PropTypes from 'prop-types';
// @mui
import { GlobalStyles, useTheme } from '@mui/material';
//
import { ToastContainer } from 'react-toastify';

// ----------------------------------------------------------------------

function ToastifyStyles() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#__next': {
          '& .Toastify__toast-container': {
            width: 'auto',
            maxWidth: 'calc(100% - 40px)',
            zIndex: 1400,
          },
          '& .Toastify__toast': {
            width: '100%',
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[0],
            backgroundColor: theme.palette.grey[900],
            minHeight: '0 !important',
            '&.Toastify__toast--success, &.Toastify__toast--error, &.Toastify__toast--warning, &.Toastify__toast--info':
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
            [theme.breakpoints.up('md')]: {
              minWidth: 240,
            },
          },
          '& .Toastify__toast-icon': {
            marginInline: 0,
            width: 'auto',
          },
          '& .Toastify__toast-body': {
            padding: '0 !important',
            margin: '0 !important',
          },
          '& .Toastify__toast-body *': {
            padding: '0 !important',
            lineHeight: 1.5714285714285714,
            fontSize: '0.875rem',
            fontFamily: 'Public Sans,sans-serif',
            fontWeight: theme.typography.fontWeightMedium,
          },
          '& .Toastify__close-button': {
            marginLeft: theme.spacing(2),
            marginTop: theme.spacing(0.5),
            marginRight: 0,
            padding: theme.spacing(0.5),
            color: theme.palette.action.active,
            '& svg': { width: 20, height: 20 },
          },
          '& .Toastify__progress-bar': {
            height: theme.spacing(0.5),
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

ToastifyProvider.propTypes = {
  children: PropTypes.node,
};

export default function ToastifyProvider({ children }) {
  return (
    <>
      <ToastifyStyles />

      <ToastContainer
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        autoClose={5000}
        position="top-right"
        icon={false}
      />

      {children}
    </>
  );
}
