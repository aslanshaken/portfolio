import styled from '@emotion/styled';
import { Card, Container, Grid, Typography, Link, Button } from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import Iconify from 'src/components/Iconify';
import Image from 'src/components/Image';

// const RootStyle = styled('div')(({ theme }) => ({}));

// ----------------------------------------------------------------------

const country_data = [
  {
    country: 'mexican',
    title: 'Mexican Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    country: 'italian',
    title: 'Italian Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    country: 'japan',
    title: 'Japan Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    country: 'ukrainian',
    title: 'Ukrainian Cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
];

export default function ChooseCuisine({}) {
  return (
    <>
      <Container maxWidth="lg">
        asdasda
        <Grid container spacing={4}>
          {country_data.map((item) => (
            <Grid item md={6} key={item.country}>
              <ChooseCard country={item.country} title={item.title} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const ChooseCardStyle = styled(Box)(() => ({
  '& *': {
    transition: '300ms !important',
  },
  '&:hover img': {
    transform: 'scale(1.5)',
  },
}));

const Overlayer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'flex-end',
  color: theme.palette.common.white,
}));

ChooseCard.propTypes = {
  country: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------
function ChooseCard({ country, title }) {
  return (
    <ChooseCardStyle>
      <NextLink href={`/menu/${country}`}>
        <Link component={Button} sx={{ p: 0 }}>
          <Card sx={{ position: 'relative' }}>
            <Image src={`/assets/menu/country_food/${country}.png`} alt={title} borderRadius={1} />
            <Overlayer>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h3">{title}</Typography>
                <Iconify
                  icon={'material-symbols:arrow-right-alt-rounded'}
                  sx={{ width: 35, height: 35, color: 'primary.main', transform: 'rotate(315deg)', mt: 1 }}
                />
              </Box>
            </Overlayer>
          </Card>
        </Link>
      </NextLink>
    </ChooseCardStyle>
  );
}
