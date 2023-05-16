import { Pagination as MUIpagination, PaginationItem } from '@mui/material';
import { PropTypes } from 'prop-types';

Pagination.propTypes = {
  count: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default function Pagination({ count, setCurrentPage }) {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <MUIpagination
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
        marginBottom: 4,
        marginTop: 4,
      }}
      onChange={(event, page) => {
        setCurrentPage(page);
        scrollToTop();
      }}
      count={count}
      variant="outlined"
      shape="rounded"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} variant="text" aria-label={item.type === 'next' ? 'next' : 'previous'} />
      )}
    />
  );
}
