import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// @mui
import {
  Autocomplete,
  Typography,
  Grid,
  TextField,
  Box,
  Backdrop,
  IconButton,
  Stack,
  CircularProgress,
} from '@mui/material';
// components
import Container from '../../../components/Container';
import Pagination from '../../../components/Pagination';
// sections
import MenuSearchForm from './MenuSearchForm';
import MenuCategoryForm from './MenuCategoryForm';
import MenuAllerogyForm from './MenuAllerogyForm';
import DropHiddenButton from '../../../components/DropHiddenButton';
import CartDialog from './CartDialog';
import { useDispatch, useSelector } from '../../../redux/store';
import {
  addFoodCart,
  clearCart,
  getFoodsByChef,
  setError,
  setScheduleDate,
  updateFoodCart,
} from '../../../redux/slices/food';
import { getMockTypeData } from '../../../utils/functions';
import FoodCartCard from 'src/components/FoodCartCard';
import Iconify from 'src/components/Iconify';
import MotionContainer from 'src/components/animate/MotionContainer';
import { AnimatePresence } from 'framer-motion';
import useResponsive from 'src/hooks/useResponsive';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import NewCartDialog from './NewCartDialog';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';
import { PATH_AUTH } from 'src/routes/paths';

// --------------------------------------------

const sort_type = [{ name: 'sort by Popularity' }, { name: 'sort by New' }, { name: 'sort by Oldest' }];

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

const SideBarStyle = styled(Box)(() => ({
  '& *': {
    transition: '500ms !important',
  },
}));

// --------------------------------------------

export default function FoodSection({ selectedCategory }) {
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const { isAuthenticated } = useAuth();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const [isHiddenCategory, setIsHiddenCategory] = useState(false);

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

  const { foods } = useSelector(FOOD_SELECTOR);

  return (
    <RootStyle>
      <CartDialog
        data={selectedItemData}
        setSelectedItemData={setSelectedItemData}
        open={isOpenCartDlg}
        onSubmit={() => {
          dispatch(setScheduleDate(selectedCategory));
          handleClickAddCart(selectedItemData);
          setIsOpenCartDlg(false);
        }}
        onClose={() => setIsOpenCartDlg(false)}
      />

      <NewCartDialog
        open={isOpenNewCartDlg}
        onSubmit={() => {
          dispatch(setScheduleDate(selectedCategory));
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
          {/* {!selectedCategory && <Backdrop open={true} className="overlay" />} */}
          {/* <MotionContainer
            {...(isDesktop && {
              action: true,
              animate: isHiddenCategory,
              variants: {
                initial: { x: 0 },
                animate: { x: -355 },
                exit: { x: 0 },
              },
              sx: { minWidth: 350, position: 'relative' },
            })}
          >
            {isDesktop && (
              <IconButton
                sx={{
                  position: 'absolute',
                  zIndex: 5,
                  right: isHiddenCategory ? -55 : 0,
                }}
                onClick={handleClickHideButton}
              >
                <Iconify
                  icon={
                    isHiddenCategory
                      ? 'material-symbols:keyboard-double-arrow-right'
                      : 'material-symbols:keyboard-double-arrow-left'
                  }
                  sx={{ width: '30px', height: '30px' }}
                />
              </IconButton>
            )}
            <Box position={'relative'} pt={1}>
              <MenuSearchForm />
            </Box>

            <MenuCategoryForm />
            <MenuAllerogyForm />
          </MotionContainer> */}

          <Stack
            {...(isDesktop && {
              sx: {
                marginLeft: isHiddenCategory ? '-350px !important' : 0,
                transition: '300ms',
                width: 1,
              },
            })}
          >
            {/* {!selectedCategory && (
              <Typography
                variant="h3"
                sx={{ position: 'absolute', left: '40%', top: '50%', zIndex: 5, fontWeight: '500' }}
              >
                Choose date first
              </Typography>
            )} */}
            {/* <Grid container sx={{ marginTop: '-20px', marginBottom: '20px' }}>
              <Grid item md={8} sm={4} />
              <Grid item md={4} sm={12} xs={12}>
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
                      label="Choose a short"
                      size="small"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  )}
                  sx={{ mt: 3 }}
                />
              </Grid>
            </Grid> */}
            <Grid container spacing={3}>
              {foods?.[selectedCategory]?.slice((currentPage - 1) * 12, currentPage * 12).map((item) => (
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
                    selectedCategory={selectedCategory}
                  />
                </Grid>
              ))}
            </Grid>
            {foods?.[selectedCategory]?.length > 12 && (
              <Pagination count={Math.ceil(foods?.[selectedCategory]?.length / 12)} setCurrentPage={setCurrentPage} />
            )}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
