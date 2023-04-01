import styled from '@emotion/styled';
import {
  Autocomplete,
  Box,
  Link,
  colors,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import FoodCard from '../../components/FoodCard';
import Container from '../../components/Container';
import Iconify from '../../components/Iconify';
import Avatar from '../../components/Avatar';
import NextLink from 'next/link';
import { PATH_PAGE } from '../../routes/paths';
import { useRouter } from 'next/router';
import FoodCarousel from './choose-chef/FoodCarousel';
import Pagination from '../../components/Pagination';
import { useState } from 'react';
// --------------------------------------------

const sort_type = [{ name: 'sort by Popularity' }, { name: 'sort by New' }, { name: 'sort by Oldest' }];

const categories = [
  {
    id: '1',
    label: 'Frozen Meals',
  },
  {
    id: '2',
    label: 'Cakes',
  },
  {
    id: '3',
    label: 'Vegeterian',
  },
  {
    id: '4',
    label: 'Halal',
  },
  {
    id: '5',
    label: 'Catering',
  },
  {
    id: '6',
    label: 'Popular',
  },
  {
    id: '7',
    label: 'Delivery today',
  },
];

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
    borderRadius: theme.shape.borderRadius * 2,
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
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <RootStyle>
      <Container>
        <Box spacing={15} mt={8}>
          <Stack my={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <Typography variant="h3" color={'black'}>
                  Austin Chefs
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  size="small"
                  fullWidth
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
              </Grid>
            </Grid>
            <Box
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
                    border: item.id === selectedCategory && 'none',
                    background: item.id === selectedCategory ? '#595959' : 'white',
                    color: item.id === selectedCategory ? theme.palette.GradientText : '#31342B',
                  })}
                  onClick={() => setSelectedCategory(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Stack>

          {chefData.map((item, _i) => (
            <NextLink
              key={'chef-link' + _i}
              href={PATH_PAGE.searchChef.cities({ city, cuisine, chef: item.chef })}
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
                <Grid container px={4}>
                  <Grid display={'flex'} gap={4} alignItems={'center'} item xs={12} lg={4}>
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
                      <Typography variant='caption' >by ADS</Typography>
                      <Typography color={'primary'} variant="subtitle1">
                        {item.status}
                      </Typography>
                      {/* <Box display={{ xs: 'block', lg: 'none' }}>
                        <VisitChef />
                      </Box> */}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={8}
                    display={{md:'flex'}}
                    py={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Box flex={'1'}>
                      <FoodCarousel foods={item.foods} />
                    </Box>
                    <Box display={{ xs: 'none', lg: 'block' }}>
                      <VisitChef />
                    </Box>
                  </Grid>
                </Grid>
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
