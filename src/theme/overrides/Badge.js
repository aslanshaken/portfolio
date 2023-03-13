// ----------------------------------------------------------------------

export default function Badge(theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: '5px',
        },
        dot: {
          width: 10,
          height: 10,
          borderRadius: '50%',
        },
        colorError: {
          boxShadow: theme.customShadows.error
        }
      },
    },
  };
}
