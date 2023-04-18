import { LoadingButton } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'src/redux/store';
import { createOrders, FOOD_SELECTOR } from 'src/redux/slices/food';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { useRouter } from 'next/router';
import { ShoppingCartIcon } from 'src/assets';
import Iconify from 'src/components/Iconify';
import { useState } from 'react';

//
export default function CartChef() {
  const { chef, cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { checkout } = useSelector(FOOD_SELECTOR);

  const [loading, setLoading] = useState(false);

  const { cart, deliveryDate } = checkout;

  const router = useRouter();

  const dispatch = useDispatch();

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

  const cuisineNames = new Set(cartArr.map((item) => cuisines.find((cuisine) => cuisine.id == item.cuisine_id)?.name));

  const handleClickCreateOrders = async () => {
    setLoading(true);
    const response = await dispatch(
      createOrders({ chefId: chef?.chef?.id, carts: cartArr, selectedDay: new Date(deliveryDate) })
    );
    setLoading(false);
    router.push('/cities/4/4/2/checkout/');
  };

  return (
    <Stack>
      {cart?.length == 0 ? (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ color: 'gray', opacity: .7 }} spacing={2}>
          <Iconify icon={'ic:outline-shopping-cart'} sx={{ width: 100, height: 100 }} />
          <Typography>There are no items in your cart</Typography>
        </Stack>
      ) : (
        <>
          <ProfileCover cuisineNames={[...cuisineNames]} />
          <CuisineList />

          <Box mt={5} />

          <Stack px={{ sm: 8 }}>
            <LoadingButton size="large" variant="outlined" sx={{ color: 'black' }} loading={loading} onClick={handleClickCreateOrders}>
              Checkout ({cart.length})
            </LoadingButton>
          </Stack>
        </>
      )}
    </Stack>
  );
}
