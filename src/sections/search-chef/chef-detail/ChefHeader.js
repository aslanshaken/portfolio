import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  Hidden,
  Stack,
  Link,
  TextField,
  InputAdornment,
} from '@mui/material';
import Container from '../../../components/Container';
import Iconify from '../../../components/Iconify';
import ReadMore from '../../../components/ReadMore';
import HeroHeader from 'src/components/HeroHeader';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { addHours, format, isAfter, isSameDay, isToday, isTomorrow, parse, parseISO } from 'date-fns';
import { FOOD_SELECTOR, setScheduleTime } from 'src/redux/slices/food';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PATH_PAGE } from 'src/routes/paths';
import ScheduleDialog from 'src/sections/checkout/ScheduleDialog';
import useResponsive from 'src/hooks/useResponsive';
import Image from 'src/components/Image';
import styled from '@emotion/styled';
import { HEADER } from 'src/config';

ChefHeader.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
};
// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function ChefHeader({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  foodsArray,
  setFoodsArray,
}) {
  const router = useRouter();
  const [nextChefId, setNextChefId] = useState();
  const [prevChefId, setPrevChefId] = useState();
  const { chef: chefData, chefs } = useSelector(CITYCUISINE_SELECTOR);
  const { chef } = chefData ?? {};
  const [isOpenScheduleDialog, setIsOpenScheduleDialog] = useState(false);
  const { foods, checkout } = useSelector(FOOD_SELECTOR);
  const { cart, scheduleDate, scheduleTime } = checkout;
  const { cityId, cuisineId, chefId } = router.query;
  const [formattedDate, setFormattedDate] = useState();
  const [categories, setCategories] = useState();
  const [slots, setSlots] = useState();
  const [warnningMsg, setWarnningMsg] = useState();
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState(false);
  const isDesktop = useResponsive('up', 'sm');

  useEffect(() => {
    if (chefId && chefs) {
      const availableChefs = chefs?.filter((item) => item?.chef?.can_sell);
      const currentIndex = availableChefs?.findIndex((item) => item.chef.id == chefId);
      setPrevChefId(availableChefs?.[currentIndex - 1]?.chef?.id);
      setNextChefId(availableChefs?.[currentIndex + 1]?.chef?.id);
    }
  }, [chefId, chefs]);

  useEffect(() => {
    const availableDates = Object.keys(foods)?.filter(
      (item) => isSameDay(new Date(item), new Date()) || isAfter(new Date(item), new Date())
    );
    const initialSlots = foods?.[availableDates[0]]?.slots;
    const currentTimePlusFiveHours = addHours(new Date(), chef?.time_to_cook);
    const filteredArray = initialSlots?.filter((time) => parse(time, 'hh:mm a', new Date()) > currentTimePlusFiveHours);
    setSlots(filteredArray?.length === 0 ? foods?.[availableDates[1]]?.slots : filteredArray);
    const temp = filteredArray?.length === 0 ? availableDates.slice(1, availableDates.length - 1) : availableDates;
    setCategories(temp);

    if (cart[0]?.user_id === chef?.id) {
      setSelectedDate(scheduleDate);
      setSelectedTime(scheduleTime);
    } else {
      setSelectedDate(filteredArray?.length === 0 ? availableDates[1] : availableDates[0]);
      setSelectedTime(filteredArray?.length === 0 ? foods?.[availableDates[1]]?.slots?.[0] : filteredArray?.[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const selectedDateIsToday = isToday(new Date(selectedDate));
      const selectedDateIsTomorrow = isTomorrow(new Date(selectedDate));
      const formattedDate = format(new Date(selectedDate), 'MMMM d');
      setFormattedDate(selectedDateIsToday ? 'Today' : selectedDateIsTomorrow ? 'Tomorrow' : formattedDate);
    }
  }, [selectedDate]);

  const searchFoods = (key) => {
    if (key.length > 3) {
      setWarnningMsg();
      const filteredArray = foodsArray.filter((item) => item.title.toLowerCase().includes(key.toLowerCase()));
      setFoodsArray(filteredArray);
    } else {
      if (key.length > 1 && key.length < 4) {
        setWarnningMsg('requires at least 4 letters');
      } else {
        setWarnningMsg();
      }
      setFoodsArray(foods?.[selectedDate]?.foods);
    }
  };

  const filterFoodsByDeliveryAvailable = () => {
    const filteredArray = foodsArray.filter((item) => item.chef.delivery_available);
    setFoodsArray(filteredArray);
  };

  const filterFoodsByHalal = () => {
    const filteredArray = foodsArray.filter((item) => item.chef.halal);
    setFoodsArray(filteredArray);
  };

  const filterFoodsByCatering = () => {
    const filteredArray = foodsArray.filter((item) => item.chef.catering);
    setFoodsArray(filteredArray);
  };

  useEffect(() => {
    if (searchKey === '') {
      setStatus(false);
    }
  }, [searchKey]);

  const onSubmit = () => {
    if (searchKey != '') {
      setStatus(!status);
      if (status) {
        setSearchKey('');
        searchFoods('');
      } else {
        searchFoods(searchKey);
      }
    } else {
      setFoodsArray(foods?.[selectedDate]?.foods);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
    if (event.key === 'Backspace') {
      setSearchKey('');
      searchFoods('');
    }
  };

  return (
    <RootStyle>
      <ScheduleDialog
        slots={slots}
        categories={categories}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        open={isOpenScheduleDialog}
        onClose={() => setIsOpenScheduleDialog(false)}
      />

      {/* <HeroHeader cuisine={'Back'} /> */}
      <Container>
        <Stack>
          <TextField
            onChange={(e) => setSearchKey(e.target.value)}
            size="large"
            fullWidth
            value={searchKey}
            placeholder="Search for a meal"
            hiddenLabel
            variant="filled"
            sx={{ padding: 1, marginTop: 4 }}
            onKeyDown={handleKeyDown}
            InputProps={{
              ...(isDesktop ? { style: { fontSize: '16px' } } : { style: { fontSize: '11px' } }),
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={'mingcute:search-line'} className="defaultIconSize" />
                </InputAdornment>
              ),
              endAdornment: (
                <Button
                  onClick={() => {
                    onSubmit();
                  }}
                  sx={{ width: 100 }}
                  size="medium"
                  color="secondary"
                  variant={status ? 'outlined' : 'contained'}
                >
                  {status ? 'Clear' : 'Search'}
                </Button>
              ),
            }}
          />

          <Typography color={'error'}>{warnningMsg}</Typography>

          <Box marginTop={2} whiteSpace={'nowrap'} sx={{ overflowX: 'scroll' }}>
            <NextLink color="inherit" href={`/cities/${cityId}/${cuisineId}/`} passHref>
              <Button color="secondary">Go back</Button>
            </NextLink>
            <Button
              color="secondary"
              onClick={() => {
                setSearchKey('');
                searchFoods('');
              }}
            >
              All Foods
            </Button>
            {/* <Button onClick={filterFoodsByDeliveryAvailable} color="secondary">
              Frozen Meals
            </Button>
            <Button onClick={filterFoodsByHalal} color="secondary">
              Random Food title 1
            </Button>
            <Button onClick={filterFoodsByCatering} color="secondary">
              Random Food title 2
            </Button> */}
          </Box>

          <Divider sx={{ marginTop: 2 }} />

          <Stack
            textAlign={'center'}
            position={'relative'}
            backgroundColor={(theme) => theme.palette.secondary.main}
            padding={2}
            marginTop={6}
            marginBottom={6}
          >
            <Image
              src={'/assets/search-chef/Texture.png'}
              sx={{ position: 'absolute', width: '100%', height: '100%', top: -2 }}
            />
            <Typography color={'white'} fontSize={{ xs: 16, sm: 20 }} fontWeight={400}>
              Get free delivery on orders over $100
            </Typography>
          </Stack>
        </Stack>
        <Stack marginTop={2} direction={'row'} gap={6} width={'100%'} justifyContent={'space-between'}>
          {prevChefId ? (
            <NextLink href={PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: prevChefId })} passHref>
              <Link underline="none">Previous Chef</Link>
            </NextLink>
          ) : (
            <Box> </Box>
          )}
          {nextChefId ? (
            <NextLink href={PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: nextChefId })} passHref>
              <Link underline="none">Next Chef</Link>
            </NextLink>
          ) : (
            <Box> </Box>
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
                <Box position={'relative'} marginBottom={2}>
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
                <Stack gap={{ xs: 2, md: 0 }} width={'100%'}>
                  <Stack textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography color={'black'} variant={'h3'} fontWeight={'600'}>
                      {chef?.company_name}
                    </Typography>
                    <Typography py={3} display={{ xs: 'block', sm: 'none' }} color={'black'} variant={'subtitle1'}>
                      by {chef?.first_name} {chef?.last_name}
                    </Typography>
                  </Stack>
                  <Stack
                    display={{ xs: 'flex', sm: 'none' }}
                    direction={'row'}
                    flexWrap={'wrap'}
                    gap={1}
                    justifyContent={'space-between'}
                    px={2}
                    width={'100%'}
                  >
                    <Stack gap={1}>
                      <Stack direction={'row'} gap={0.7}>
                        <Typography color={'black'} variant={'body1'}>
                          Rating:
                        </Typography>
                        <Typography variant="subtitle1">{chef?.rating}</Typography>
                      </Stack>
                      <Stack direction={'row'} gap={0.7}>
                        <Typography color={'black'} variant={'body1'}>
                          Deliveries:
                        </Typography>
                        <Typography variant="subtitle1">{chef?.orders}</Typography>
                      </Stack>
                    </Stack>
                    <Stack gap={1}>
                      <Stack direction={'row'} gap={0.7}>
                        <Typography color={'black'} variant={'body1'}>
                          Zip code:
                        </Typography>
                        <Typography variant="subtitle1">{chef?.primary_address?.zip}</Typography>
                      </Stack>
                      <Stack direction={'row'} gap={0.7}>
                        <Typography color={'black'} variant={'body1'}>
                          Delivery fee:
                        </Typography>
                        <Typography variant="subtitle1">${chef?.delivery_fee ?? 4.99}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack
                    marginBottom={2}
                    direction={'row'}
                    display={{ xs: 'none', sm: 'flex' }}
                    gap={2}
                    flexWrap={'wrap'}
                    justifyContent={{ xs: 'center', sm: 'left' }}
                  >
                    <Typography color={'black'} variant={'subtitle1'}>
                      by {chef?.first_name} {chef?.last_name}
                    </Typography>
                    <Stack direction={'row'} gap={0.7}>
                      <Typography color={'black'} variant={'body1'}>
                        Rating:
                      </Typography>
                      <Typography variant="subtitle1">{chef?.rating}</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={0.7}>
                      <Typography color={'black'} variant={'body1'}>
                        Deliveries:
                      </Typography>
                      <Typography variant="subtitle1">{chef?.orders}</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={0.7}>
                      <Typography color={'black'} variant={'body1'}>
                        Zip code:
                      </Typography>
                      <Typography variant="subtitle1">{chef?.primary_address?.zip}</Typography>
                    </Stack>
                    <Stack direction={'row'} gap={0.7}>
                      <Typography color={'black'} variant={'body1'}>
                        Delivery fee:
                      </Typography>
                      <Typography variant="subtitle1">${chef?.delivery_fee ?? 4.99}</Typography>
                    </Stack>
                  </Stack>
                  <Box marginTop={{ xs: 2, md: 0 }}>
                    <Hidden mdDown>
                      <Box maxWidth={'600px'}>
                        <ReadMore>{chef?.about_me}</ReadMore>
                      </Box>
                    </Hidden>
                  </Box>
                </Stack>
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
            <Box mb={2}>
              <Typography variant="h3" color={'black'}>
                Available dates
              </Typography>
            </Box>
            <Stack direction={{ sm: 'row', xs: 'column' }} gap={2}>
              <Button
                variant={'contained'}
                sx={{
                  fontWeight: 500,
                  color: '#31342B',
                  textTransform: 'none',
                  background: '#B3B3B3',
                }}
              >
                {formattedDate} at {selectedTime}
              </Button>
              <Button
                onClick={() => setIsOpenScheduleDialog(true)}
                variant={'contained'}
                sx={{
                  fontWeight: 500,
                  color: '#31342B',
                  textTransform: 'none',
                  background: '#DAEFE5',
                }}
              >
                Select a new time
              </Button>
            </Stack>
          </Box>
          <Divider />
        </Box>
      </Container>
    </RootStyle>
  );
}
