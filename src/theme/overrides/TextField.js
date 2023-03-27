// ----------------------------------------------------------------------

export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            borderRadius: theme.shape.borderRadius,
          },
          '& .MuiFilledInput-root::before, & .MuiFilledInput-root::after': {
            display: 'none',
          },
          '& label': {
            color: theme.palette.grey[500]
          },
        },
      },
    },
  };
}
