import PropTypes from 'prop-types';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react';
import Iconify from './Iconify';

SearchInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default function SearchInput({ icon = '', placeholder = '', buttonLabel = 'Search' }) {
  return (
    <Stack width={'100%'} display={'flex'} direction={'column'} justifyContent={'center'}>
      {/* <TextField
        size="medium"
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        InputProps={{
          sx: (theme) => ({
            background: 'white',
            borderRadius: { xs: 1, md: theme.shape.borderRadius },
            borderTopRightRadius: { md: 100 },
            borderBottomRightRadius: { md: 100 },
            paddingRight: 0,
          }),
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon={icon} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 100,
                  px: 6,
                  minWidth: 230,
                  height: 56
                }}
              >
                {buttonLabel}
              </Button>
            </InputAdornment>
          ),
        }}
      /> */}
      <Button
        variant="contained"
        sx={{
          m: 'auto',
          // mt: 6,
          borderRadius: 100,
          px: 6,
          height:56,
          minWidth: 230,
          // display: { xs: 'flex', md: 'none' },
        }}
      >
        {buttonLabel}
      </Button>
    </Stack>
  );
}
