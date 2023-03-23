import { memo } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

function ShoppingCartSmallIcon({ ...other }) {
  return (
    <Box {...other}>
      <svg width="100%" height="100%" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5909 3H2L3.36364 9H12.2273M12.2273 9L14.2727 1H17M12.2273 9L11.5455 11.6667H2.68182M4.04545 15C4.22628 15 4.39971 14.9298 4.52757 14.8047C4.65544 14.6797 4.72727 14.5101 4.72727 14.3333C4.72727 14.1565 4.65544 13.987 4.52757 13.8619C4.39971 13.7369 4.22628 13.6667 4.04545 13.6667C3.86463 13.6667 3.6912 13.7369 3.56334 13.8619C3.43547 13.987 3.36364 14.1565 3.36364 14.3333C3.36364 14.5101 3.43547 14.6797 3.56334 14.8047C3.6912 14.9298 3.86463 15 4.04545 15ZM10.8636 15C11.0445 15 11.2179 14.9298 11.3458 14.8047C11.4736 14.6797 11.5455 14.5101 11.5455 14.3333C11.5455 14.1565 11.4736 13.987 11.3458 13.8619C11.2179 13.7369 11.0445 13.6667 10.8636 13.6667C10.6828 13.6667 10.5094 13.7369 10.3815 13.8619C10.2537 13.987 10.1818 14.1565 10.1818 14.3333C10.1818 14.5101 10.2537 14.6797 10.3815 14.8047C10.5094 14.9298 10.6828 15 10.8636 15Z"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </Box>
  );
}

export default memo(ShoppingCartSmallIcon);
