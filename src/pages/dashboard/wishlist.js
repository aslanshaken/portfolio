// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import FoodCartCard from 'src/components/FoodCartCard';
import Pagination from 'src/components/Pagination';
// sections

const foodData = [
  {
    id: '1',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '2',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '3',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '4',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '5',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '6',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '7',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '8',
    chefavatar: 'adam-sandler',
    chefname: 'Michael',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
];

// ----------------------------------------------------------------------

WishlistPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function WishlistPage() {
  return (
    <Page title="Personal Account : Dashboard">
      <Grid container spacing={3}>
        {foodData.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Stack direction={'row'} alignItems={'center'} spacing={2} position={'relative'} zIndex={10}>
              <Avatar src={`/assets/search-chef/chefs/${item.chefavatar}.png`} sx={{ height: 56, width: 56 }} />
              <Typography>{item.chefname}</Typography>
            </Stack>
            <FoodCartCard
              sx={{ mt: -2 }}
              name={item.name}
              cover={`/assets/search-chef/foods/${item.filename}.png`}
              price={item.price}
              we_kc={`${item.weight} gr / ${item.kc} kc`}
            />
          </Grid>
        ))}
      </Grid>

      <Box mt={10} />
      <Pagination />
    </Page>
  );
}
