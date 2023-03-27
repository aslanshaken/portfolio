import styled from '@emotion/styled';
import { Box, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';

const SearchFieldStyle = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    background: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 2,
    '& *': {
      border: 0,
    },
  },
}));

export default function MenuSearchForm(props) {
  return (
    <Box {...props}>
      <Stack direction="row" spacing={2} className="search_bar">
        <Typography variant="h4" color={'text.primary'}>
          Search
        </Typography>
      </Stack>
      <SearchFieldStyle>
        <TextField
          fullWidth
          label="Dish"
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon={'mingcute:search-line'} className="defaultIconSize" />
              </InputAdornment>
            ),
          }}
        />
      </SearchFieldStyle>
    </Box>
  );
}
