import styled from '@emotion/styled';
import { Divider, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { PATH_PAGE } from '../../routes/paths';
import GradientText from '../../components/GradientText';
import Iconify from '../../components/Iconify';
import Image from '../../components/Image';
import Container from '../../components/Container';
import Pagination from '../../components/Pagination';

// ----------------------------------------------------------------------

const city_data = [
  {
    city: 'new_york',
    title: 'New york',
    image: '/assets/search-chef/country/mexican.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'chicago',
    title: 'Chicago',
    image: '/assets/search-chef/country/italian.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'chicago',
    title: 'Chicago',
    image: '/assets/search-chef/country/japan.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'chicago',
    title: 'Chicago',
    image: '/assets/search-chef/country/ukrainian.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'chicago',
    title: 'Chicago',
    image: '/assets/search-chef/country/japan.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'chicago',
    title: 'Chicago',
    image: '/assets/search-chef/country/ukrainian.png',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
];

export default function ChooseCity() {
  return (
    <>
      <Container>
        {/* <Typography variant="h2">Choose your city</Typography> */}

        <Divider />

        <Grid container spacing={4} mt={10} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          {city_data.map((item, _i) => (
            <Grid item md={4} key={_i}>
              <ChooseCard data={item} />
            </Grid>
          ))}
        </Grid>

        <Pagination />
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const RootStyle = styled(Box)(() => ({
  cursor: 'pointer',
  transition: '500ms !important',
  '& *': {
    transition: '1s !important',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
  '&:hover': {
    opacity: 0.8,
  },
}));

ChooseCard.propTypes = {
  data: PropTypes.object
};

// ----------------------------------------------------------------------
function ChooseCard({ data = {}}) {
  return (
    <RootStyle>
      <NextLink href={PATH_PAGE.searchChef.cities({ city: data.city })} passHref>
        <Stack>
          <Image
            src={data.image}
            alt={data.title}
            sx={{ borderRadius: 1, overflow: 'hidden', width: 1, height: 200 }}
          />
          <Stack direction={'row'} my={3} spacing={1}>
            <GradientText variant="subtitle1" color={'secondary'}>
              {data.title}
            </GradientText>
            <Iconify
              icon={'material-symbols:arrow-right-alt-rounded'}
              sx={{ width: 21, height: 21, color: 'primary.main', transform: 'rotate(315deg)' }}
            />
          </Stack>
        </Stack>
      </NextLink>
    </RootStyle>
  );
}
