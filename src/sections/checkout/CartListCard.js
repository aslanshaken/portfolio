//
import PropTypes from 'prop-types';
// @mui
import { Box, Button, ButtonGroup, Card, colors, List, ListItem, Stack, styled, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Iconify from 'src/components/Iconify';
import Image from 'src/components/Image';
import { useDispatch, useSelector } from 'src/redux/store';
import { addFoodCart, FOOD_SELECTOR, removeFoodCart, updateCart } from 'src/redux/slices/food';
import { useCallback, useEffect, useState } from 'react';
import useNotify from 'src/hooks/useNotify';

//
export default function CartListCard() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart, orderId } = checkout;

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
        {cart?.length == 0 ? (
          <Typography variant="body2">Cart is empty.</Typography>
        ) : (
          <List disablePadding sx={{ overflowX: 'auto' }}>
            {cartArr?.map((data, _i) => (
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
  const dispatch = useDispatch();
  const { successAlert, errorAlert } = useNotify();
  let { count, ...food } = data;

  const handleClickAddCart = useCallback(
    async (type) => {
      try {
        if (type === '+') {
          dispatch(addFoodCart({ foods: food, newAddCart: false }));
          const response = await dispatch(updateCart({ type: 'add', orderId: orderId, foodId: data.id }));
          successAlert(response.data.success);
        } else {
          dispatch(removeFoodCart({ food: food, removeAll: false, removeOneItem: true }));
          const response = await dispatch(updateCart({ type: 'remove', orderId: orderId, foodId: data.id }));
          successAlert(response.data.success);
        }
      } catch (error) {
        errorAlert(error.message);
      }
    },
    [food]
  );

  const handleClickRemoveCart = useCallback(() => {
    dispatch(removeFoodCart({ food: food, removeAll: false, removeOneItem: false }));
  }, [food]);

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} width={1}>
      <Stack direction={'row'} alignItems={'center'} spacing={6}>
        <Image alt={data?.title} src={data?.image_url} sx={{ borderRadius: '50%', width: 80, height: 80, minWidth:80 }} />

        <Stack minWidth={200}>
          <Typography variant="h6" color="black" fontWeight={600} gutterBottom>
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'440 cal'}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={'row'} alignItems={'center'} spacing={6}>
        <Box>
          <CartCountBox value={data?.count} onChange={handleClickAddCart} cartId={data?.id} />
        </Box>

        <Typography variant={'subtitle1'} color={'success.main'}>
          ${data?.current_price}
        </Typography>

        <Box>
          <Button color="error" sx={{ borderRadius: 1, p: 1, minWidth: 0, background: colors.grey[100] }}>
            <Iconify icon={'mdi:trash'} onClick={handleClickRemoveCart} />
          </Button>
        </Box>
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
};

function CartCountBox({ value = 0, onChange = () => {} }) {
  const handleChange = (type) => {
    let newValue = value;
    if (type === '+') newValue++;
    else newValue--;

    if (newValue < 0) newValue = 0;

    onChange(type);
  };

  return (
    <CartCountStyle color={'inherit'} variant={'contained'}>
      <Button onClick={() => handleChange('-')}>
        <Iconify icon={'ic:round-minus'} />
      </Button>

      <Button disableRipple>
        <Typography variant="body1" color={'text.secondary'} sx={{ minWidth: 30, textAlign: 'center' }}>
          {value}
        </Typography>
      </Button>
      <Button onClick={() => handleChange('+')}>
        <Iconify icon={'ic:round-plus'} />
      </Button>
    </CartCountStyle>
  );
}
