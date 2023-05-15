import { useCallback, useEffect, useState } from 'react';
//
import PropTypes from 'prop-types';
// @mui
import { Box, Button, ButtonGroup, Card, colors, List, ListItem, Stack, styled, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Iconify from 'src/components/Iconify';
import Image from 'src/components/Image';
import { useDispatch, useSelector } from 'src/redux/store';
import { deleteCart, FOOD_SELECTOR, getOrderDetail, updateCart, updateFoodCart } from 'src/redux/slices/food';
import useNotify from 'src/hooks/useNotify';
import GradientText from 'src/components/GradientText';
import { useRouter } from 'next/router';
import { LoadingButton } from '@mui/lab';

//
export default function CartListCard() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart, orderId, orderDetail } = checkout;

  const cartArr = cart?.reduce((acc, curr) => {
    // Find the object in acc array with same id and name
    const foundObj = acc.find((obj) => obj.id === curr.id);

    // If object is present increment the count else add the current object into accumulator array
    if (foundObj) {
      foundObj.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }

    return acc;
  }, []);

  return (
    <Card>
      <CardHeader
        icon={<ShoppingCartSmallIcon sx={{ width: 12, height: 12, margin: 'auto', marginBottom: 1.4 }} />}
        title={'Items in your cart'}
      />

      <Box px={3} py={3}>
        {orderDetail?.items?.length == 0 ? (
          <Typography variant="body2">Cart is empty.</Typography>
        ) : (
          <List disablePadding>
            {[...(orderDetail?.items || [])]
              ?.sort((a, b) => a.id - b.id)
              .map((data, _i) => (
                <ListItem key={'cart-cousine-' + _i} disableGutters>
                  <CuisineCard data={data} orderId={orderId} />
                </ListItem>
              ))}
          </List>
        )}
      </Box>
    </Card>
  );
}

//
CuisineCard.propTypes = {
  data: PropTypes.object,
  orderId: PropTypes.number,
};

function CuisineCard({ data = {}, orderId }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { successAlert, errorAlert } = useNotify();
  let { count, ...food } = data;
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { orderDetail } = checkout ?? {};

  const handleClickAddCart = useCallback(
    async (type) => {
      try {
        setIsLoading(true);
        if (type === '+') {
          const response = await dispatch(updateCart('add', orderId, data.id));
          // successAlert(response.data.success);
        } else {
          const response = await dispatch(updateCart('remove', orderId, data.id));
          // successAlert(response.data.success);
        }
        await dispatch(getOrderDetail(orderId));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        errorAlert(error.message);
      }
    },
    [food]
  );

  const deleteItem = async (foodId) => {
    try {
      setLoading(true);
      const response = await dispatch(deleteCart(orderId, foodId));
      dispatch(getOrderDetail(orderId));
      // successAlert(response.data.success);
      setLoading(false);
      if (orderDetail?.items?.length == 1) {
        dispatch(updateFoodCart({ actionType: 'clear' }));
        setTimeout(() => {
          router.push('/');
        }, 500);
      }
    } catch (error) {
      setLoading(false);
      errorAlert(error.message);
    }
  };

  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={{ xs: 2, md: 6 }} width={1}>
      <Image alt={data?.title} src={data?.image} sx={{ borderRadius: '50%', width: 100, height: 100, minWidth: 100 }} />
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        width={1}
        gap={1}
      >
        <Stack width={{ sm: 230 }}>
          <Typography variant="h6" color="black" fontWeight={600}>
            {data?.title}
          </Typography>
          {data?.min_order > 1 && (
            <Typography variant="caption">min orders {`${data?.min_order} ${data?.measurement || ''}`}</Typography>
          )}
          <Typography variant="body2">{data?.notes}</Typography>
        </Stack>

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'} gap={1}>
          <Box paddingRight={4}>
            <CartCountBox
              isloading={isloading}
              value={data?.count}
              minOrder={data?.min_order}
              onChange={handleClickAddCart}
              cartId={data?.id}
            />
          </Box>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'fit-content'} gap={4}>
            <Stack direction={'row'} gap={1}>
              <Typography variant={'subtitle1'} color={'success.main'}>
                ${data?.cost * orderDetail?.items?.find((item) => item?.id === data?.id)?.count}
              </Typography>
              <Typography variant={'body2'}>
                ( ${data?.cost} x {orderDetail?.items?.find((item) => item?.id === data?.id)?.count} )
              </Typography>
            </Stack>

            <Box>
              <LoadingButton
                loading={loading}
                color="error"
                sx={{ borderRadius: 1, p: 1, minWidth: 0, background: colors.grey[100] }}
                onClick={() => {
                  deleteItem(data?.id);
                }}
              >
                <Iconify icon={'mdi:trash'} />
              </LoadingButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

// ------------------------------------------------------------------------------

const CartCountStyle = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',
  '& .MuiButton-root': {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    minWidth: 0,
    background: colors.grey[100],
    border: 'none !important',
  },
}));

CartCountBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  minOrder: PropTypes.number,
  isloading: PropTypes.bool,
  cartId: PropTypes.any,
};

function CartCountBox({ value = 0, minOrder, isloading, cartId, onChange = () => {} }) {
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;
  const [newValue, setNewValue] = useState(value);
  const handleChange = (type) => {
    if (type === '+') setNewValue(newValue + 1);
    else setNewValue(newValue - 1);

    if (newValue == 0) setNewValue(0);

    onChange(type);
  };

  return (
    <CartCountStyle color={'inherit'} variant={'contained'}>
      <LoadingButton
        disabled={newValue <= (cart?.find((item) => item?.id === cartId) ? 1 : minOrder) || isloading ? true : false}
        onClick={() => handleChange('-')}
      >
        <Iconify icon={'ic:round-minus'} />
      </LoadingButton>
      <Button disableRipple>
        <Typography variant="body1" color={'text.secondary'} sx={{ minWidth: 30, textAlign: 'center' }}>
          {newValue}
        </Typography>
      </Button>
      <LoadingButton disabled={isloading} onClick={() => handleChange('+')}>
        <Iconify icon={'ic:round-plus'} />
      </LoadingButton>
    </CartCountStyle>
  );
}
