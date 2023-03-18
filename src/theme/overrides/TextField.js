// ----------------------------------------------------------------------

export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            borderRadius: theme.spacing(1),
          },
          '& .MuiFilledInput-root::before, & .MuiFilledInput-root::after': {
            display: 'none',
          },
          '& label': {
            color: theme.palette.grey[300]
          },
        },
      },
    },
  };
}
