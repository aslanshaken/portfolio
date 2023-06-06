import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Avatar, Box, Button, Divider, Typography, Hidden, Stack, TextField, InputAdornment } from '@mui/material';
import Container from '../../../components/Container';
import Iconify from '../../../components/Iconify';
import ReadMore from '../../../components/ReadMore';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { addDays, addHours, format, isAfter, isSameDay, isToday, isTomorrow, parse } from 'date-fns';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ScheduleDialog from 'src/sections/checkout/ScheduleDialog';
import useResponsive from 'src/hooks/useResponsive';
import styled from '@emotion/styled';
import { HEADER } from 'src/config';
import Image from 'src/components/Image';

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
  setSearchIsLoading,
  setCurrentPage,
}) {
  const router = useRouter();
  const { chefs } = useSelector(CITYCUISINE_SELECTOR);
  const { cityId, cuisineId, chefId } = router.query;
  const chefData = chefs.find((item) => item.chef.id == chefId);
  const { chef } = chefData ?? {};
  const [isOpenScheduleDialog, setIsOpenScheduleDialog] = useState(false);
  const { foods, checkout } = useSelector(FOOD_SELECTOR);
  const { cart, scheduleDate, scheduleTime } = checkout;
  const [formattedDate, setFormattedDate] = useState();
  const [categories, setCategories] = useState();
  const [slots, setSlots] = useState();
  const [warnningMsg, setWarnningMsg] = useState();
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState(false);
  const isDesktop = useResponsive('up', 'sm');

  useEffect(() => {
    const availableDates = Object.keys(foods)?.filter(
      (item) => isSameDay(new Date(item), new Date()) || isAfter(new Date(item), new Date())
    );
    const initialSlots = foods?.[availableDates[0]]?.slots;
    const currentTimePlusFiveHours = addHours(new Date(), chef?.time_to_cook ?? 0);
    const filteredArray = initialSlots?.filter((time) => parse(time, 'hh:mm a', new Date()) > currentTimePlusFiveHours);
    setSlots(filteredArray?.length === 0 ? foods?.[availableDates[1]]?.slots : filteredArray);
    const tomorrowSlots = foods?.[availableDates[1]]?.slots.filter(
      (time) => addDays(parse(time, 'hh:mm a', new Date()), 1) > currentTimePlusFiveHours
    );
    const temp = filteredArray?.length === 0 ? availableDates.slice(1, availableDates.length - 1) : availableDates;
    setCategories(temp);

    if (cart[0]?.user_id === chef?.id) {
      setSelectedDate(scheduleDate);
      setSelectedTime(scheduleTime);
    } else {
      setSelectedDate(filteredArray?.length === 0 ? availableDates[1] : availableDates[0]);
      setSelectedTime(filteredArray?.length === 0 ? tomorrowSlots?.[0] : filteredArray?.[0]);
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

  const searchLoading = () => {
    setSearchIsLoading(true);
    setTimeout(() => {
      setSearchIsLoading(false);
    }, 500);
  };

  const searchFoods = (key) => {
    setCurrentPage(1);
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

  useEffect(() => {
    if (searchKey === '') {
      setStatus(false);
    }
  }, [searchKey]);

  const onSubmit = () => {
    if (searchKey != '') {
      searchLoading();
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
      searchLoading();
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

      <Container>
        <Stack>
          <TextField
            onChange={(e) => {
              setStatus(false);
              setSearchKey(e.target.value);
            }}
            size="large"
            fullWidth
            value={searchKey}
            placeholder="Search for a meal"
            hiddenLabel
            variant="filled"
            sx={{ padding: 1, marginTop: 4 }}
            onKeyDown={handleKeyDown}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={'mingcute:search-line'} className="defaultIconSize" />
                </InputAdornment>
              ),
              ...(isDesktop && {
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
              }),
            }}
          />

          <Typography color={'error'}>{warnningMsg}</Typography>

          <Box whiteSpace={'nowrap'} sx={{ overflowX: 'auto' }}>
            <NextLink color="inherit" href={`/cities/${cityId}/${cuisineId}/`} passHref>
              <Button size='large' color="secondary">Go back</Button>
            </NextLink>
          </Box>

          <Divider sx={{mb:2}} />
          <Image alt="header" height="180px" src="../../../../assets/single-chef/header.png" />
        </Stack>
        <Box display={'flex'} mb={7} mt={{ sm: -14, xs: -10 }}>
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
                        sm: 130,
                        xs: 100,
                      },
                      height: {
                        sm: 130,
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
                <Stack gap={{ xs: 2, md: 0 }} width={'100%'}>
                  <Stack mt={{ sm: 11 }} textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography color={'black'} variant={'h3'} fontWeight={'600'}>
                      {chef?.company_name}
                    </Typography>
                    <Typography pb={1} color={'black'} variant={'subtitle1'}>
                      by {chef?.first_name} {chef?.last_name}
                    </Typography>
                  </Stack>
                  <Box>
                    <Hidden smDown>
                      <Box maxWidth={'600px'}>
                        <ReadMore>{chef?.about_me}</ReadMore>
                      </Box>
                    </Hidden>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Hidden smUp>
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
