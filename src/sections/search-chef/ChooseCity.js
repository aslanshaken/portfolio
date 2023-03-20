import styled from '@emotion/styled';
import { Card, Divider, Grid, Stack } from '@mui/material';
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
    city: 'mexican',
    title: 'New york',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'italian',
    title: 'Chicago',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'japan',
    title: 'Chicago',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'ukrainian',
    title: 'Chicago',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'japan',
    title: 'Chicago',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    city: 'ukrainian',
    title: 'Chicago',
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
              <ChooseCard city={item.city} title={item.title} />
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
  '& *': {
    transition: '300ms !important',
  },
  '&:hover img': {
    transform: 'scale(1.5)',
  },
}));

ChooseCard.propTypes = {
  city: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------
function ChooseCard({ city, title }) {
  return (
    <RootStyle>
      <NextLink href={PATH_PAGE.searchChef.cities({ city })} passHref>
        <Card sx={{ position: 'relative', boxShadow: 0, borderRadius: 0, cursor: 'pointer' }}>
          <Image
            src={`/assets/search-chef/country/${city}.png`}
            alt={title}
            sx={{ borderRadius: 1, overflow: 'hidden', width: 1, height: 200 }}
          />
          <Stack direction="row" my={3} spacing={1}>
            <GradientText variant="subtitle1" color={'secondary'}>
              {title}
            </GradientText>
            <Iconify
              icon={'material-symbols:arrow-right-alt-rounded'}
              sx={{ width: 21, height: 21, color: 'primary.main', transform: 'rotate(315deg)' }}
            />
          </Stack>
        </Card>
      </NextLink>
    </RootStyle>
  );
}
