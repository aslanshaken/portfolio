import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Avatar, Box, Button, Divider, Typography, Hidden, Stack, Link, useStepContext } from '@mui/material';
import Container from '../../../components/Container';
import Iconify from '../../../components/Iconify';
import ReadMore from '../../../components/ReadMore';
import HeroHeader from 'src/components/HeroHeader';
import { useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
import { addDays, addHours, format, getMinutes, isToday, isTomorrow, parse } from 'date-fns';
import { FOOD_SELECTOR, setScheduleTime } from 'src/redux/slices/food';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PATH_PAGE } from 'src/routes/paths';
import ScheduleDialog from 'src/sections/checkout/ScheduleDialog';

ChefHeader.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
};

// ----------------------------------------------------------------------

export default function ChefHeader({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
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

  useEffect(() => {
    if (chefId && chefs) {
      const availableChefs = chefs?.filter((item) => item?.chef?.can_sell);
      const currentIndex = availableChefs?.findIndex((item) => item.chef.id == chefId);
      setPrevChefId(availableChefs?.[currentIndex - 1]?.chef?.id);
      setNextChefId(availableChefs?.[currentIndex + 1]?.chef?.id);
    }
  }, [chefId, chefs]);

  useEffect(() => {
    const availableDates = Object.keys(foods);
    const initialSlots = foods?.[availableDates[0]]?.slots;
    const currentTimePlusFiveHours = addHours(new Date(), chef?.time_to_cook);
    const filteredArray = initialSlots.filter((time) => parse(time, 'hh:mm a', new Date()) > currentTimePlusFiveHours);
    setSlots(filteredArray.length === 0 ? foods?.[availableDates[1]]?.slots : filteredArray);
    const temp = filteredArray.length === 0 ? availableDates.slice(1, availableDates.length - 1) : availableDates;
    setCategories(temp);

    if (cart[0]?.user_id === chef?.id) {
      setSelectedDate(scheduleDate);
      setScheduleTime(scheduleTime);
    } else {
      setSelectedDate(filteredArray.length === 0 ? availableDates[1] : availableDates[0]);
      setSelectedTime(filteredArray.length === 0 ? foods?.[availableDates[1]]?.slots?.[0] : filteredArray[0]);
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

  return (
    <>
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

      <HeroHeader cuisine={'Back'} />
      <Container>
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
    </>
  );
}
