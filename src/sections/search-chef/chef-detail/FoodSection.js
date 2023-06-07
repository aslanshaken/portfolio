import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
// @mui
import {
  Typography,
  Grid,
  Stack,
} from '@mui/material';
// components
import Container from '../../../components/Container';
import Pagination from '../../../components/Pagination';
// sections
import CartDialog from './CartDialog';
import { useDispatch, useSelector } from '../../../redux/store';
import {
  setScheduleDate,
  setScheduleTime,
  updateFoodCart,
} from '../../../redux/slices/food';
import FoodCartCard from 'src/components/FoodCartCard';
import useResponsive from 'src/hooks/useResponsive';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import NewCartDialog from './NewCartDialog';
import Image from 'src/components/Image';
import LoadingScreen from 'src/components/LoadingScreen';

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 0,
  '& .search_bar': {
    justifyContent: 'space-between',
    marginTop: 2,
    paddingBottom: '20px',
    alignItems: 'center',
  },
  '& .defaultIconSize': {
    width: 22,
    height: 22,
  },
  '& .categorySection': {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& .listItemBtn': {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  '& .MuiOutlinedInput-root': {
    background: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 2,
    '& *': {
      border: 0,
    },
  },
  '& .overlay': {
    position: 'absolute',
    top: -50,
    zIndex: 10,
    background: '#FFFFFF',
    opacity: `0.5 !important`,
  },
}));

// --------------------------------------------

export default function FoodSection({
  selectedDate,
  selectedTime,
  foodsArray,
  filteredFoodsArray,
  searchIsLoading,
  currentPage,
  setCurrentPage,
}) {

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const [isHiddenCategory] = useState(false);

  const isDesktop = useResponsive('up', 'md');

  const [isOpenCartDlg, setIsOpenCartDlg] = useState(false);

  const [isOpenNewCartDlg, setIsOpenNewCartDlg] = useState(false);

  const [selectedItemData, setSelectedItemData] = useState();

  const dispatch = useDispatch();

  // const handleClickHideButton = () => {
  //   setIsHiddenCategory(!isHiddenCategory);
  // };

  const handleClickItem = (props) => {
    let data = { ...props };
    if (!data.min_order) {
      data.min_order = 1;
    }
    data.count = cart.find((item) => item?.id === data.id) ? 1 : data.min_order;
    setIsOpenCartDlg(true);
    setSelectedItemData(data);
  };

  const handleClickAddCart = useCallback(
    (data) => {
      setSelectedItemData(data);
      if (cart.some((item) => item?.user_id !== data?.user_id)) {
        setIsOpenNewCartDlg(true);
      } else {
        dispatch(updateFoodCart({ data: data, actionType: 'add' }));
      }
    },
    [cart]
  );

  return (
    <RootStyle>
      <CartDialog
        data={selectedItemData}
        foods={foodsArray}
        setSelectedItemData={setSelectedItemData}
        open={isOpenCartDlg}
        onSubmit={(data) => {
          dispatch(setScheduleDate(selectedDate));
          dispatch(setScheduleTime(selectedTime));
          handleClickAddCart(data);
          setIsOpenCartDlg(false);
        }}
        onClose={() => setIsOpenCartDlg(false)}
      />

      <NewCartDialog
        open={isOpenNewCartDlg}
        onSubmit={() => {
          dispatch(setScheduleDate(selectedDate));
          dispatch(setScheduleTime(selectedTime));
          dispatch(updateFoodCart({ actionType: 'clear' }));
          dispatch(
            updateFoodCart({
              data: selectedItemData,
              actionType: 'add',
            })
          );
          setIsOpenNewCartDlg(false);
        }}
        onClose={() => {
          setIsOpenNewCartDlg(false);
        }}
      />

      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={10}
          mt={10}
          position="relative"
          overflow="hidden"
          width={1}
        >
          <Stack
            {...(isDesktop && {
              sx: {
                marginLeft: isHiddenCategory ? '-350px !important' : 0,
                transition: '300ms',
                width: 1,
              },
            })}
          >
            <Grid container spacing={3}>
              {searchIsLoading ? (
                <Stack position={'relative'} my={20} sx={{ width: '100%' }}>
                  <LoadingScreen />
                </Stack>
              ) : filteredFoodsArray?.length === 0 ? (
                <Stack
                  width={'100%'}
                  textAlign={'center'}
                  position={'relative'}
                  minHeight={300}
                  backgroundColor="white"
                  padding={6}
                >
                  <Image
                    alt="oops"
                    src="/assets/search-chef/oops.png"
                    width={300}
                    sx={{ position: 'absolute', right: { lg: 200, md: 100, xs: 0 }, bottom: 0, zIndex: 0 }}
                  />
                  <Stack gap={3} zIndex={1}>
                    <Typography variant="h3">We are sorry</Typography>
                    <Typography>We couldn't find any matching results for your search</Typography>
                  </Stack>
                </Stack>
              ) : (
                filteredFoodsArray?.slice((currentPage - 1) * 12, currentPage * 12).map((item) => (
                  <Grid key={item?.id} item lg={4} md={6} sm={6} xs={12} width={1}>
                    <FoodCartCard
                      data={item}
                      name={item?.title}
                      cover={item?.image_url}
                      price={item?.current_price}
                      min_order={item?.min_order}
                      we_kc={`${item?.gram} gr / ${item?.kc} kc`}
                      quantity={item?.quantity}
                      measurement={item?.measurement}
                      setIsOpenNewCartDlg={setIsOpenNewCartDlg}
                      setSelectedItemData={setSelectedItemData}
                      onClick={() => handleClickItem(item)}
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                    />
                  </Grid>
                ))
              )}
            </Grid>
            {filteredFoodsArray?.length > 12 && (
              <Pagination count={Math.ceil(filteredFoodsArray?.length / 12)} setCurrentPage={setCurrentPage} />
            )}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
