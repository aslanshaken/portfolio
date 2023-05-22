import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Avatar, Box, Button, Divider, IconButton, Typography, Hidden, Stack, Link } from '@mui/material';
import Container from '../../../components/Container';
import Iconify from '../../../components/Iconify';
import GradientText from '../../../components/GradientText';
import ReadMore from '../../../components/ReadMore';
import Image from 'src/components/Image';
import HeroHeader from 'src/components/HeroHeader';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { add, format } from 'date-fns';
import { addFoodCart, FOOD_SELECTOR, setScheduleDate, updateCart, updateFoodCart } from 'src/redux/slices/food';
import { useEffect, useState } from 'react';
import ChangeDeliveryDateDialgo from './ChangeDeliveryDateDialgo';
import { useRouter } from 'next/router';
import { PATH_PAGE } from 'src/routes/paths';

ChefHeader.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function ChefHeader({ selectedCategory, setSelectedCategory }) {
  const { chef: chefData, chefs } = useSelector(CITYCUISINE_SELECTOR);

  const { chef } = chefData ?? {};

  const { checkout, foods } = useSelector(FOOD_SELECTOR);

  const { cart, scheduleDate } = checkout;

  const [tempCategory, setTempCategory] = useState();

  const [changeDeliveryDateDialogIsOpen, setChangeDeliveryDateDialogIsOpen] = useState(false);

  const router = useRouter();

  const { cityId, cuisineId, chefId } = router.query;

  const [nextChefId, setNextChefId] = useState();

  const [prevChefId, setPrevChefId] = useState();

  useEffect(() => {
    if (chefId) {
      const currentIndex = chefs?.findIndex((item) => item.chef.id == chefId);
      setPrevChefId(chefs?.[currentIndex - 1]?.chef?.id);
      setNextChefId(chefs?.[currentIndex + 1]?.chef?.id);
    }
  }, [chefId, chefs]);

  const categories = Object.keys(foods)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((key, _i) => ({
      id: _i,
      label: format(new Date(key), 'MM/dd/yy'),
      date: format(new Date(key), 'MM/dd/yy'),
    }))
    .filter((item) => new Date(item?.date) > new Date().setHours(0, 0, 0, 0));

  useEffect(() => {
    if (categories.length > 0) {
      if (cart[0]?.user_id === chef?.id) {
        setSelectedCategory(scheduleDate);
      } else {
        setSelectedCategory(categories[0]?.date);
      }
    }
  }, [categories.length, chef?.id]);

  const dispatch = useDispatch();

  // const setCategory = () => {
  //   setSelectedCategory(tempCategory);
  //   dispatch(addFoodCart({ foods: [], newAddCart: true, deliveryDate: selectedCategory }));
  //   setChangeDeliveryDateDialogIsOpen(false);
  // };

  const setCategory = () => {
    setSelectedCategory(tempCategory);
    dispatch(setScheduleDate(tempCategory));
    dispatch(updateFoodCart({ actionType: 'clear' }));
    setChangeDeliveryDateDialogIsOpen(false);
  };

  const handleClickCategory = (data) => {
    if (selectedCategory !== data && cart.length > 0) {
      setChangeDeliveryDateDialogIsOpen(true);
      setTempCategory(data);
    } else {
      setSelectedCategory(data);
      dispatch(setScheduleDate(data));
    }
  };

  return (
    <>
      <ChangeDeliveryDateDialgo
        open={changeDeliveryDateDialogIsOpen}
        onSubmit={setCategory}
        onClose={() => setChangeDeliveryDateDialogIsOpen(false)}
      />

      <HeroHeader cuisine={'Back'} />
      <Container>
        <Stack direction={'row'} gap={6} width={'100%'} justifyContent={'space-between'}>
          {prevChefId && (
            <NextLink href={PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: prevChefId })} passHref>
              <Link underline="none">Previous Chef</Link>
            </NextLink>
          )}
          {nextChefId && (
            <NextLink href={PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: nextChefId })} passHref>
              <Link underline="none">Next Chef</Link>
            </NextLink>
          )}
        </Stack>
        <Box display={'flex'} mb={7}>
          <Box px={2} width={'100%'}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
              width={'100%'}
              position={'relative'}
            >
              <Stack
                marginTop={4}
                direction={{ sm: 'row', xs: 'column' }}
                alignItems={'center'}
                justifyContent={'center'}
                spacing={{ sm: 2 }}
                width={'100%'}
              >
                <Box position={'relative'}>
                  <Avatar
                    alt="Travis Howard"
                    src={chef?.image_url}
                    sx={{
                      width: {
                        md: 150,
                        xs: 130,
                      },
                      height: {
                        md: 150,
                        xs: 130,
                      },
                    }}
                  />
                  <Iconify
                    icon={'material-symbols:verified'}
                    sx={{
                      position: 'absolute',
                      top: { xs: 2, md: 8 },
                      right: { xs: 2, md: 8 },
                      width: { xs: 20, md: 24 },
                      height: { xs: 20, md: 24 },
                      color: '#0ED3CF',
                    }}
                  />
                </Box>
                <Box>
                  <Typography color={'black'} variant={'h3'} fontWeight={'600'} pt={1}>
                    {chef?.company_name}
                  </Typography>
                  <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                    <Typography color={'black'} variant={'subtitle1'}>
                      by {chef?.first_name} {chef?.last_name}
                    </Typography>
                    <Typography display={{ xs: 'block', md: 'none' }} color={'black'} variant={'subtitle1'}>
                      Zip code: {chef?.primary_address?.zip}
                    </Typography>
                    {/* <Typography color={'black'} variant={'subtitle1'}>
                      {cuisine?.name}
                    </Typography> */}
                    <Typography color={'black'} variant={'subtitle1'}>
                      Rating: {chef?.rating}
                    </Typography>
                    <Typography color={'black'} variant={'subtitle1'}>
                      Deliveries: {chef?.orders}
                    </Typography>
                    <GradientText color={'primary'} variant={'subtitle1'}>
                      Certified chef
                    </GradientText>
                    <Typography display={{ md: 'block', xs: 'none' }} color={'black'} variant={'subtitle1'}>
                      Zip code: {chef?.primary_address?.zip}
                    </Typography>
                    <Typography display={{ md: 'block', xs: 'none' }} color={'black'} variant={'subtitle1'}>
                      Delivery fee: ${chef?.delivery_fee ?? 0}
                    </Typography>
                  </Stack>
                  <Hidden mdDown>
                    <Box maxWidth={'600px'}>
                      <ReadMore>{chef?.about_me}</ReadMore>
                    </Box>
                  </Hidden>
                </Box>
              </Stack>
            </Box>
            <Hidden mdUp>
              <Box maxWidth={'600px'}>
                <ReadMore>{chef?.about_me}</ReadMore>
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Box>
          <Divider />
          <Box my={4}>
            <Box>
              <Typography variant="h3" color={'black'}>
                Available dates
              </Typography>
            </Box>
            <Stack direction="row" spacing={4} position={'relative'} zIndex={10} overflow={'auto'} py={2}>
              {categories.length == 0 ? (
                <Typography>There is no available dates.</Typography>
              ) : (
                categories.map((item) => (
                  <Button
                    disabled={foods?.[item?.date]?.length > 0 ? false : true}
                    key={item?.id}
                    variant={'contained'}
                    sx={{
                      fontWeight: 500,
                      px: 4,
                      whiteSpace: 'nowrap',
                      minWidth: 'fit-content',
                      border: item?.date === selectedCategory && 'none',
                      background: item?.date === selectedCategory ? '#B3B3B3' : '#DAEFE5',
                      color: '#31342B',
                    }}
                    onClick={() => handleClickCategory(item?.date)}
                  >
                    {item?.label}
                  </Button>
                ))
              )}
            </Stack>
          </Box>
          <Divider />
        </Box>
      </Container>
    </>
  );
}
