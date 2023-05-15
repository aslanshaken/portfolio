import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IconButtonAnimate } from '../animate';
import Iconify from '../Iconify';
import { dispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, updateFoodCart } from 'src/redux/slices/food';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import { PATH_PAGE } from 'src/routes/paths';
import styled from '@emotion/styled';
//

const CartCountStyle = styled(Stack)(({ theme }) => ({
  button: {
    color: theme.palette.primary.main,
  },
  minWidth: '110px',
  justifyContent: 'center',
  border: `solid 1px`,
  borderColor: 'lightGrey',
  borderRadius: theme.shape.borderRadius * 2,
}));

// ----------------------------------------------------------------------

export default function CountBox({ data = {}, setIsOpenNewCartDlg = () => {}, setSelectedItemData = () => {} }) {
  const { isAuthenticated } = useAuth();
  const [value, setValue] = useState(0);
  const router = useRouter();
  const {
    checkout: { cart },
  } = useSelector(FOOD_SELECTOR);

  const handleChange = (actionType) => {
    if (isAuthenticated) {
      let temp = { ...data };
      temp.count = cart?.find((item) => item?.id === data?.id) ? 1 : data?.min_order ?? 1;
      if (cart.some((item) => item?.user_id !== data?.user_id)) {
        setSelectedItemData(temp);
        setIsOpenNewCartDlg(true);
      } else {
        dispatch(updateFoodCart({ data: temp, actionType: actionType }));
      }
    } else {
      router.push(PATH_PAGE.home);
    }
  };
  useEffect(() => {
    setValue(cart?.find((item) => item?.id === data?.id)?.count ?? 0);
  }, [cart, data]);

  return cart?.find((item) => item?.id === data?.id && item?.user_id === data?.user_id) ? (
    <CartCountStyle direction={'row'} alignItems={'center'}>
      <IconButtonAnimate disabled={value === 0} onClick={() => handleChange('remove')}>
        <Iconify icon={'ic:round-minus'} />
      </IconButtonAnimate>
      <Typography color={'secondary'} px={1}>
        {value}
      </Typography>
      <IconButtonAnimate onClick={() => handleChange('add')}>
        <Iconify icon={'ic:round-plus'} />
      </IconButtonAnimate>
    </CartCountStyle>
  ) : (
    <IconButtonAnimate sx={{ p: 0, width: 25, height: 25 }} onClick={() => handleChange('add')}>
      <Iconify icon={'ic:outline-plus'} sx={{ width: 25, height: 25, color: 'text.secondary' }} />
    </IconButtonAnimate>
  );
}
