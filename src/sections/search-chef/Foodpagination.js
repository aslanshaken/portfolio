
import { Pagination, PaginationItem } from "@mui/material";

export default function Foodpagination() {
  return (
    <Pagination
      sx={{
        '& .MuiPaginationItem-root': {
          '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: '#fff',
          },
          '& .MuiPaginationItem-icon': {
            display: 'none',
          },
          '&.MuiPaginationItem-previousNext[aria-label="next"]::before': {
            content: "'Next'",
          },
          '&.MuiPaginationItem-previousNext[aria-label="previous"]::before': {
            content: "'Previous'",
          },
        },
        display: 'flex',
        justifyContent: 'end',
      }}
      count={3}
      variant="outlined"
      shape="rounded"
      color="primary"
      renderItem={(item) => <PaginationItem {...item} variant="text" aria-label={item.type === 'next' ? 'next' : 'previous'} />}
    />
  );
}
