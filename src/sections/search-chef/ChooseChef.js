import styled from '@emotion/styled';
import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Backdrop,
  Button,
  Divider,
  Card,
} from '@mui/material';
import Container from '../../components/Container';
import Iconify from '../../components/Iconify';
import NextLink from 'next/link';
import { PATH_PAGE } from '../../routes/paths';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import { useEffect, useState } from 'react';
import { dispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR } from 'src/redux/slices/city';
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

  const filterChefsByHalal = () => {
    searchLoading();
    setSearchKey('');
    const filteredArray = chefs.filter((item) => item.chef.halal);
    setChefsArray(filteredArray);
  };

  const filterChefsByCatering = () => {
    searchLoading();
    setSearchKey('');
    const filteredArray = chefs.filter((item) => item.chef.catering);
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
                onChange={(e) => {
                  setSearchKey(e.target.value);
                  setStatus(false);
                }}
                size="large"
                fullWidth
                value={searchKey}
                placeholder="Search for a meal, cuisine"
                hiddenLabel
                variant="filled"
                sx={{ padding: 1 }}
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

              <Stack
                direction={'row'}
                alignItems={'end'}
                gap={3}
                marginTop={2}
                whiteSpace={'nowrap'}
                sx={{ overflowX: 'auto' }}
              >
                <Stack
                  alignItems={'center'}
                  onClick={() => dispatch(openDialog('choose_city_dialog'))}
                  sx={{ cursor: 'pointer' }}
                >
                  <Image alt="another-city" width="50px" src="../../../../assets/chefs/another-city.png" />
                  <Typography variant="subtitle1" color="secondary">
                    Another City
                  </Typography>
                </Stack>
                <Stack
                  gap={1}
                  alignItems={'center'}
                  onClick={() => {
                    searchLoading();
                    setSearchKey('EurAsian');
                    searchChefs('eurasian');
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  <Image alt="eurasian" width="50px" src="../../../../assets/chefs/eurasian.png" />
                  <Typography variant="subtitle1" color="secondary">
                    EurAsian
                  </Typography>
                </Stack>
                <Stack alignItems={'center'} onClick={() => {}} sx={{ cursor: 'pointer' }}>
                  <Image alt="eurasian" width="50px" src="../../../../assets/chefs/cakes.png" />
                  <Typography variant="subtitle1" color="secondary">
                    Cakes
                  </Typography>
                </Stack>
                <Stack alignItems={'center'} onClick={filterChefsByHalal} sx={{ cursor: 'pointer' }}>
                  <Image alt="eurasian" width="50px" src="../../../../assets/chefs/halal.png" />
                  <Typography variant="subtitle1" color="secondary">
                    Halal
                  </Typography>
                </Stack>
                <Stack gap={1} alignItems={'center'} onClick={filterChefsByCatering} sx={{ cursor: 'pointer' }}>
                  <Image alt="eurasian" width="50px" src="../../../../assets/chefs/catering.png" />
                  <Typography variant="subtitle1" color="secondary">
                    Catering
                  </Typography>
                </Stack>
              </Stack>

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
                  alt="teexture"
                  src={'/assets/search-chef/Texture.png'}
                  sx={{ position: 'absolute', width: '100%', height: '100%', top: -2 }}
                />
                <Typography color={'white'} fontSize={{ xs: 16, sm: 20 }} fontWeight={400}>
                  Get free delivery on orders over $100
                </Typography>
              </Stack>
              {city && (
                <Typography variant="h3" color={'black'} marginTop={4}>
                  {city?.name}
                  {city?.state && `, ${city?.state}`}
                </Typography>
              )}
            </Stack>
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
            <Grid container spacing={4}>
              {chefsArray?.slice((currentPage - 1) * 12, currentPage * 12).map((item, _i) => (
                <NextLink
                  key={'chef-link' + _i}
                  href={
                    item?.chef?.can_sell
                      ? PATH_PAGE.searchChef.cities({ cityId, cuisineId, chefId: item?.chef?.id })
                      : '#'
                  }
                  passHref
                >
                  <Grid item xs={12} sm={6} lg={4}>
                    <Stack position={'relative'}>
                      <Card sx={{ borderRadius: 4, border: '0.5px solid #e1e1e1' }}>
                        <Image
                          objectFit="contain"
                          alt="Travis Howard"
                          src={item?.chef?.image_url}
                          sx={{ width: '100%', height: 180 }}
                        />
                      </Card>
                      <Stack
                        px={1}
                        direction={'row'}
                        marginTop={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Typography variant="h6" mr={3}>
                          {item?.chef?.company_name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ borderRadius: 10, background: 'lightGray', py: 0.5, px: 1.5 }}
                        >
                          {item?.chef?.rating}
                        </Typography>
                      </Stack>
                      <Stack px={1} direction={'row'}>
                        {item?.chef?.delivery_available && item?.chef?.delivery_fee > 1
                          ? `Delivery:  $${Math.floor((item?.chef?.delivery_fee ?? 4.9) * 10) / 10}`
                          : `Pick up Only`}
                        {item?.chef?.time_to_cook &&
                          ` * Schedule 
                          ${item?.chef?.time_to_cook}
                          ${item?.chef?.time_to_cook == 1 ? 'hr' : 'hrs'}
                          ahead`}
                      </Stack>
                      {!item?.chef?.can_sell && (
                        <Backdrop position={'absolute'} open={true} className="overlay">
                          <Typography variant="h3" sx={{ color: '#333' }}>
                            Comming Soon
                          </Typography>
                        </Backdrop>
                      )}
                    </Stack>
                  </Grid>
                </NextLink>
              ))}
            </Grid>
          )}
        </Box>
        {chefsArray?.length > 12 && (
          <Pagination count={Math.ceil(chefs?.length / 12)} setCurrentPage={setCurrentPage} />
        )}
      </Container>
    </RootStyle>
  );
}
