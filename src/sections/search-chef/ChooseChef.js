import styled from '@emotion/styled';
import { Autocomplete, Box, Link, colors, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import FoodCard from '../../components/FoodCard';
import Container from '../../components/Container';
import Iconify from '../../components/Iconify';
import Avatar from '../../components/Avatar';
import NextLink from 'next/link';
import { PATH_PAGE } from '../../routes/paths';
import { useRouter } from 'next/router';
import FoodCarousel from './choose-chef/FoodCarousel';
import Pagination from '../../components/Pagination';
// --------------------------------------------

const sort_type = [{ name: 'sort by Popularity' }, { name: 'sort by New' }, { name: 'sort by Oldest' }];

const chefData = [
  {
    chef: 'adam-sandler',
    rating: 5,
    deliveries: 28,
    name: 'Adam Sandler',
    status: 'Certified chef',
    foods: [
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
    ],
  },
  {
    chef: 'adam-sandler',
    rating: 5,
    deliveries: 28,
    name: 'Adam Sandler',
    status: 'Certified chef',
    foods: [
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
    ],
  },
  {
    chef: 'adam-sandler',
    rating: 5,
    deliveries: 28,
    name: 'Adam Sandler',
    status: 'Certified chef',
    foods: [
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
    ],
  },
  {
    chef: 'adam-sandler',
    rating: 5,
    deliveries: 28,
    name: 'Adam Sandler',
    status: 'Certified chef',
    foods: [
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
      {
        id: '18',
        filename: 'chilli_pepper',
        name: 'chillid pepper',
        price: '9.99',
        weight: '250',
        kc: '430',
      },
    ],
  },
];

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
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
    borderRadius: theme.spacing(1),
    '& *': {
      border: 0,
    },
  },
}));

const VisitChefLinkStyle = styled(Link)(() => ({
  cursor: 'pointer',
}));

// --------------------------------------------

export default function ChooseChef() {
  const router = useRouter();
  const { city } = router.query;
  const { cuisine } = router.query;

  return (
    <RootStyle>
      <Container>
        <Box spacing={15} pt={15}>
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography variant="h3" color={'black'} display={'flex'} alignItems={'center'}>
                New-York Chefs
              </Typography>
            </Grid>

            <Grid item md={8}>
              <Grid container>
                <Grid item md={5} sm={4} />
                <Grid item md={7} sm={12} xs={12} display={'flex'} gap={2}>
                  <TextField
                    fullWidth
                    // label="Search by ZIP"
                    placeholder="Search by ZIP"
                    hiddenLabel
                    type="search"
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Iconify icon={'mingcute:search-line'} className="defaultIconSize" />
                        </InputAdornment>
                      ),
                    }}
                  />
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
                        placeholder="Choose a short"
                        label="Choose a short"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password',
                        }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {chefData.map((item, _i) => (
            <NextLink
              key={'chef-link' + _i}
              href={PATH_PAGE.searchChef.cities({ city, cuisine, chef: item.chef })}
              passHref
            >
              <Box
                mt={4}
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
                  gap={4}
                  px={{ lg: 8, xs: 4 }}
                  py={2}
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: colors.grey[300],
                  }}
                >
                  <Box>
                    <Typography display={'flex'} flexWrap={'nowrap'} gap={1} variant="subtitle1">
                      Rating: {item.rating}
                      <Iconify icon={'material-symbols:star'} sx={{ width: 21, height: 21, color: 'primary.main' }} />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" display={'flex'} flexWrap={'nowrap'}>
                      Deliveries: {item.deliveries}
                    </Typography>
                  </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} px={4} py={2}>
                  <Box display={'flex'} justifyContent={'space-around'} gap={4} alignItems={'center'}>
                    <Avatar
                      alt="Travis Howard"
                      src={`/assets/search-chef/chefs/${item.chef}.png`}
                      sx={{ width: { lg: 150, xs: 100 }, height: { lg: 150, xs: 100 } }}
                    />
                    <Box
                      py={6}
                      sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-around', height: '100%' }}
                    >
                      <Typography variant="subtitle1" display={'flex'} whiteSpace={'nowrap'} gap={1}>
                        {item.name}
                        <Iconify icon={'material-symbols:verified'} sx={{ width: 21, height: 21, color: '#0ED3CF' }} />
                      </Typography>
                      <Typography color={'primary'} variant="subtitle1">
                        {item.status}
                      </Typography>
                      <Box display={{ xs: 'block', md: 'none' }}>
                        <VisitChef />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display={{ md: 'flex', xs: 'none' }}
                    py={2}
                    overflow={'auto'}
                    width={{ xs: '100%', lg: 'fit-content' }}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={4}
                  >
                    {item.foods.map((food, _i) => (
                      <Box key={_i}>
                        <FoodCard
                          name={food.name}
                          cover={`/assets/search-chef/foods/${food.filename}.png`}
                          price={food.price}
                          we_kc={`${food.weight} gr / ${food.kc} kc`}
                        />
                      </Box>
                    ))}
                    <Box display={{ xs: 'none', md: 'block' }}>
                      <VisitChef />
                    </Box>
                  </Box>
                  <Box display={{ xs: 'block', md: 'none' }} width={'100%'}>
                    <FoodCarousel foods={item.foods} />
                  </Box>
                </Box>
              </Box>
            </NextLink>
          ))}
        </Box>
        <Pagination />
      </Container>
    </RootStyle>
  );
}

// -------------------------------------------------

function VisitChef({}) {
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
