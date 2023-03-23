import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Pagination(theme) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
          '&.Mui-selected': {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
        textPrimary: {
          '&.Mui-selected': {
            color: theme.palette.primary.main,
            background: theme.palette.gradients.primary,
            '&:hover, &.Mui-focusVisible': {
              backgroundColor: `${alpha(theme.palette.primary.main, 0.24)} !important`,
            },
          },
        },
        outlined: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
          },
        },
      },
    },
  };
}
