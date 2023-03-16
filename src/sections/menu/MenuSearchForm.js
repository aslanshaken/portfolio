import styled from '@emotion/styled';
import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { DropDocumentIcon } from 'src/assets';
import Iconify from 'src/components/Iconify';

const SearchFieldStyle = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    background: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    '& *': {
      border: 0,
    },
  },
}));

export default function MenuSearchForm() {
  return (
    <>
      <Stack direction="row" spacing={2} className="search_bar">
        <Typography variant="h4" color={'text.primary'}>
          Search
        </Typography>
        <DropDocumentIcon className="defaultIconSize" />
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
    </>
  );
}
