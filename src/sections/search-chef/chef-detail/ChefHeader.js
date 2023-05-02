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
import { addFoodCart, FOOD_SELECTOR, updateCart, updateFoodCart } from 'src/redux/slices/food';
import { useEffect, useState } from 'react';
import ChangeDeliveryDateDialgo from './ChangeDeliveryDateDialgo';

ChefHeader.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function ChefHeader({ selectedCategory, setSelectedCategory }) {
  const { cuisine } = useSelector(CITYCUISINE_SELECTOR);

  const { chef: chefData } = useSelector(CITYCUISINE_SELECTOR);

  const { chef } = chefData;

  const { checkout, foods } = useSelector(FOOD_SELECTOR);

  const { cart, deliveryDate } = checkout;

  const [tempCategory, setTempCategory] = useState();

  const [changeDeliveryDateDialogIsOpen, setChangeDeliveryDateDialogIsOpen] = useState(false);

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
        setSelectedCategory(deliveryDate);
      } else {
        setSelectedCategory(categories[0]?.date);
      }
    }
  }, [categories.length, deliveryDate, chef?.id]);

  const dispatch = useDispatch();

  // const setCategory = () => {
  //   setSelectedCategory(tempCategory);
  //   dispatch(addFoodCart({ foods: [], newAddCart: true, deliveryDate: selectedCategory }));
  //   setChangeDeliveryDateDialogIsOpen(false);
  // };

  const setCategory = () => {
    setSelectedCategory(tempCategory);
    dispatch(updateFoodCart({ actionType: 'clear' }));
    setChangeDeliveryDateDialogIsOpen(false);
  };

  const handleClickCategory = (data) => {
    if (selectedCategory !== data && cart.length > 0) {
      setChangeDeliveryDateDialogIsOpen(true);
      setTempCategory(data);
    } else {
      setSelectedCategory(data);
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
        <Box display={'flex'} mb={7}>
          <Box px={2} width={'100%'}>
            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'}>
              <Box display={'flex'} gap={2}>
                <Box position={'relative'}>
                  <Avatar
                    alt="Travis Howard"
                    src={chef?.image_url}
                    sx={{
                      width: {
                        md: 150,
                        xs: 100,
                      },
                      height: {
                        md: 150,
                        xs: 100,
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
                  <Box display={'flex'} gap={2} flexWrap={'wrap'} py={1}>
                    <Typography color={'black'} variant={'subtitle1'}>
                      by {chef?.first_name} {chef?.last_name}
                    </Typography>
                    <Typography display={{ xs: 'block', md: 'none' }} color={'black'} variant={'subtitle1'}>
                      Zip code: {chef?.primary_address?.zip}
                    </Typography>
                    <Typography color={'black'} variant={'subtitle1'}>
                      {cuisine?.name}
                    </Typography>
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
                  </Box>
                  <Hidden mdDown>
                    <Box maxWidth={'600px'}>
                      <ReadMore>{chef?.about_me}</ReadMore>
                    </Box>
                  </Hidden>
                </Box>
              </Box>
              <Stack direction={'row'} flexWrap={'nowrap'} mt={2} mb={4} spacing={1}>
                <NextLink href={chef?.instagram ?? '#'} passHref>
                  <Box>
                    <Image
                      src={'/assets/search-chef/follow.png'}
                      sx={{ border: '2px solid', borderRadius: '13px', height: 40, width: 40, cursor: 'pointer' }}
                      alt={'follow-image'}
                    />
                  </Box>
                </NextLink>
                {/* <IconButton
                  color={'secondary'}
                  sx={{ border: '2px solid', height: 40, width: 40, borderRadius: '13px' }}
                >
                  <Iconify icon={'mdi:cards-heart-outline'} />
                </IconButton> */}
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
