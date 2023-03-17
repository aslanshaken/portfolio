// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      defaultProps: {
        // disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          background: theme.palette.gradients.primary,
        },
        containedSecondary: {
          background: theme.palette.gradients.secondary,
        },
        containedInfo: {
          background: theme.palette.gradients.info,
        },
        containedSuccess: {
          background: theme.palette.gradients.success,
        },
        containedWarning: {
          background: theme.palette.gradients.warning,
        },
        containedError: {
          background: theme.palette.gradients.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
