import { LoadingButton } from '@mui/lab';
import { Box, Link, Stack, Typography } from '@mui/material';
import CuisineList from './CuisineList';
import ProfileCover from './ProfileCover';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'src/redux/store';
import { clearOrderDetail, createOrders, FOOD_SELECTOR } from 'src/redux/slices/food';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { useRouter } from 'next/router';
import { ShoppingCartIcon } from 'src/assets';
import Iconify from 'src/components/Iconify';
import { useEffect, useState } from 'react';
import { createCardIntent } from 'src/redux/service/payment';
import { PATH_PAGE } from 'src/routes/paths';

//
export default function CartChef() {
  const { cuisines } = useSelector(CITYCUISINE_SELECTOR);

  const { checkout } = useSelector(FOOD_SELECTOR);

  const [loading, setLoading] = useState(false);

  const { cart, deliveryDate } = checkout;

  const cuisineId = cart[0].cuisine?.id;

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart?.reduce((total, currentValue) => total + currentValue.count, 0));
  }, [cart]);

  const router = useRouter();

  const dispatch = useDispatch();

  const cuisineNames = new Set(cart?.map((item) => cuisines.find((cuisine) => cuisine.id == item.cuisine_id)?.name));

  const handleClickCreateOrders = async () => {
    setLoading(true);
    await dispatch(clearOrderDetail());
    const response = await dispatch(createOrders(cart));
    setLoading(false);
    router.push('/cities/4/4/2/checkout/');
  };

  return (
    <Stack>
      {cart?.length == 0 ? (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ color: 'gray', opacity: 0.7 }} spacing={2}>
          <Iconify icon={'ic:outline-shopping-cart'} sx={{ width: 100, height: 100 }} />
          <Typography>There are no items in your cart</Typography>
        </Stack>
      ) : (
        <>
          <Box sx={{ position: 'absolute', left: 10, top: 10 }}>
            <NextLink href={PATH_PAGE.searchChef.cities({ cityId: '4', cuisineId: cuisineId })} passHref>
              <Link underline='none'>
                <Typography mt={2} sx={{ color: 'black' }} className="sign-up">
                  Return to chef
                </Typography>
              </Link>
            </NextLink>
          </Box>
          <ProfileCover cuisineNames={[...cuisineNames]} />
          <CuisineList />

          <Box mt={5} />

          <Stack px={{ sm: 8 }}>
            <LoadingButton
              size="large"
              variant="outlined"
              sx={{ color: 'black' }}
              loading={loading}
              onClick={handleClickCreateOrders}
            >
              Checkout ({cartCount})
            </LoadingButton>
          </Stack>
        </>
      )}
    </Stack>
  );
}
