import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem, Box, Link, Card, Stack } from '@mui/material';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import { TableMoreMenu } from '../../../components/table';
import Image from 'src/components/Image';
import { PATH_PAGE } from 'src/routes/paths';
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

export const STATUS_COLOR = {
  initiated: 'primary',
  canceled: 'error',
  delivered: 'success',
  received: 'success',
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

  const { order_num, order_date, items, id, sub_total, status, chef } = row;

  const [orderId, setOrderId] = useState();

  useEffect(() => {
    setOrderId(id);
  }, [id]);

  // const cuisineNames = [...new Set(items.map((item) => item?.cusine?.name))];

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const isDesktop = useResponsive('up', 'sm');

  return isDesktop ? (
    <TableRow hover>
      <TableCell align="left" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
        {status == 'initiated' ? (
          <Typography variant="body2">#{order_num}</Typography>
        ) : (
          <NextLink href={PATH_PAGE.orderConfirm.orders({ orderId })} passHref>
            <Link>#{order_num}</Link>
          </NextLink>
        )}
      </TableCell>

      <TableCell align="center" sx={{ fontWeight: 700 }}>
        {order_date}
        {/* <Box display={'flex'} justifyContent={'center'}>
          {items?.map((item) => (
            <Image key={item?.id} alt="Order item image" src={item?.image} sx={{ width: 50, height: 50 }} />
          ))}
        </Box> */}
      </TableCell>

      <TableCell align="center">
        {chef?.first_name} {chef?.last_name}
      </TableCell>

      {/* <TableCell align="center">{cuisineNames?.join(' / ')}</TableCell> */}

      <TableCell align="center" sx={{ color: '#8CCC67' }}>
        ${sub_total}
      </TableCell>

      <TableCell align="center">
        {status && (
          <Label variant={'ghost'} color={STATUS_COLOR[status]} sx={{ textTransform: 'capitalize' }}>
            {status}
          </Label>
        )}
      </TableCell>
    </TableRow>
  ) : (
    <NextLink href={PATH_PAGE.orderConfirm.orders({ orderId })} passHref>
      <Link>
        <Card sx={{ my: 1, px: 6, py: 2 }}>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Typography variant='subtitle1' color='grey'>Order Number :</Typography>
            <Typography>#{order_num}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Typography variant='subtitle1' color='grey'>Order Date :</Typography>
            <Typography>{order_date}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Typography variant='subtitle1' color='grey'>Chef :</Typography>
            <Typography>
              {chef?.first_name} {chef?.last_name}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Typography variant='subtitle1' color='grey'>Price :</Typography>
            <Typography>${sub_total}</Typography>
          </Stack>
          <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
            <Typography variant='subtitle1' color='grey'>Status :</Typography>
            {status && (
              <Label variant={'ghost'} color={STATUS_COLOR[status]} sx={{ textTransform: 'capitalize' }}>
                {status}
              </Label>
            )}
          </Stack>
        </Card>
      </Link>
    </NextLink>
  );
}
