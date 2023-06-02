import styled from '@emotion/styled';
import {
  Box,
  Link,
  colors,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Backdrop,
  Button,
  Divider,
} from '@mui/material';
import Container from '../../components/Container';
import Iconify from '../../components/Iconify';
import Avatar from '../../components/Avatar';
import NextLink from 'next/link';
import { PATH_PAGE } from '../../routes/paths';
import { useRouter } from 'next/router';
import FoodCarousel from './choose-chef/FoodCarousel';
import Pagination from '../../components/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dispatch, useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getChefs } from 'src/redux/slices/city';
import useAuth from 'src/hooks/useAuth';
import Image from 'src/components/Image';
import LoadingScreen from 'src/components/LoadingScreen';
import { HEADER } from 'src/config';
import { openDialog } from 'src/redux/slices/dialog';
import useResponsive from 'src/hooks/useResponsive';

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
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
    height: '100%',
    zIndex: 10,
    background: '#FFFFFF',
    opacity: `0.8 !important`,
  },
}));

const VisitChefLinkStyle = styled(Link)(() => ({
  cursor: 'pointer',
}));

// --------------------------------------------

export default function ChooseChef() {
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { chefs, city, error } = useSelector(CITYCUISINE_SELECTOR);
  const router = useRouter();
  const { cuisineId, cityId } = router.query;
  const [warnningMsg, setWarnningMsg] = useState();
  const [chefsArray, setChefsArray] = useState(chefs);
  const [searchKey, setSearchKey] = useState('');
  const [status, setStatus] = useState(false);
  const isDesktop = useResponsive('up', 'sm');

  const searchChefs = (key) => {
    setCurrentPage(1);
    if (key.length > 3) {
      setWarnningMsg();
      const filteredArray = chefs.filter(
        (item) =>
          item.chef.birth_place.toLowerCase().includes(key.toLowerCase()) ||
          item.foods.find((food) => food.title.toLowerCase().includes(key.toLowerCase())) ||
          item.foods.find((food) => food.cuisine.name.toLowerCase().includes(key.toLowerCase()))
      );
      setChefsArray(filteredArray);
    } else {
      if (key.length > 1 && key.length < 4) {
        setWarnningMsg('requires at least 4 letters');
      } else {
        setWarnningMsg();
      }
      setChefsArray(chefs);
    }
  };

  const filterChefsByDeliveryAvailable = () => {
    const filteredArray = chefs.filter((item) => item.chef.delivery_available);
    setChefsArray(filteredArray);
  };

  const filterChefsByHalal = () => {
    searchLoading();
    const filteredArray = chefs.filter((item) => item.chef.halal);
    setChefsArray(filteredArray);
  };

  const filterChefsByCatering = () => {
    searchLoading();
    const filteredArray = chefs.filter((item) => item.chef.catering);
    setChefsArray(filteredArray);
  };

  const filterChefsByFrozen = () => {
    const filteredArray = chefs.filter((item) => item.chef.delivery_available);
    setChefsArray(filteredArray);
  };

  const filterChefsByCakes = () => {
    const filteredArray = chefs.filter((item) => item.chef.delivery_available);
    setChefsArray(filteredArray);
  };

  useEffect(() => {
    if (searchKey === '') {
      setStatus(false);
    }
  }, [searchKey]);

  const searchLoading = () => {
    setSearchIsLoading(true);
    setTimeout(() => {
      setSearchIsLoading(false);
    }, 500);
  };

  const onSubmit = () => {
    if (searchKey != '') {
      searchLoading();
      setStatus(!status);
      if (status) {
        setSearchKey('');
        searchChefs('');
      } else {
        searchChefs(searchKey);
      }
    } else {
      setChefsArray(chefs);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
    if (event.key === 'Backspace') {
      searchLoading();
      setSearchKey('');
      searchChefs('');
    }
  };

  if (error) return <LoadingScreen inner />;

  return (
    <RootStyle>
      <Container>
        <Box spacing={15} mt={8}>
          <Stack my={4}>
            <Stack>
              <TextField
                onChange={(e) => setSearchKey(e.target.value)}
                size="large"
                fullWidth
                value={searchKey}
                placeholder="Search for a meal, cuisine or country"
                hiddenLabel
                variant="filled"
                sx={{ padding: 1 }}
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

              <Box marginTop={2} whiteSpace={'nowrap'} sx={{ overflowX: 'auto' }}>
                <Button
                  sx={{ textTransform: 'none' }}
                  color="secondary"
                  onClick={() => dispatch(openDialog('choose_city_dialog'))}
                >
                  Select a different city
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    searchLoading();
                    setSearchKey('');
                    searchChefs('');
                  }}
                >
                  All Chefs
                </Button>
                {/* <Button onClick={filterChefsByDeliveryAvailable} color="secondary">
                  Delivery today
                </Button> */}
                <Button onClick={filterChefsByHalal} color="secondary">
                  Halal
                </Button>
                <Button onClick={filterChefsByCatering} color="secondary">
                  Catering
                </Button>
                {/* <Button onClick={filterChefsByFrozen} color="secondary">
                  Frozen Meals
                </Button>
                <Button onClick={filterChefsByCakes} color="secondary">
                  Cakes
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
              {city && (
                <Typography variant="h3" color={'black'} marginTop={4}>
                  Chefs in {city?.name}
                  {city?.state && `, ${city?.state}`}
                </Typography>
              )}
            </Stack>
            {/* <Box
              display={'flex'}
              position={'relative'}
              zIndex={10}
              justifyContent={'space-between'}
              gap={2}
              px={{md:8}}
              overflow={'auto'}
              mt={3}
              pb={1}
            >
              {categories.map((item) => (
                <Button
                  key={item.id}
                  variant={'outlined'}
                  sx={(theme) => ({
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    border: item.id === selectedDate && 'none',
                    background: item.id === selectedDate ? '#595959' : 'white',
                    color: item.id === selectedDate ? theme.palette.GradientText : '#31342B',
                  })}
                  onClick={() => setSelectedDate(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Box> */}
          </Stack>
          {searchIsLoading ? (
            <Stack position={'relative'} my={30}>
              <LoadingScreen />
            </Stack>
          ) : chefsArray?.length === 0 ? (
            <Stack textAlign={'center'} position={'relative'} minHeight={300} backgroundColor="white" padding={6}>
              <Image
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
            chefsArray?.slice((currentPage - 1) * 10, currentPage * 10).map((item, _i) => (
              <Box key={'chef-link' + _i} position={'relative'}>
                <NextLink
                  href={
                    item?.chef?.can_sell
                      ? PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: item?.chef?.id })
                      : '#'
                  }
                  passHref
                >
                  <Box
                    mb={4}
                    sx={{
                      border: '1px solid',
                      borderColor: colors.grey[300],
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      container
                      display={'flex'}
                      flexWrap={'wrap'}
                      gap={{ xs: 1.5, sm: 4 }}
                      px={{ sm: 4, xs: 1 }}
                      py={2}
                      sx={{
                        borderBottom: '1px solid',
                        borderColor: colors.grey[300],
                      }}
                    >
                      {item?.chef?.time_to_cook && (
                        <Stack direction={'row'} gap={0.7}>
                          <Typography>Ready in: </Typography>
                          <Typography variant="subtitle1">
                            {item?.chef?.time_to_cook}
                            {item?.chef?.time_to_cook == 1 ? 'hr' : 'hrs'}
                          </Typography>
                        </Stack>
                      )}
                      {item?.chef?.delivery_available && item?.chef?.delivery_fee > 1 ? (
                        <Stack direction={'row'} gap={0.7}>
                          <Typography>Delivery: </Typography>
                          <Typography variant="subtitle1" display={'flex'} flexWrap={'nowrap'}>
                            ${item?.chef?.delivery_fee ?? 4.99}
                          </Typography>
                        </Stack>
                      ) : (
                        <Typography variant="subtitle1" display={'flex'} flexWrap={'nowrap'}>
                          Pick up Only
                        </Typography>
                      )}
                      <Box>
                        <Typography display={'flex'} flexWrap={'nowrap'} gap={1} variant="subtitle1">
                          <Iconify
                            icon={'material-symbols:star'}
                            sx={{ width: 21, height: 21, color: 'primary.main' }}
                          />{' '}
                          {item?.chef?.rating}
                        </Typography>
                      </Box>
                      {/* <Stack direction={'row'} gap={0.7}>
                        <Typography>Orders: </Typography>
                        <Typography variant="subtitle1" display={'flex'} flexWrap={'nowrap'}>
                          {item?.chef?.orders}
                        </Typography>
                      </Stack> */}
                    </Box>
                    <Grid container spacing={{ xs: 5, md: 2 }} py={2}>
                      <Grid item xs={12} lg={4} ml={1}>
                        <Box display={'flex'} gap={2} alignItems={'center'} px={2} height={'100%'}>
                          <Box position="relative">
                            <Image
                              alt="Travis Howard"
                              src={item?.chef?.image_url}
                              sx={{ borderRadius: '50%', width: { lg: 180, xs: 150 }, height: { lg: 180, xs: 150 } }}
                            />
                            <Iconify
                              icon={'material-symbols:verified'}
                              sx={{
                                width: 25,
                                height: 25,
                                color: '#0ED3CF',
                                position: 'absolute',
                                top: 10,
                                right: 10,
                              }}
                            />
                          </Box>
                          <Stack spacing={2}>
                            <Typography variant="subtitle1" mr={3}>
                              {item?.chef?.company_name}
                            </Typography>
                            <Typography variant="caption">
                              by {item?.chef?.first_name} {item?.chef?.last_name}
                            </Typography>
                            {item?.chef?.status && (
                              <Typography color={'primary'} variant="subtitle1">
                                {item?.chef?.status}
                              </Typography>
                            )}
                            {/* <Box display={{ xs: 'block', lg: 'none' }}>
                        <VisitChef />
                      </Box> */}
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={8} py={2} alignItems={'center'} height={'100%'} ml={{ lg: -4 }}>
                        {item?.foods?.length > 0 && <FoodCarousel foods={item?.foods} />}
                      </Grid>
                    </Grid>
                  </Box>
                </NextLink>
                {!item?.chef?.can_sell && (
                  <Backdrop position={'absolute'} open={true} className="overlay">
                    <Typography variant="h3" sx={{ color: '#333' }}>
                      Comming Soon
                    </Typography>
                  </Backdrop>
                )}
              </Box>
            ))
          )}
        </Box>
        {chefsArray?.length > 10 && (
          <Pagination count={Math.ceil(chefs?.length / 10)} setCurrentPage={setCurrentPage} />
        )}
      </Container>
    </RootStyle>
  );
}

// -------------------------------------------------

function VisitChef() {
  return (
    <VisitChefLinkStyle underline="none">
      <Stack direction="row" spacing={1}>
        <Typography variant="subtitle2" color={'secondary'} whiteSpace={'nowrap'}>
          Visit Chef
        </Typography>
        <Iconify
          icon={'material-symbols:arrow-right-alt-rounded'}
          sx={{ width: 21, height: 21, color: 'primary.main' }}
        />
      </Stack>
    </VisitChefLinkStyle>
  );
}
