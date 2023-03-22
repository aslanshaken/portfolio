// ----------------------------------------------------------------------

export default function LoadingButton() {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          '&.MuiButton-text': {
            '& .MuiLoadingButton-startIconPendingStart': {
              marginLeft: 0,
            },
            '& .MuiLoadingButton-endIconPendingEnd': {
              marginRight: 0,
            },
          },
        },
      },
    },
  };
}
