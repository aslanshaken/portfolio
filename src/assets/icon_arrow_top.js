import { memo } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

function ArrowTopIcon(props) {
  return (
    <Box {...props}>
      <svg width="24" height="56" viewBox="0 0 24 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5 54C10.5 54.8284 11.1716 55.5 12 55.5C12.8284 55.5 13.5 54.8284 13.5 54L10.5 54ZM13.0607 0.939343C12.4749 0.353554 11.5251 0.353554 10.9393 0.939342L1.3934 10.4853C0.807613 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939343ZM13.5 54L13.5 2L10.5 2L10.5 54L13.5 54Z"
          fill="url(#paint0_linear_14_3119)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_3119"
            x1="12"
            y1="54"
            x2="29.8239"
            y2="47.3942"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5D37A" />
            <stop offset="1" stopColor="#CFAA4C" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}

export default memo(ArrowTopIcon);
