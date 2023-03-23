// layouts
import Layout from '../../layouts';
// components
import { Autocomplete, Box, Stack, Table, TableBody, TableContainer, TextField } from '@mui/material';
import Page from '../../components/Page';
import Scrollbar from 'src/components/Scrollbar';
import { TableEmptyRows, TableHeadCustom, TableNoData } from 'src/components/table';
import OrderTableRow from 'src/sections/@dashboard/orders/OrderTableRow';
import { useState } from 'react';
import useTable, { emptyRows } from 'src/hooks/useTable';
import Pagination from 'src/components/Pagination';
// sections

const datas = [
  {
    _id: 1,
    order_number: '#16516165',
    items_iamge: '/assets/dashboard/order/item1.png',
    chef: 'Michael Jackson',
    cuisine: 'Japan cuisine',
    price: '$23.98',
    status: 'In Progress',
  },
  {
    _id: 2,
    order_number: '#16516165',
    items_iamge: '/assets/dashboard/order/item1.png',
    chef: 'Michael Jackson',
    cuisine: 'Japan cuisine',
    price: '$23.98',
    status: 'Canceled',
  },
  {
    _id: 3,
    order_number: '#16516165',
    items_iamge: '/assets/dashboard/order/item1.png',
    chef: 'Michael Jackson',
    cuisine: 'Japan cuisine',
    price: '$23.98',
    status: 'Delivered',
  },
  {
    _id: 4,
    order_number: '#16516165',
    items_iamge: '/assets/dashboard/order/item1.png',
    chef: 'Michael Jackson',
    cuisine: 'Japan cuisine',
    price: '$23.98',
    status: 'Canceled',
  },
  {
    _id: 5,
    order_number: '#16516165',
    items_iamge: '/assets/dashboard/order/item1.png',
    chef: 'Michael Jackson',
    cuisine: 'Japan cuisine',
    price: '$23.98',
    status: 'Canceled',
  },
];

const TABLE_HEAD = [
  { id: 'order_number', label: 'Order Number', align: 'left', width: 180 },
  { id: 'items_iamge', label: 'Items', align: 'center' },
  { id: 'chef', label: 'Chef', align: 'center' },
  { id: 'cuisine', label: 'Cuisine', align: 'center' },
  { id: 'price', label: 'Price', align: 'center' },
  { id: 'status', label: 'Status', align: 'center' },
];

// ----------------------------------------------------------------------

OrderPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function OrderPage() {
  const { page, order, orderBy, rowsPerPage } = useTable({
    defaultOrderBy: 'order_number',
  });

  const [tableData, setTableData] = useState(datas);

  const dataFiltered = tableData;

  const isNotFound = !dataFiltered.length;

  const sort_type = [{ name: 'sort by Popularity' }, { name: 'sort by New' }, { name: 'sort by Oldest' }];
  const order_date = [{ name: 'Last week' }, { name: 'Last week' }, { name: 'Last week' }];

  return (
    <Page title="Orders : Dashboard">
      <Stack direction={'row'} spacing={2} maxWidth={500} sx={{ ml: 'auto', mb: 3 }}>
        <Autocomplete
          fullWidth
          disablePortal
          autoHighlight
          options={sort_type}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              size="small"
              label="Sort by"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
        <Autocomplete
          fullWidth
          disablePortal
          autoHighlight
          options={order_date}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              size="small"
              label="Last week"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
      </Stack>
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
          <Table size={'small'}>
            <TableHeadCustom order={order} orderBy={orderBy} headLabel={TABLE_HEAD} rowCount={tableData.length} />

            <TableBody>
              {dataFiltered.map((row) => (
                <OrderTableRow headLabel={TABLE_HEAD} key={row._id} row={row} />
              ))}

              <TableEmptyRows emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

              <TableNoData isNotFound={isNotFound} />
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Box mt={10} />

      <Pagination />
    </Page>
  );
}