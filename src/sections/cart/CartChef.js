import { LoadingButton } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'src/redux/store';
import { createOrders, FOOD_SELECTOR } from 'src/redux/slices/food';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { useRouter } from 'next/router';

//
export default function CartChef() {
  const { chef, cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { checkout } = useSelector(FOOD_SELECTOR);

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
    const response = await dispatch(
      createOrders({ chefId: chef?.chef?.id, carts: cartArr, selectedDay: new Date(deliveryDate) })
    );
    router.push('/cities/4/4/2/checkout/');
  };

  return (
    <Stack>
      {cart?.length == 0 ? (
        <Typography variant="h3" align="center">
          There are no items in your cart
        </Typography>
      ) : (
        <>
          <ProfileCover cuisineNames={[...cuisineNames]} />
          <CuisineList />

          <Box mt={5} />

          <Stack px={{ sm: 8 }}>
            <LoadingButton size="large" variant="outlined" sx={{ color: 'black' }} onClick={handleClickCreateOrders}>
              Checkout ({cart.length})
            </LoadingButton>
          </Stack>
        </>
      )}
    </Stack>
  );
}
