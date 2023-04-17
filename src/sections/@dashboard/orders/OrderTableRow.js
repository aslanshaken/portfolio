import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem, Box } from '@mui/material';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import { TableMoreMenu } from '../../../components/table';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const STATUS_COLOR = {
  'In Progress': 'primary',
  Canceled: 'error',
  Delivered: 'success',
};

OrderTableRow.propTypes = {
  row: PropTypes.object,
  headLabel: PropTypes.array,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function OrderTableRow({ row, selected, headLabel, onEditRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();

  const { order_number, items, chef, cuisine, sub_total, status } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover>
      <TableCell align="left" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
        {order_number}
      </TableCell>

      <TableCell align="center" sx={{ fontWeight: 700 }}>
        {items?.length}
        {/* <Box display={'flex'} justifyContent={'center'}>
          {items?.map((item) => (
            <Image key={item?.id} alt="Order item image" src={item?.image} sx={{ width: 50, height: 50 }} />
          ))}
        </Box> */}
      </TableCell>

      <TableCell align="center">{chef}</TableCell>

      <TableCell align="center">{cuisine}</TableCell>

      <TableCell align="center" sx={{ color: '#8CCC67' }}>
        ${sub_total}
      </TableCell>

      <TableCell align="center">
        <Label variant={'ghost'} color={STATUS_COLOR[status]} sx={{ textTransform: 'capitalize' }}>
          {status}
        </Label>
      </TableCell>
    </TableRow>
  );
}
