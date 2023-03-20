import styled from '@emotion/styled';
import { Card, colors, Divider, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { PATH_PAGE } from '../../routes/paths';
import GradientText from '../../components/GradientText';
import Iconify from '../../components/Iconify';
import Container from '../../components/Container';
import Image from '../../components/Image';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const cuisines_data = [
  {
    cuisine: 'italian-cuisine',
    title: 'Italian cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    cuisine: 'ukrainian-cuisine',
    title: 'Ukrainian cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    cuisine: 'japan-cuisine',
    title: 'Japan cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    cuisine: 'italian-cuisine',
    title: 'Italian cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    cuisine: 'ukrainian-cuisine',
    title: 'Ukrainian cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
  {
    cuisine: 'japan-cuisine',
    title: 'Japan cuisine',
    price: '500',
    description: '',
    gram: '',
    allergies: [{}],
    typeOfCategories: [{}],
  },
];

export default function ChooseCuisines() {
  return (
    <>
      <Container>
        {/* <Typography variant="h2">Choose your city</Typography> */}

        <Divider />

        <Grid
          container
          py={10}
          mx="auto"
          maxWidth={'700px'}
        >
          {cuisines_data.map((item) => (
            <Grid item md={4} sm={6} xs={12} key={item.cuisine} display={'flex'} justifyContent={'center'}>
              <ChooseCard cuisine={item.cuisine} title={item.title} />
            </Grid>
          ))}
        </Grid>
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
  cuisine: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------
function ChooseCard({ cuisine, title }) {
  const router = useRouter();
  const { city } = router.query;

  return (
    <RootStyle>
      <NextLink href={PATH_PAGE.searchChef.cities({ city, cuisine })} passHref>
        <Card
          sx={{
            mb:2,
            width: 200,
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            position: 'relative',
            boxShadow: 0,
            borderRadius: 1,
            border: '1px solid',
            borderColor: colors.grey[200],
            cursor: 'pointer'
          }}
        >
          <Image
            src={`/assets/search-chef/cuisines/${cuisine}.png`}
            alt={title}
            sx={{ borderRadius: 1, overflow: 'hidden', width: 150, height: 150 }}
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
