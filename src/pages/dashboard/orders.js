// layouts
import Layout from '../../layouts';
// components
import { Autocomplete, Box, Stack, Table, TableBody, TableContainer, TextField } from '@mui/material';
import Page from '../../components/Page';
import Scrollbar from 'src/components/Scrollbar';
import { TableEmptyRows, TableHeadCustom, TableNoData } from 'src/components/table';
import OrderTableRow from 'src/sections/@dashboard/orders/OrderTableRow';
import { useEffect, useState } from 'react';
import useTable, { emptyRows } from 'src/hooks/useTable';
import Pagination from 'src/components/Pagination';
import { useDispatch } from 'src/redux/store';
import { FOOD_SELECTOR, getOrders } from 'src/redux/slices/food';
import { useSelector } from 'react-redux';
import LoadingScreen from 'src/components/LoadingScreen';
import { parse } from 'date-fns';
// sections

const TABLE_HEAD = [
  { id: 'order_number', label: 'Order', align: 'left', width: 180 },
  { id: 'order_date', label: 'Order Date', align: 'center' },
  { id: 'chef', label: 'Chef', align: 'center' },
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const { orders: allOrders, loading } = useSelector(FOOD_SELECTOR);

  const [orders, setOrders] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [sortItem, setSortItem] = useState();

  useEffect(() => {
    if(sortItem){
      let arrayForSort = [...sort_by_type(allOrders)]
      const filteredOrders = arrayForSort.sort((a, b) => {
        if (a?.status === sortItem && b?.status !== sortItem) {
          return -1;
        } else if (a?.status !== sortItem && b?.status === sortItem) {
          return 1;
        } else {
          return 0;
        }
      })
      setOrders(filteredOrders);
    }
    else{
      setOrders(sort_by_type(allOrders));
      setCurrentPage(1)
    }
  }, [allOrders, sortItem]);

  const isNotFound = !orders.length;

  const sort_type = [
    { name: 'received' },
    { name: 'initiated' },
    { name: 'picked up' },
    { name: 'delivered' },
    { name: 'working on' },
  ];

  const sort_by_type = (orders) => {
    var arrayForSort = [...orders];
    const filteredOrders = arrayForSort.sort((a, b) => {
      const statusA = a?.status;
      const statusB = b?.status;
      const indexA = sort_type.findIndex(item => item.name === statusA);
      const indexB = sort_type.findIndex(item => item.name === statusB);
      return indexA - indexB;
    });
    return filteredOrders
  } 

  return loading ? (
    <LoadingScreen inner />
  ) : (
    <Page title="Orders : Dashboard">
      <Stack direction={'row'} spacing={2} maxWidth={300} sx={{ ml: 'auto', mb: 3 }}>
        <Autocomplete
          fullWidth
          disablePortal
          autoHighlight
          options={sort_type}
          onChange={(e) => setSortItem(e.target.innerText)}
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
      </Stack>
      <Scrollbar>
        <TableContainer sx={{ position: 'relative' }}>
          <Table size={'small'}>
            <TableHeadCustom
              sx={{ display: { xs: 'none', sm: 'contents' } }}
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={orders?.length}
            />

            <TableBody>
              {orders?.slice((currentPage - 1) * 10, currentPage * 10).map((row, _i) => (
                <OrderTableRow headLabel={TABLE_HEAD} key={_i} row={row} />
              ))}

              <TableEmptyRows emptyRows={emptyRows(page, rowsPerPage, orders?.length)} />

              <TableNoData isNotFound={isNotFound} />
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Box mt={10} />

      {orders?.length > 10 && <Pagination count={Math.ceil(orders?.length / 10)} setCurrentPage={setCurrentPage} />}
    </Page>
  );
}
