import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Iconify from './Iconify';
import { Box, colors, Stack, Typography, Backdrop } from '@mui/material';

ReadMore.propTypes = {
  children: PropTypes.string,
};

export default function ReadMore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <Box position={'relative'} display={'flex'} sx={{ flexFlow: 'column', alignItems: { md: 'end' } }}>
      {isReadMore && (
        <Backdrop
          sx={(theme) => ({
            position: 'absolute',
            opacity: 0.5,
            background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.default} 100%)`,
          })}
          open
        />
      )}
      <Typography color={colors.grey[600]}>{isReadMore ? children.slice(0, 135) : children}</Typography>
      <Stack
        zIndex={10}
        direction="row"
        spacing={1}
        onClick={() => setIsReadMore(!isReadMore)}
        sx={{ cursor: 'pointer', width: 'fit-content', mt: { md: -2.8 } }}
      >
        <Typography color={colors.grey[600]}>{isReadMore ? 'Read more' : 'show less'}</Typography>
        <Iconify
          icon={'material-symbols:arrow-right-alt-rounded'}
          sx={{ width: 21, height: 21, color: 'primary.main', transform: 'rotate(315deg)' }}
        />
      </Stack>
    </Box>
  );
}
